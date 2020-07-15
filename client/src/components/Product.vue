<template>
  <div class="main-component">
    <div class="card">
      <img width="80%" height="80%" :src="product.images[0].url" :alt="product.title" />
    </div>
    <div class="description">
      <h5>{{product.title}}</h5>
      <h3 class="price">₪{{product.price}}</h3>
      <div class="details">
        <span>משלוח חינם עד בית לקוח: 0 ₪</span>
        <br />
        <span>אחריות: שנה אחריות ע"י היבואן הרשמי- אופיס דיפו</span>
        <br />
        <span>זמן אספקה: 7 ימי עסקים , קיימת אפשרות לאיסוף עצמי</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  components: {},
  props: {},
  data() {
    return {
      products: [],
      product: []
    };
  },
  methods: {
    getProducts() {
      fetch(`https://api.konimbo.co.il/v1/items?token=9c1a92bf8cefc59e4ec9fa7c53bba0f90dd8b15850bef1062dbf32c5e8fd3a08`)
        .then(data => data.json())
        .then(res => {
          this.products = res;
          this.search();
        });
    },
    search() {
      this.product = this.products.filter(
        p => p.title.indexOf(this.$route.params.pathMatch) > -1
      )[0];
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-component {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto ;
  padding-top: 5rem;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 450px;
  border: 0;
}

.description {
  text-align: right;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 2rem;
  width: 60%;
  height: 450px;
}

.description > * {
  margin: 20px;
}

.description span {
  font-size: 14px;
  color: black;
}

.price {
  color: red;
}

.details {
  text-align: end;
}

@media screen and (max-width: 1000px) {
  .description {
    align-items: center;
  }
}
</style>
