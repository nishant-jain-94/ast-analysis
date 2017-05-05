const acorn = require('acorn');
const noOfLets = require('./noOfLets.js');
const should = require('should');


describe('No of Lets', function() {
	it('should have 1 let', function(done) {
		const input = "let a = 2;";
		const ast = acorn.parse(input);
		noOfLets(ast, function(err, reply) {
			if(err) { return done(err); }
			reply.should.be.exactly(1);
			done();
		});
	});

	it('should have 4 let', function(done) {
		const input = "let a = 2; let b = 10; let c = 2, d;";
		const ast = acorn.parse(input);
		noOfLets(ast, function(err, reply) {
			if(err) { return done(err); }
			reply.should.be.exactly(4);
			done();
		});
	});
});