const acorn = require('acorn');
const noOfForLoops = require('./noOfForLoops');
const should = require('should');

describe('No For Loops', function() {
	it('Should have 1 for loop', function(done) {
		const input = "for(var i=0;i<10;i++) { console.log('*') }";
		const ast = acorn.parse(input);
		noOfForLoops(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(1);
			done();
		});
	});

	it('Should have 2 for loops when one for loop is nested within the other', function(done) {
		const input = "for(var i=0;i<10;i++) { for(var j=0;j<10;j++) { console.log(i,j); }}";
		const ast = acorn.parse(input);
		noOfForLoops(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(2);
			done();
		});
	});
});