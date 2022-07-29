<template>
  <div class="row g-5 body-container">
    <div class="col-md body-content border justify-content-center">
      <form>
        <div>  
          <div id="fileGroup">
            <span class="form-label">
              File to Share
            </span>
            <span class="form-alert" v-show="!validations.file">
              Please CHOOSE the FILE to share!
            </span>
            <input 
              class="form-control" 
              type="file" id="formFile"
              @change="handleFileChange($event)"
              required
            />

          </div>
        </div>

        <div>  
          <div id="emailGroup">
            <span class="form-label">Send Address</span>
            <span class="form-alert" v-show="!validations.notEmpty">
                  Please ENTER at least ONE EMAIL address!
            </span>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id= "email1" ref="email1" v-model="email1" @blur="validateEmail($event)">
                <label>Email address</label>
                <span class="form-alert" v-show="!validations.email1">
                  Please ENTER the CORRECT form of EMAIL address!
                </span>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id= "email2" ref="email2" v-model="email2" @blur="validateEmail($event)">
                <label>Email address</label>
                <span class="form-alert" v-show="!validations.email2">
                  Please ENTER the CORRECT form of EMAIL address!
                </span>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id= "email3" ref="email3" v-model="email3" @blur="validateEmail($event)">
                <label>Email address</label>
                <span class="form-alert" v-show="!validations.email3">
                  Please ENTER the CORRECT form of EMAIL address!
                </span>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id= "email4" ref="email4" v-model="email4" @blur="validateEmail($event)">
                <label>Email address</label>
                <span class="form-alert" v-show="!validations.email4">
                  Please ENTER the CORRECT form of EMAIL address!
                </span>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id= "email5" ref="email5" v-model="email5" @blur="validateEmail($event)">
                <label>Email address</label>
                <span class="form-alert" v-show="!validations.email5">
                  Please ENTER the CORRECT form of EMAIL address!
                </span>
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
/* eslint-disable */
export default {
  name: "MainBody",
  data(){
        return {
            file: null,
            regExp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            email1: '',
            email2: '',
            email3: '',
            email4: '',
            email5: '',
            emailList: [],
            validations: {
              file: true,
              email1: true,
              email2: true,
              email3: true,
              email4: true,
              email5: true,
              notEmpty: true
            }
        }

  },
  methods: {

      validateEmail(event){
        let value = event.target.value.trim();
        let id = event.target.id;
        this.validations[id] = true;
        if(value !== '' && !this.regExp.test(value)){
            this.validations[id] = false;
            this[id] = '';
            this.$refs[id].focus();
        }
      },
      checkInput(){
        this.validations['file'] = true;
        this.validations['notEmpty'] = true;
        let count = 0
        if(this.file === null){
            this.validations['file'] = false;
            count++;
        }
        for (let i = 1; i <= 5; i++){
          var id = 'email'+ i;
          var email = this[id];
          if(email !== ''){
            this.emailList.push(email);
          }
        }
        if(this.emailList.length == 0){
            this.validations['notEmpty'] = false;
            count++;
        }  
        return count;
      },
    onSubmit(){
      let errors = this.checkInput();
      if(errors > 0){
        alert('Please CHECK the FORM!');
      }
      else {
        const { file, emailList } = this
        this.$emit('submit', { file, emailList });
        this.file = null;
        this.emailList = [];
      }
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

.form-alert {
  color: red;
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
