const JSONPath = require('jsonpath');

module.exports = function(ast, done) {
	let noOfVariable = JSONPath.query(ast, '$..declarations[?(@.type=="VariableDeclarator")]').length;
	done(null, noOfVariable);
}