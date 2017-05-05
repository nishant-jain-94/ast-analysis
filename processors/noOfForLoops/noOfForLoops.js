const JSONPath = require('jsonpath');

module.exports = function(ast, done) {
	const noOfForLoops = JSONPath.query(ast, '$..[?(@.type=="ForStatement")]').length;
	done(null, noOfForLoops);
};
