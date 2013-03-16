module.exports = function (variables) {
  if (!variables)
    throw new Error('Argument required.');

  if (Object(variables) !== variables)
    throw new TypeError('Variables must be an object dictionary.');

  // Validate variables
  Object.keys(variables).forEach(function (name) {
    if (!name.match(/^[\w-]+$/))
      throw new Error('Each variable name must be a \\w.');

    if (typeof variables[name] !== 'string')
      variables[name] = String(variables[name]);
  })

  var regex = /(^|\b)\$([\w-]+)(\b|$)/g

  function replace(str) {
    return str.replace(regex, function (_, NULL, name) {
      return variables[name] || name
    })
  }

  function check(str) {
    return str.match(regex)
  }

  return function visit(node) {
    node.rules.forEach(function (rule) {
      var query = rule.media
      if (query) rule.media = variables[query] || replace(query);

      // media queries
      if (rule.rules) return visit(rule);

      var declarations = rule.declarations
      if (!declarations) return;

      declarations.forEach(function (declaration) {
        declaration.value = replace(declaration.value)
      })
    })
  }
}