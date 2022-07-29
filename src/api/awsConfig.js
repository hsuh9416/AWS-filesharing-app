import AWS from 'aws-sdk';

const BucketName = "fileuploadcs633";
const Region = "us-east-2";
const IdentityPoolId = "us-east-2:c7a23de6-8f5a-44c6-b837-c9c7e8e563b8";
const DynamoDBTable = "cs633Table";

AWS.config.update({
    region: Region,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
});

const awsConfig = {
    BucketName,
    Region,
    IdentityPoolId,
    DynamoDBTable
}
export default awsConfig;