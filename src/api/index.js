import AWS from 'aws-sdk';

/*
 Below properties are removed for the security
*/
const ACCESS_KEY = ""; 
const SECRET_ACCESS_KEY = "";
const BucketName = "fileuploadcs633";
const Region = "us-east-2";
const IdentityPoolId = "";
const DynamoDBTable = "cs633Table";
const SNSArn = "arn:aws:sns:us-east-2:979445859874:cs633sns"
const LambdaCheckFunction = "checkSubscription"
const LambdaSendFunction = "sendEmail"

AWS.config.update({
    region: Region,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
});

const Lambda = new AWS.Lambda({
    region: Region,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
});

const awsConfig = {
    BucketName,
    Region,
    IdentityPoolId,
    DynamoDBTable,
    SNSArn,
    Lambda,
    LambdaCheckFunction,
    LambdaSendFunction
}
export default awsConfig;
