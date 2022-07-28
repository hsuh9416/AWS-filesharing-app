<script setup>
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
</script>
<template>
  <Authenticator>
    <template v-slot="{ user, signOut }">
      <div id="app">
        <MainHeader/>
        <MainBody :msg="user.username"/>
        <button @click="signOut">Sign Out</button>
        <MainFooter/>
      </div>
    </template>
  </Authenticator>
</template>

<script>

import MainHeader from "@/components/MainHeader.vue"
import MainBody from "@/components/MainBody.vue"
import MainFooter from "@/components/MainFooter.vue"

export default {
  name: 'App',
  components: {
    Authenticator,
    MainHeader,
    MainBody,
    MainFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
