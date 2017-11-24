var process = require('child_process');

process.exec('npm start', function (err,stdout,stderr) {
	if(err) {
		console.log('exec error:' + err);
	}
})