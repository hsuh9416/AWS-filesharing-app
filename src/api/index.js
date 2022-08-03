import AWS from 'aws-sdk';

const ACCESS_KEY = "AKIA6IC4FYYRIV5Z5YDW";
const SECRET_ACCESS_KEY = "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";
const BucketName = "fileuploadcs633";
const Region = "us-east-2";
const IdentityPoolId = "us-east-2:c7a23de6-8f5a-44c6-b837-c9c7e8e563b8";
const DynamoDBTable = "cs633Table";
const SNSArn = "arn:aws:sns:us-east-2:979445859874:cs633sns"
const LambdaCheckFunction = "checkSubscription"
const LambdaSendFunction = "sendmail"

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