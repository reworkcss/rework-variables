var regex = /(^|,|\s|\()\$([\w-]+)($|,|\s|\))/g

module.exports = function (variables) {
  return function visit(node) {
    node.rules.forEach(function (rule) {
      var query = rule.media
      if (query)
        rule.media = variables[query] || replace(query)

      // media queries
      if (rule.rules)
        return visit(rule)

      var declarations = rule.declarations
      if (!declarations)
        return

      declarations.forEach(function (declaration) {
        if (declaration.type !== 'comment')
          declaration.value = replace(declaration.value)
      })
    })
  }

  function replace(str) {
    return str.replace(regex, function (original, start, name, end) {
      return name in variables
        ? start + variables[name] + end
        : original
    })
  }
}
