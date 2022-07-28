<template>
  <div class="row g-5 body-container">
    <div class="col body-content border">

      <div clss="d-flex justify-content-start">  
        <div id="fileGroup">
          <span class="form-label">File to Share</span>
          <input class="form-control" type="file" id="formFile">
        </div>
      </div>

      <div clss="d-flex justify-content-start">  
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

      <div clss="d-flex flex-row">
        <div class="d-grid gap-2 mt-3 mb-3">
          <button type="button" class="btn btn-primary btn-lg" @click="onSubmit">Submit</button>
        </div>
      </div>

    </div>
    
    <div class="col body-content border ">
      <div clss="d-flex justify-content-start">
        <div id="SharedGroup">
          <span class="form-label">Shared List</span>
          <table class="table text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "MainBody",
  methods: {
    onSubmit(){
      this.$emit('submit')
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
      padding: 20px; 
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
