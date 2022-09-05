<template>
  <nav class="navbar" >
    <div class="container-fluid">
      <div class="log">
        <router-link to="/" class="anc ancs shhide1"
          ><h3>Shahzad/Portfolio</h3></router-link>
        <router-link to="/" class="anc ancs shhide"
          ><h3>Shahzad</h3></router-link>
      </div>
      <div class="items" :class="{'trans': istrue}">
        <ul>
          <div class="item1" @click="hidesidebar">
            <i class="bi bi-person-circle text-info"></i><router-link to="/About" class="anc"><li>About</li></router-link>
          </div>
          <div class="item1" @click="hidesidebar">
            <i class="bi bi-terminal-fill text-success"></i
            ><router-link to="/project" class="anc"
              ><li>Project</li></router-link
            >
          </div>
          <div class="item1" @click="hidesidebar">
            <i class="bi bi-file-earmark-person-fill text-danger"></i
            ><router-link to="/Resume" class="anc"><li>Resume</li></router-link>
          </div>
        </ul>
      </div>
      <div class="togle" @click="toggle">
        <i class="bi bi-list-task"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
      istrue:false,
      ishide:false,
      scrollPosition:null
    }
  },

  methods:{
    toggle(){
      this.istrue=!this.istrue
    },
    hidesidebar(){
      this.istrue=false
    },
    
  }
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: rgba(0, 0, 0, 0.332);
  width: 100%;
}

.items ul {
  display: flex;
  align-items: center;
  list-style: none;
}
.items ul .item1{
  display: flex;
}

ul li {
  display: block;
  padding-right: 60px;
  font-size: 20px;
}
i {
  padding-right: 10px;
}
.togle {
  display: none;
}

.anc {
  list-style: none;
  text-decoration: none;
}
.anc::after {
  content: "";
  display: block;
  width: 0;
  height: 4px;
  background: #fff;
  transition: width 0.3s;
}
.anc:hover::after {
  width: 50%;
}
.anc:hover {
  color: #fff;
}
.ancs:hover::after {
  width: 100%;
}

@media screen and (max-width: 750px) {
 
  .togle {
    display: block;
    font-size: 30px;
    cursor: pointer;
    color:#fff
  }


  .items {
    position: absolute;
    top: 90px;
    left: -100%;
    width: 100%;
    height: 100vh;
    padding-top: 2rem;
    background-color: orange;
    z-index: 10;
    /* display: none; */
    transition: all 0.5s ease-in-out;
  }
  .trans{
    left: 0;
  }
  .hidesade{
    /* left:-100% */
    /* opacity: 0; */
  }
  ul{
    display: flex;
    flex-direction: column;
  }
  ul .item1{
    padding: 10px 0;

    display: flex;
    /* flex-direction:column; */
  }
  .item1 {
    margin:10px 0
  
  }


}

.shhide{
  display: none;
}

@media screen and (max-width: 750px) {
 
 .shhide1 {
  display: none;
 }
 .shhide{
  display: block;
 }

}

</style>