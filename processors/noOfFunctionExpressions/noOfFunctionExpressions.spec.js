const acorn = require('acorn');
const should = require('should');
const noOfFunctionExpressions = require('./noOfFunctionExpressions');

describe('No Of Function Expression', function() {
	it("Should have exactly 1 function expression", function(done) {
		const input = "var displayHelloWorld = function() { console.log('Hello World');}";
		const ast = acorn.parse(input);
		noOfFunctionExpressions(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(1);
			done();
		});
	});

	it("Should have exactly 0 function expression", function(done) {
		const input = "function displayHelloWorld() { console.log('Hello World'); }";
		const ast = acorn.parse(input);
		noOfFunctionExpressions(ast, function(err, reply) {
			reply.should.be.exactly(0);
			done();
		});
	});
});