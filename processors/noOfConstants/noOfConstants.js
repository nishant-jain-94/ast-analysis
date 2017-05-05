const JSONPath = require('jsonpath');
const util = require('util');

module.exports = function(ast, done) {
	let noOfConstants = JSONPath.query(ast, '$..[?(@.kind=="const")].declarations').length;
	done(null, noOfConstants);
}