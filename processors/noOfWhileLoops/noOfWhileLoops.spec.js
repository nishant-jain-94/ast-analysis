const acorn = require('acorn');
const noOfWhileLoops = require('./noOfWhileLoops');
const should = require('should');

describe('No Of While Loops', function() {
	it('Should have exactly 1 while loop', function(done) {
		const input = "while(True) { console.log('Infinite Loops')}";
		const ast = acorn.parse(input);
		noOfWhileLoops(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(1);
			done();
		});
	});

	it('Should have exactly 2 while loops when one while loop is nested within the other', function(done) {
		const input = "var i=0; while(i<10) { var y = 5; while(y==0) { y--; i++; } }";
		const ast = acorn.parse(input);
		noOfWhileLoops(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(2);
			done();
		});
	});
});
