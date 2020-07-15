<template>
  <div class="nav-component">
    <img width="200px" height="50px" src="https://d3m9l0v76dty0.cloudfront.net/system/photos/255142/original/85f6b2fc7a1b717c6055f38dd1e8655f.png?1527602063" alt="logo" @click="$router.push('/')">
  <ul class="list">
    <li class="links" @click="$router.push('/')">ראשי</li>
    <li class="links" @click="$router.push('/contact')">צור קשר</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav-component{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.list {
  list-style: none;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin: 0;
}

.links:hover, img:hover {
  opacity: 0.85;
  cursor: pointer;
}
</style>
