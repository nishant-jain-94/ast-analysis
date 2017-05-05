const acorn = require('acorn');
const noOfConstants = require('./noOfConstants.js');
const should = require('should');


describe('No of Constants', function() {
	it('should have 1 constant', function(done) {
		const input = "const a = 2;";
		const ast = acorn.parse(input);
		noOfConstants(ast, function(err, reply) {
			if(err) { return done(err); }
			reply.should.be.exactly(1);
			done();
		});
	});

	it('should have 2 constant', function(done) {
		const input = "const a = 2; const b = 10; let c = 2, d;";
		const ast = acorn.parse(input);
		noOfConstants(ast, function(err, reply) {
			if(err) { return done(err); }
			reply.should.be.exactly(2);
			done();
		});
	});
});