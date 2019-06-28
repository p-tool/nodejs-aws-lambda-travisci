const childProcess = require('child_process');

const execCommand = (cmdString, options = {}) => new Promise((resolve, reject)=> {
  childProcess.exec(cmdString, options, (error, stdout, stderr) => {
    if (error) return reject(error)
    if (stderr) return resolve(stderr)

    return resolve(stdout)
  });
})

module.exports = {execCommand}