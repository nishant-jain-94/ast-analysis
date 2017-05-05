const acorn = require('acorn');
const should = require('should');
const noOfSort = require('./noOfSort');

describe('No Of Sort', function() {
	it('should have 1 sort', function(done) {
		const input = "var arr=[6,2,3,4,5,1];arr.sort();";
		const ast = acorn.parse(input);
		noOfSort(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(1);
			done();
		});
	});

	it('should have 2 sort', function(done) {
		const input = "var arr=[6,2,3,4,5,1];arr.sort();var numbers=[10,22,5,33,1,15];numbers.sort();";
		const ast = acorn.parse(input);
		noOfSort(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(2);
			done();
		});
	});
});