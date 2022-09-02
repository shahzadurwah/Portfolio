<template>
<div id="div-id"></div>
   <Navbar></Navbar>
   
  <div class="container-fluid">
  <router-view></router-view>
 
  <Footers></Footers>    
  </div>


  
</template>

<script>
import Navbar from './components/Navbar.vue'

import Footers from './components/Footers.vue'

export default {
  components:{
    Navbar,
    Footers
  }
}
</script>

<style>
/* *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
} */
body{
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  /* background-color: #7e7575; */
  background: #adb1abc9;
 
}
a{
  color: #fff;
  text-decoration: none;
  border: none;
}


</style>