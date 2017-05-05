const acorn = require('acorn');
const should = require('should');
const noOfForEach = require('./noOfForEach');

describe('No of For Each', function() {
	it('Should have exactly 1 for Each', function(done) {
		const input = "var arr = [1,2]; arr.forEach(function(item){console.log(item);})";
		const ast = acorn.parse(input);
		noOfForEach(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(1);
			done();
		});
	});

	it('should have exactly 2 forEach when one forEach is nested within the other', function(done) {
		const input = "var arr=[[1],[2],[3]];arr.forEach(function(a){a.forEach(function(a){console.log(a)})});"
		const ast = acorn.parse(input);
		noOfForEach(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(2);
			done();
		});
	});	
});