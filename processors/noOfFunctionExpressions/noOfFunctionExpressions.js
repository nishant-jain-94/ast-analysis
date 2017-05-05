const JSONPath = require('jsonpath');

module.exports = function(ast, done) {
	const noOfFunctionExpression = JSONPath.query(ast, '$..declarations[?(@.type=="VariableDeclarator" && @.init.type=="FunctionExpression")]').length;
	done(null, noOfFunctionExpression);
};