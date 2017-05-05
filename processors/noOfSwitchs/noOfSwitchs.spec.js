const acorn = require('acorn');
const should = require('should');
const noOfSwitchs = require('./noOfSwitchs');

describe('No Of Switchs', function() {
	it('should have exactly 1 switch', function(done) {
		const input = 'var x=2;switch(x){case 1:console.log("Option 1");break;case 2:console.log("Option 2");break;default:console.log("Default Option Chosen")}';
		const ast = acorn.parse(input);
		noOfSwitchs(ast, function(err, reply) {
			if(err) return done(err);
			reply.should.be.exactly(1);
			done();
		});
	});
});