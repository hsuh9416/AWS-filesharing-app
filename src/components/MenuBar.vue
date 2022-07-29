<template>
    <div class="row g-5 menubar">
        <div class="col">
            <div clss="d-flex">
                <div class="p-2 text-end">
                <span>Log In as UserID: <strong>{{ msg }}</strong></span>
                <button type="button" class="btn btn-outline-dark" @click="onSignout">Sign Out</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "MenuBar",
  props: {
    msg: String
  },
  methods: {
    onSignout(){
      this.$emit('signout')  
    }
  }
}
</script>

<style scoped>
span {
    font-size:20px; 
    margin-top:10px; 
    padding-right:15px; 
    display:inline-block;
}

.menubar {
      padding: 10px; 
}

</style>
