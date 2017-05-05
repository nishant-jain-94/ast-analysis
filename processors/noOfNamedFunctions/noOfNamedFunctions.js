const JSONPath = require('jsonpath');
const util = require('util');

module.exports = function(ast, done) {
	const noOfNamedFunctions = JSONPath.query(ast, '$..[?(@.type=="FunctionDeclaration" && @.id.name!="")]').length;
	done(null, noOfNamedFunctions);
};