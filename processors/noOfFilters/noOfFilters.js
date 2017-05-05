const JSONPath = require('jsonpath');

module.exports = function(ast, done) {
	const noOfFilters = JSONPath.query(ast, '$..[?(@.property.name=="filter")]').length;
	done(null, noOfFilters);
};