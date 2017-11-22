<template>
  <div>
    <div class="row" >
      <div class="card" v-for="item in items">
        <img  v-bind:src="item.image" class="card-img-top" alt="Card image cap">
        <div class="card-block">
          <div class="col-md-12">
            <h6 class="card-text">Name Item: {{item.nameItem}}</h6>
      
          </div>
          <div class="col-md-6">
            <p>Price: Rp{{item.price}}.000,00 </p>            
          </div>
          <div class="col-md-6">
            <p>Kode Item : {{item.code}}</p>
          </div>
          <br><button type="button" @click="addCart(item)" class="btn btn-success">Buy</button><br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: ['item'],
  computed: {
    ...mapState([
      'items'
    ])
  },
  methods: {
    ...mapActions([
      'dataItem',
      'addCart'
    ])
  },
  created (){
    this.dataItem()
  }
}
</script>

<style>
  .card {
    margin: 20px;
    width: 250px

  }
  .card-img-top{
    width: 250px;
    height: 250px
  }
</style>
