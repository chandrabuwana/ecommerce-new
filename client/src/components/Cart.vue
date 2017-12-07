<template>
  <div>
<div class="container">
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal"><i class="fa fa-shopping-cart" style="font-size:48px;color:red"></i></button>

  <div  class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

      <div class="modal-content">
        <div  class="modal-header">
          <h4 class="modal-title">Checkout</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div  class="modal-body">
          <div class="row">
            <div v-for="(item, index) in cartshop" :key="index" class="col-md-4" >
              <img class="gambar" :src="item.image" alt="" width="100" height="100">
              <p>Name: {{item.nameItem}}</p>
              <p>Price: Rp {{item.price }}.000,00 x {{item.quantity}}</p>
              
            </div>
          </div>
          <h5><p>Total : Rp{{total}}.000,00</p></h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-dismiss="modal">Checkout</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>  
</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  computed:{
    ...mapState([
      'cartshop'
    ]),
    total (){
      return this.cartshop.reduce((prevValue, item)=>{
        return prevValue + (item.price * item.quantity)
      },0)
    }
  }
}
</script>

<style scoped>
h4{
  color: black
}
  p {
  color: black;
}
.gambar{
 width: 100%
}
</style>