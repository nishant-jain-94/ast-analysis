const JSONPath = require('jsonpath');

module.exports = function(ast, done) {
	const noOfArrowFunctions = JSONPath.query(ast, "$..[?(@.type=='ArrowFunctionExpression')]").length;
	done(null, noOfArrowFunctions);
};