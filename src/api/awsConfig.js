import AWS from 'aws-sdk';

const BucketName = "fileuploadcs633";
const Region = "us-east-2";
const IdentityPoolId = "us-east-2:c7a23de6-8f5a-44c6-b837-c9c7e8e563b8";


AWS.config.update({
    region: Region,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
});

// const s3 = new AWS.S3({
//     apiVersion: "2006-03-01",
//     params: { Bucket: BucketName }
// });

const awsConfig = {
    BucketName: BucketName,
    Region: Region,
    IdentityPoolId: IdentityPoolId
}
export default awsConfig;