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
      onSubmit(){
        alert("Submitted:D")
      }
  }
}
</script>