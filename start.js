var { exec } = require('child_process');

exec('npm start', function (err,stdout,stderr) {
	if(err) {
		console.log('exec error:' + err);
	}
});

/*
* setInterval git pull
* @getTimer 时 * 分 * 秒 * 毫秒
*/

let git;
const gitTimer = 1 * 60 * 60 * 1000;
setInterval(() => {
    git = exec(
        'git reset --hard && git pull',
        (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
              }
              console.log('Standard Output:', stdout);
              console.log('Stderr Output:', stderr);
        }
    );
    
},gitTimer);