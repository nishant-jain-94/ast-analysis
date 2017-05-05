const JSONPath = require('jsonpath');

module.exports = function(ast, done) {
	let noOfLets = Array.prototype.concat([], JSONPath.query(ast, '$..[?(@.kind=="let")].declarations[?(@.type=="VariableDeclarator")]')).length;
	done(null, noOfLets);
}