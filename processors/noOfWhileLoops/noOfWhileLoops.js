const JSONPath = require('jsonpath');

module.exports = function(ast, done) {
	const noOfWhileStatements = JSONPath.query(ast, '$..[?(@.type=="WhileStatement")]').length;
	done(null, noOfWhileStatements);
};