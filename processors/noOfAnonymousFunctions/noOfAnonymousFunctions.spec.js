const acorn = require('acorn');
const should = require('should');
const noOfAnonymousFunctions = require('./noOfAnonymousFunctions');

describe('No Of Anonymous Functions', function() {
	it('should have exactly 1 Anonymous function', function(done) {
		const input = "var arr = [1,2]; arr.forEach(function(item){console.log(item);})";
		const ast = acorn.parse(input);
		noOfAnonymousFunctions(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(1);
			done();	
		});
	});

	it('should have exactly 0 named function', function(done) {
		const input = "function displayHello() { console.log('Hello World'); }";
		const ast = acorn.parse(input);
		noOfAnonymousFunctions(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(0);
			done();	
		});
	});
});