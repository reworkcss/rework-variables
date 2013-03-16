var regex = /(^|\s)\$([\w-]+)(\s|$)/g

module.exports = function (variables) {
  function replace(str) {
    return str.replace(regex, function (_, start, name, end) {
      return start + (variables[name] || name) + end
    })
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

function check(str) {
  return str.match(regex)
}