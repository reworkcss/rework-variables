var fs = require('fs')
var assert = require('assert')

var rework = require('rework')
var variables = require('../')

function read(file) {
  return fs.readFileSync('test/fixtures/' + file + '.css', 'utf8')
}

function test(file, msg) {
  var out = rework(read(file)).use(variables({
    one: 1,
    two: '2',
    three: 'three',
    '1': 'one',
    'dash-es': 'dash me',
    camelCase: 'camel',
    mediaQuery: '(min-width: 320px)',
    'under_score': 'underscore'
  })).toString()

  assert.equal(out, read(file + '.out'), msg + ':\n' + out)
}

test('variables', 'Variables failed')
test('media', 'Media failed')
test('context', 'Context failed')