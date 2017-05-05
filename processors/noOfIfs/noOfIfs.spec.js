const acorn = require('acorn');
const noOfIfs = require('./noOfIfs.js');
const should = require('should');

describe('No of If', function() {
	it('should have 1 if', function(done) {
		const input = "if(True) console.log()"
		const ast = acorn.parse(input);
		noOfIfs(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(1);
		});
		done();
	});

	it('should have 2 ifs', function(done) {
		const input = "var x=1; if(x>1) {if(x<10) { console.log('Number is between greater than 1 and lesser than 10') } }";
		const ast = acorn.parse(input);
		noOfIfs(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(2);
			done();
		});
	});
});