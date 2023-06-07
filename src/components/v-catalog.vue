<template>
    <div class="v-catalog">
       
       
        <v-catalog-item
        v-for="product in this.$store.state.products"
        :key="product.article"
        v-bind:product_data="product"
        @sendArticle="showChildArticle($event)"
        />
    </div>
</template>
<script>
import vCatalogItem from './v-catalog-item';
import { mapActions } from 'vuex';
export default{
name:'v-catalog',
components:{
    vCatalogItem
},
props:{},
data(){
    return{
 
    }
},
methods:{
  ...mapActions([
  'GET_PRODUCTS_FROM_API'

  ]),
    showChildArticle(data){
console.log(data);
    }
},
mounted(){
  
  this.GET_PRODUCTS_FROM_API()
}

}
</script>


<style>
.v-catalog{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

</style>