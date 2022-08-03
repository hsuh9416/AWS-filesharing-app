import AWS from 'aws-sdk';
import axios from 'axios';

const BucketName = "fileuploadcs633";
const Region = "us-east-2";
const IdentityPoolId = "us-east-2:c7a23de6-8f5a-44c6-b837-c9c7e8e563b8";
const DynamoDBTable = "cs633Table";
const SNSArn = "arn:aws:sns:us-east-2:979445859874:cs633sns"
const LambdaURL = "https://zjuoh7m5hwk5frnvs7golq3d3e0roxql.lambda-url.us-east-2.on.aws/"

const lambdaApi = axios.create({
    baseURL: LambdaURL
});

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
    DynamoDBTable,
    SNSArn,
    lambdaApi
}
export default awsConfig;