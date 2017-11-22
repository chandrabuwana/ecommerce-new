<template>
  <div>
    <div class="row">
      <div class="col-md-12">
      <Navbar></Navbar>
      </div>
      <div class="col-md-4">
        <Sidebar></Sidebar>
        <h1>Form Checkout</h1>
        <Checkout></Checkout>
      </div>
      <div class="col-md-8">
        <ListItem></ListItem>
      </div>

    </div>
    <h2>CopyRight Chandrabuwana</h2>
    <h2>Vue Ecosystem</h2>
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import ListItem from '@/components/ListItem'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
export default {
  components:{
    Navbar,
    Sidebar,
    ListItem,
    Cart,
    Checkout
  },
  methods: {
    decode(){
      r
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
