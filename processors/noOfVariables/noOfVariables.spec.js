const acorn = require('acorn');
const noOfVariables = require('./noOfVariables');
const should = require('should');


describe('No of Variables', function() {
	it('should have 2 variables', function(done) {
		const input = "var a = 2, b;";
		const ast = acorn.parse(input);
		noOfVariables(ast, function(err, reply) {
			if(err) { return done(err); }
			reply.should.be.exactly(2);
			done();
		});
	});

	it('should have 4 variables', function(done) {
		const input = "var a = 2; const b = 10; let c = 2, d;";
		const ast = acorn.parse(input);
		noOfVariables(ast, function(err, reply) {
			if(err) { return done(err); }
			reply.should.be.exactly(4);
			done();
		});
	});
});