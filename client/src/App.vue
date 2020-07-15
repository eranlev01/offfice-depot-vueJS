<template>
  <div id="app">
    <div class="header">
      <Navbar />
    </div>
    <div class="main">
      <router-view /> 
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300&display=swap');
* {
  font-family: 'Assistant', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
}

body {
  height: 100vh;
  transition: 600ms;
  overflow: none;
}

.header {
  background-color: rgb(237, 26, 59);
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 80px;
}

.main {
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 80px;
}
</style>
