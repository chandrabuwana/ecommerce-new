<template>
<div>    
  <div class="container-fluid">
    <div class="row">
      <div id="ms-form">
        <div class="ms-content">
          <div class="col-xs-12">
            <h2><i class="fa fa-pencil"></i> SIGN IN</h2>
            <div class="ms-field">
              <label>Username</label>
              <input v-model="login.username" type="text" class="field" />
              <!-- <label class="placeholder">Username</label> -->
              <div class="ms-line"><i class="fa fa-check"></i></div>
            </div>
            <div class="ms-field">
              <label>Password</label>
              <input v-model="login.password" type="password" class="field" />
              <!-- <label class="placeholder">Password</label> -->
              <div class="ms-line"><i class="fa fa-check"></i></div>
            </div>
            <button type="button" class="ms-form-btn" v-on:click.prevent="getLogin()">SIGN IN</button>
            <div class="g-signin2" data-onsuccess="onSignIn"></div> 
            <p>Don't have an account? <router-link v-bind:to="'register'"><a>Register Here</a></router-link></p> 
          </div>
        </div>    
      </div>
    </div>
</div>
</div>
  
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    getLogin(){
      var self= this
      axios.post('http://localhost:3000/login',{
        username: self.login.username,
        password: self.login.password
      })
      .then(response=>{
        localStorage.setItem('token',response.data.token)
        console.log('token',response.data.token);
        this.$router.push('/home')
      })
      .catch (err=>{
        console.log(err);
      })
    },
    decode (){
      localStorage.getItem('token')
     console.log('ini toiken',token);
    }
  }
}
</script>

<style>
#ms-form {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0067FF;
  font-family: 'Lato', sans-serif;
}
#ms-form > .ms-content {
  transition: max-width .5s ease 1.25s, height .5s ease 1.75s, z-index 0s ease 1.75s;
  z-index: 2;
}
#ms-form > .ms-content,
#ms-form > .ms-register {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 300px;
  height: 500px;
  margin: auto;
  background: #EBEBEB;
  box-shadow: 5px 5px 0px #333333;
  overflow: hidden;
}
  #ms-form > .ms-content.turn-register {
      max-width: 5px;
      height: 5px;
      overflow: hidden;
      transition: max-width .5s ease, height .5s ease .65s, z-index 0s ease .65s;
      z-index: 1;
  }
#ms-form > .ms-content.turn-register ~ .ms-register.reg {
  max-width: 300px;
  height: 500px;
  transition: max-width .5s ease 1.25s, height .5s ease 1.75s, z-index 0s ease 1.75s;
  z-index: 2;
}
#ms-form > .ms-register.reg {
  max-width: 5px;
  height: 5px;
  overflow: hidden;
  transition: max-width .5s ease, height .5s ease .65s, z-index 0s ease .65s;
  z-index: 1;
}

.ms-content h2,
.ms-register h2 {
  border-bottom: 2px solid #333333;
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.ms-field {
  position: relative;
  padding: 5px 0;
}
  .ms-field:before {
      content: 'required';
      position: absolute;
      right: 7px;
      top: 0;
      color: #FF0000;
      opacity: 0;
      transition: opacity .5s ease;
  }
  .ms-field.required:before {
      content: 'required';
      opacity: 1;
  }
  .ms-field:after,
  .ms-field.required:after {
      content: '';
      border-color: #FF0000 !important;
  }
.field {
  width: 100%;
  padding: 15px 15px;
  font-size: 14px;
  border: 1px solid #FFFFFF;
  margin: 15px 0px;
  outline: none !important;
}
.placeholder {
  position: absolute;
  top: 36px;
  left: 16px;
  transition: all .5s ease;
}
.field:focus ~ .placeholder,
.placeholder.filled {
  top: 0;
  left: 0;
}
.ms-line,
.ms-line.filled {
  border-color: #0067FF !important;
}
.ms-line,
.ms-field:after {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  border-bottom: 2px solid;
  border-right: 0px solid transparent;
  border-top: 0px solid transparent;
  border-left: 0px solid transparent;
  border-radius: 0%;
  width: 0;
  transition: border-color .15s ease .4s, width .15s ease, border-right .15s ease .2s, border-bottom-right-radius .15s ease .27s, border-top .15s ease .15s, border-left .15s ease, border-bottom-left-radius .15s ease, right .15s ease, bottom .15s ease;
}
.field:focus ~ .ms-line {
  width: 100%;
  transition: width .5s ease;
  border-radius: 0;
}
.field:focus ~ .ms-line.filled {
  width: 35px;
  transition: width .5s ease;
  border-radius: 100%;
}
.ms-line.filled,
.ms-field.required:after {
  left: inherit;
  bottom: 28px;
  right: 15px;
  width: 35px;
  height: 35px;
  border-right: 2px solid;
  border-top: 2px solid;
  border-left: 2px solid;
  border-bottom-right-radius: 100%;
  border-top-right-radius: 100%;
  border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
  transition: transform .15s ease, width .15s ease .15s, border-right .15s ease .2s, border-bottom-right-radius .15s ease .1s, border-top .15s ease .25s, border-left .15s ease .3s, border-bottom-left-radius .15s ease .3s, right .15s ease .2s, bottom .15s ease .2s;
}
.ms-line i {
  opacity: 0;
  transition: all 0s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  height: 22px;
  font-size: 24px;
  color: #333;
}
.ms-line.filled i {
  opacity: 1;
  transition: all .15s ease .5s;
}

.ms-form-btn {
  width: 100%;
  background: none;
  border: 2px solid #0067FF;
  color: #0067FF;
  font-size: 16px;
  padding: 15px 0px;
  margin: 15px 0;
  border-radius: 50px;
  transition: all .5s ease;
  outline: none !important;
}
  .ms-form-btn:hover,
  .ms-form-btn:focus {
      background: #0067FF;
      border: 2px solid #0067FF;
      color: #FFFFFF;
  }

.ms-content p,
.ms-register p {
  padding: 15px 0px;
  text-align: center;
}
  .ms-content p a,
  .ms-register p a {
      color: #0067FF;
      text-decoration: none;
  }
  .ms-content p a:hover,
  .ms-register p a:hover {
      cursor: pointer;
  }
</style>
