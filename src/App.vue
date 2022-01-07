<template>
  <div id="app">
    <div id="nav">
      
      <navbar/>
      <ToTop/>
      <Footer/>
      
    </div>
    
  </div>
</template>

<style>

</style>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ToTop from './components/ToTop.vue'
export default {
  components:{
    Navbar,Footer,ToTop
  }
};


// please print all the values for objectID, value in preferences array
</script>
