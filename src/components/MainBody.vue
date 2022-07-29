<template>
  <div class="row g-5 body-container">
    <div class="col-md body-content border justify-content-center">
      <form>
        <div>  
          <div id="fileGroup">
            <span class="form-label">
              File to Share
            </span>
            <input 
              class="form-control" 
              type="file" id="formFile"
              @change="handleFileChange($event)"
            />
          </div>
        </div>

        <div>  
          <div id="emailGroup">
            <span class="form-label">Send Address</span>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
          </div>
        </div>

        <div>
          <div class="d-grid gap-2 mt-3 mb-3">
            <button 
              type="button" 
              class="btn btn-outline-primary btn-lg" 
              @click="onSubmit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "MainBody",
  data(){
        return {
            file: '',
            emailList: []
        }
  },
  methods: {
    onSubmit(){
      const { file, emailList } = this
      this.$emit('submit', { file, emailList })
    },
    handleFileChange(evt){
      this.file = evt.target.files[0]
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

.body-container {
      padding: 30px 200px; 
}

.body-content {
  margin: 20px;
}

#fileGroup {
    padding: 10px 150px 20px 10px; 
}

#emailGroup {
    padding: 0px 10px 5px 150px; 
}

#SharedGroup {
     padding: 10px;  
}

</style>
