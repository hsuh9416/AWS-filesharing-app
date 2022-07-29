<script setup>
import { Authenticator } from '@aws-amplify/ui-vue';

</script>
<template>
  <div id="app" class="container">
    <MainHeader/>
    <Authenticator>
      <template v-slot="{ user, signOut }">
          <input type="hidden" id="userName" :value="user.username"/>
          <MenuBar
            :msg="user.username" 
            @signout="signOut"
          />
          <MainBody 
            @submit="onSubmit"
          />
      </template>
    </Authenticator>
    <MainFooter/>
  </div>
</template>

<script>

import MainHeader from "@/components/MainHeader.vue";
import MenuBar from "@/components/MenuBar.vue";
import MainBody from "@/components/MainBody.vue";
import MainFooter from "@/components/MainFooter.vue";
import AWS from 'aws-sdk';
import awsConfig from "@/api/awsConfig.js";



export default {
  name: 'App',
  components: {
    Authenticator,
    MainHeader,
    MenuBar,
    MainBody,
    MainFooter
  },
  methods: {
    onSubmit(payload){
        let { file, emailList } = payload
        let fileName = file.name
  
        let upload = new AWS.S3.ManagedUpload({ // upload file first
          params: {
            Bucket: awsConfig.BucketName,
            Key: fileName,
            Body: file
          }
        });

        let promise = upload.promise();
        promise.then(
          function(data) {
            let fileInfo = {
                ETag: { S: data.ETag },
                uploader: { S: document.querySelector("#userName").value },
                uploadBucket: {S: data.Bucket},
                uploadLocation: {S: data.Location},
                uploadKey: {S: data.key},
                uploadedDate: { S: JSON.stringify(new Date()) },
                fileName: { S: fileName },
                size: { S: file.size +" KB"},
                sharedMailAddresses: { S: emailList.join(', ') },
                modifiedDate: { S: JSON.stringify(file.lastModifiedDate) }
            }  
            console.log(fileInfo);
            // Create the DynamoDB service object

            var params = {
              TableName: awsConfig.DynamoDBTable,
              Item: fileInfo
            };
            
            // Call DynamoDB to add the item to the table
            new AWS.DynamoDB({apiVersion: '2012-08-10'}).putItem(params, function(err, data) {
              if (err) {
                console.log("Error", err);
              } else {
                console.log("Success", data);
                alert("Successfully uploaded file.");
              }
            });
          },
          function(err) {
            console.log(err)
            alert("There was an error uploading your file: ", err.message);
          }
        );


    }
  }
}
</script>