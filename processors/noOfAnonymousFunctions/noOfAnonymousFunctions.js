const JSONPath = require('jsonpath');

module.exports = function(ast, done) {
	const noOfNamedFunctions = JSONPath.query(ast, '$..[?(@.type=="FunctionExpression" && @.id==null)]').length;
	done(null, noOfNamedFunctions);
};