const JSONPath = require('jsonpath');

module.exports = function(ast, done) {
	let noOfIfs = JSONPath.query(ast, '$..[?(@.type=="IfStatement")]').length;
	done(null, noOfIfs);
}