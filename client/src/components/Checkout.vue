<template>
  <div class="checkout">
    <form>
      <fieldset>
        <!-- <div class="form-group">
          <label for="exampleInputEmail1">Email Address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div> -->
      </fieldset>
      <div class="alert alert-dismissible alert-success">
        <div v-for="(item, index) in cartshop" class="row">
            <div class="col-md-12" >
              <!-- <img class="gambar" :src="item.image" alt="" width="100" height="100"> -->
              <div class="col-md-6">
                <p>Name: {{item.nameItem}}</p>
              </div>
              <div class="col-md-6">
                <p>Price: Rp {{item.price }}.000,00 x {{item.quantity}}</p>
              </div>              
            </div>            
          </div>
                <h5><p>Total : Rp{{total}}.000,00</p></h5>
        <button type="button" @click="cartToCheckout(cartshop)" class="btn btn-success">Checkout</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
computed: {
  ...mapState([
    'cartshop',
    'checkout'
  ]),
  total (){
      return this.cartshop.reduce((prevValue, item)=>{
        return prevValue + (item.price * item.quantity)
      },0)
    }
},
methods: {
  ...mapActions([
    'cartToCheckout',
    'getCheckout'

  ])
}
}
</script>

<style>
.checkout{
  margin :10px
}
</style>
