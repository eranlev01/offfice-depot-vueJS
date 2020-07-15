<template>
  <div class="main-component">
    <h1>המוצרים שלנו</h1>
    <div class="search-div">
      <input
        type="text"
        placeholder="איזה מוצר תרצה למצוא?"
        v-model="searchVal"
        @input="checkIfEmpty"
      />
      <b-button variant="danger" @click="search">חפש</b-button>
    </div>
    <div class="card-div">
      <Card
        class="card"
        :key="index"
        v-for="(products, index) in products"
        v-bind:product="products"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "Main",
  components: {
    Card
  },
  props: {},
  data() {
    return {
      products: [],
      searchVal: ""
    };
  },
  methods: {
    async getProducts() {
      fetch(
        `https://api.konimbo.co.il/v1/items?token=9c1a92bf8cefc59e4ec9fa7c53bba0f90dd8b15850bef1062dbf32c5e8fd3a08`
      )
        .then(data => data.json())
        .then(res => (this.products = res));
    },
    //if input is empty get all products back for new searching
    checkIfEmpty() {
      if (!this.searchVal.length) {
        this.getProducts();
      }
    },
    search() {
      if (this.searchVal) {
        this.searchVal.toLowerCase();
        this.products = this.products.filter(
          p => p.title.indexOf(this.searchVal) > -1
        );
      } else {
        this.getProducts();
      }
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style scoped>
.main-component {
  padding: 2rem;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  z-index: 0;
}

.main-component .card-div {
  width: 80%;
  margin: 30px auto 30px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-size: 20px;
  animation: cardsShow 700ms ease-in-out;
  animation-delay: 0.7s;
  animation-fill-mode: forwards;
}

h1 {
  margin-bottom: 25px;
}

.search-div button,
input {
  height: 100%;
  margin: 0;
  vertical-align: 0;
}

.search-div input {
  width: 200px;
}
</style>
