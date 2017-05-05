const JSONPath = require('jsonpath');

module.exports = function(ast, done) {
	const noOfSort = JSONPath.query(ast, '$..[?(@.property.name=="sort")]').length;
	done(null, noOfSort);
}