const acorn = require('acorn');
const should = require('should');
const noOfMaps = require('./noOfMaps');

describe('No of Map Statements', function() {
	it('should have 1 map statements', function(done) {
		const input = "var arr=[1,2,3,4,5];arr.map(function(a){return a*a});";
		const ast = acorn.parse(input);
		noOfMaps(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(1);
			done();
		});
	});
});