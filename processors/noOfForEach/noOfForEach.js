const JSONPath = require('jsonpath');
const util = require('util');

module.exports = function(ast, done) {
	const noOfForEach = JSONPath.query(ast, '$..[?(@.property.name=="forEach")]').length;
	done(null, noOfForEach);
};