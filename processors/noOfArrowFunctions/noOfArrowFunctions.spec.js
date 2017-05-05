const acorn = require('acorn');
const should = require('should');
const noOfArrowFunctions = require('./noOfArrowFunctions.js');

describe('No of Arrow Functions', function() {
	it('should have 1 arrow function', function(done) {
		const input = "var displayHelloWorld = () => { console.log('Hello World'); }";
		const ast = acorn.parse(input);
		noOfArrowFunctions(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(1);
			done();
		});
	});
});