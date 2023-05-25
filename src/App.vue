<template>
      <Navbar></Navbar>
    
  <div>
    <router-view></router-view>
  </div>

    <FooterBanner></FooterBanner>

   
</template>

<script>
import Navbar from './components/navBar.vue'
import FooterBanner from './components/footer.vue'

//import axios from 'axios'

export default {
  name: 'App',
  components: {
    Navbar,
    FooterBanner
  },
}
</script>

<style>



html{
  background-image: linear-gradient(to bottom, #e2eafcff, #F6D7F6ff);
}

#app {
  font-family: 'Jost', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body{
  margin: 0;
  padding: 0;
}

.lofi{
  margin-top: 5em;
  background-image: url("assets/lofi_background.jpg") ;
  background-size: cover;
  background-position: center;
  height: 40em;
}


</style>
