const acorn = require('acorn');
const should = require('should');
const noOfFilters = require('./noOfFilters');

describe('No Of Filters', function() {
	it('should have 1 filter', function(done) {
		const input = "var arr=[1,2,3,4,5,6];arr.filter(function(a){return a>3});";
		const ast = acorn.parse(input);
		noOfFilters(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(1);
			done();
		});
	});

	it('should have exactly 2 filters', function(done) {
		const input = "var arr=[1,2,3,4,5,6];arr.filter(function(a){return a>3});var numbers=[10,11,12,13,14,15,16];numbers.filter(function(a){return a>12});";
		const ast = acorn.parse(input);
		noOfFilters(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(2);
			done();
		});
	});
});