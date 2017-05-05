const fs = require('fs');
const acorn = require('acorn');
const glob = require('glob-array');
const path = require('path');
const processors = require('../processors');
const async = require('async');

module.exports = function(fileName, done) {
	fs.readFile(fileName, 'utf8', function(err, data) {
		if(err) { console.log(err); return; }
		let ast = acorn.parse(data);
		const tasks = processors.map((processor) => {
			return process.bind(null, processor, ast);
		});
		async.parallel(tasks, done);
	});
};

function process({processor, name}, ast, cb) {
	processor(ast, function(err, result) {	
		cb(err, { name, result });
	});
};