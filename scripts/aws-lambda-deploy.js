(async () => {
  const fs = require('fs');
  const AWS = require('aws-sdk');
  const pkg = require('../package.json')
  const {execCommand} = require('./utils/cmd')

  const dirInLambda = fs.readdirSync(`${__dirname}/../lambda`)

  if(!dirInLambda || dirInLambda.length <=0) {
    console.error('[Error]: there is no dir in ./lambda/');
    process.exit(1);
  }

  try {
    for(const lambdaName of dirInLambda){
      // -=-=-= step 1 : zip all file
      const cwd = process.cwd();
      const zipLambdaCommand = `
        cd ${cwd}/lambda/${lambdaName}/ &&
        yarn --production &&
        zip -r ${lambdaName}.zip * --quiet`;
      await execCommand(zipLambdaCommand)

      // -=-=-= step 2 : deploy zip file
      const lambda = new AWS.Lambda({
        region: pkg.aws.region || "ap-northeast-1"
      });
      const lambdaUpdateFunctionCodeParams = {
        FunctionName: `${lambdaName}`,
        Publish: true,
        ZipFile: fs.readFileSync(`${cwd}/lambda/${lambdaName}/${lambdaName}.zip`)
      };
      console.log('[INFO] Uploading code to lambda with params:', lambdaUpdateFunctionCodeParams);
      const lambdaData = await lambda.updateFunctionCode(lambdaUpdateFunctionCodeParams).promise()
      const lambdaVersion = lambdaData.Version;
      console.log('[INFO] Lambda code uploaded with version', lambdaVersion);
      console.log('[INFO] Deployment done');
    }
  }
  catch(error) {
    throw new Error(`Error while executing deployment script: ${error}`);
  }
})()

