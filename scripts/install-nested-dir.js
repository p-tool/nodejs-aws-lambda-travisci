(async () => {
  const fs = require('fs')
  const {execCommand} = require('./utils/cmd')
  const os = require('os')
  
  // get library path
  const rootPath = `${__dirname}/../lambda`
  const dirList = fs.readdirSync(rootPath)
  
  for(const dir of dirList) {
    const dirPath = `${rootPath}/${dir}`
    // ensure path has package.json
    if (!fs.existsSync(`${dirPath}/package.json`)) return
    console.log(`[INFO] package.json exists in ${rootPath}`)
  
    // npm binary based on OS
    const npmCmd = os.platform().startsWith('win') ? 'yarn.cmd' : 'yarn'
  
    // install folder
    // cp.spawn(npmCmd, { env: process.env, cwd: modPath, stdio: 'inherit' })
    const options = { env: process.env, cwd: dirPath, stdio: 'inherit' }
    await execCommand(npmCmd, options)
    console.log(`[INFO] ${npmCmd}, installed successed`)
  }
})()