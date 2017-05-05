const JSONPath = require('jsonpath');
const util = require('util');

module.exports = function(ast, done) {
	const noOfSwitchStatements = JSONPath.query(ast, '$..[?(@.type=="SwitchStatement")]').length;
	done(null, noOfSwitchStatements);
}