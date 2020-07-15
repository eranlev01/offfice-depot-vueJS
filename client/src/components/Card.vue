<template>
  <div class="card">
    <div class="img-div">
      <img width="100%" height="100%" v-if="product.images[0]" v-bind:src="product.images[0].url" :alt="product.title" @click="$router.push(`/product/${product.title}`)"/>
    </div>
    <span class="product-title">{{product.title}}</span>
    <span class="product-price"><b>₪ {{product.price}}</b></span>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["product"]
};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: black;
  height: 300px;
  width: 300px;
  position: relative;
  overflow: hidden;
  border: 0;
  margin: 1.5rem;
}

.card:hover {
  cursor: pointer;
  border-bottom: 1px solid rgb(219, 218, 218);
}

.img-div {
  height: 200px;
}

.product-title{
  height: 70px;
}

.product-price {
  color: red;
  height: 70px;
}
</style>