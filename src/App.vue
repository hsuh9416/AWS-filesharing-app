<script setup>
import { Authenticator } from '@aws-amplify/ui-vue';

</script>
<template>
  <div id="app" class="container">
    <MainHeader/>
    <Authenticator>
      <template v-slot="{ user, signOut }">
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

import MainHeader from "@/components/MainHeader.vue"
import MenuBar from "@/components/MenuBar.vue"
import MainBody from "@/components/MainBody.vue"
import MainFooter from "@/components/MainFooter.vue"
import awsConfig from '@/api/awsConfig.js'
import AWS from 'aws-sdk';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export default {
  name: 'App',
  components: {
    Authenticator,
    MainHeader,
    MenuBar,
    MainBody,
    MainFooter
  },
  data(){
    return {
        ddbClient: null   
    }
  },
  created(){
    this.ddbClient = new DynamoDBClient({region: awsConfig.Region});
  },
  methods: {
    onSubmit(payload){
        let { file, emailList } = payload
        let fileName = file.name
        console.log(fileName);
        console.log(emailList);

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
            console.log(data)
            alert("Successfully uploaded file.");
          },
          function(err) {
            console.log(err)
            return alert("There was an error uploading your file: ", err.message);
          }
        );
    }
  }
}
</script>