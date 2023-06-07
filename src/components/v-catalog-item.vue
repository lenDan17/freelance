<template>
    <div class="v-catalog-item">
        <div class="v-catalog-item__image">
       <img :src="require('../assets/image/'+ product_data.image)" alt="img"></div>
        <p class="v-catalog-item__name">{{product_data.name}}</p>
        <p class="v-catalog-item__price">{{ product_data.price }}</p>
        <button class="v-catalog-item__btn" 
        @click="sendToParents">
        add to card
    </button>
    </div>
</template>
<script>

export default{
name:'v-catalog-item',
props:{
    product_data:{
type:Object,
default(){
    return{}
}
    }
},
methods:{
    sendToParents(){
        this.$emit('sendArticle',this.product_data.article)
    }
}


}
</script>


<style lang="scss">
.v-catalog-item{
    
    padding: 1rem;
    flex-basis: 25%;
    box-shadow: 0 0 8px rgba(128, 128, 128, 0.808);
margin-bottom: 1rem;
}
.v-catalog-item__image{
    position: relative;
    padding-bottom: 100%;
}
img{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

</style>