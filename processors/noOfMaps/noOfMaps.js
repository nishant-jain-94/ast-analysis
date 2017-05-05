const JSONPath = require('jsonpath');

module.exports = function(ast, done) {
	const noOfMapStatements = JSONPath.query(ast, '$..[?(@.property.name=="map")]').length;
	done(null, noOfMapStatements);
}