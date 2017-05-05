const acorn = require('acorn');
const noOfVars = require('./noOfVars.js');
const should = require('should');


describe('No of Vars', function() {
	it('should have 1 var', function(done) {
		const input = "var a = 2;";
		const ast = acorn.parse(input);
		noOfVars(ast, function(err, reply) {
			if(err) { return done(err); }
			reply.should.be.exactly(1);
			done();
		});
	});

	it('should have 4 var', function(done) {
		const input = "var a = 2; var b = 10; var c = 2, d;";
		const ast = acorn.parse(input);
		noOfVars(ast, function(err, reply) {
			if(err) { return done(err); }
			reply.should.be.exactly(4);
			done();
		});
	});
});