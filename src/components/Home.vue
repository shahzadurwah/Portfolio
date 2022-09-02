<template>
 
  <div class="container-fluid">
  
  
    <Main></Main>

  <About></About>
  <Project></Project>
  <Speaking></Speaking>

  </div>


  
</template>

<script>

import Main from './Main.vue'
import About from './About.vue'
import Project from './Project.vue'
import Speaking from './Speaking.vue'


export default {
    name:'Home',
  components:{

    Main,
    About,
    Project,
    Speaking,
  
  }
}
</script>

<style>

</style>