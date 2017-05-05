const acorn = require('acorn');
const should = require('should');
const noOfNamedFunctions = require('./noOfNamedFunctions');

describe('No Of Named Functions', function() {
	it('should have exactly 1 named function', function(done) {
		const input = "function displayHello() { console.log('Hello World'); }";
		const ast = acorn.parse(input);
		noOfNamedFunctions(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(1);
			done();	
		});
	});

	it('should have 0 named function', function(done) {
		const input = "var displayHello = function() { console.log('Hello World'); }";
		const ast = acorn.parse(input);
		noOfNamedFunctions(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(0);
			done();	
		});
	});
});