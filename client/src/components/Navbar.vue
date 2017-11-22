<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">MamahCake</a>
        <button type="button" class="btn btn-danger" v-on:click.prevent="logout()" >Logout</button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">New Arrival</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            
          </ul>
        </div>
      <Cart></Cart>
    </nav>
  </div>
</template>

<script>
import Cart from '@/components/Cart'
export default {
  components:{
    Cart
  },
  methods: {
    logout (){
      localStorage.removeItem('token')
      // console.log('ini token',token);
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
