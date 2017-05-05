const glob = require('glob-array');
const path = require('path');
const async = require('async'); 
const processFile = require('../src/processFile');
const files = glob.sync(['express/**/*.js']);
const tasks = files.map((file) => {
	return processFile.bind(null, file);
});

async.parallel(tasks, (err, results) => {
	const res = Array.prototype.concat.apply([], results);
	console.log(res.length);
});
