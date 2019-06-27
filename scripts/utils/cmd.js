const childProcess = require('child_process');

const execCommand = (cmdString) => new Promise((resolve, reject)=> {
  childProcess.exec(cmdString, (error, stdout, stderr) => {
    if (error) return reject(error)
    if (stderr) return resolve(stderr)

    return resolve(stdout)
  });
})

module.exports = {execCommand}