<template>
  <div class="row p-3 m-3 justify-content-center" id="fot">
    <div class="col-sm-12 col-md-6 p-4 ">
      <div class="fle">
        <div class="formalert">
          <label for="">Email</label><br />
          <input type="text" />
        </div>
        <div class="buttonalert">
          <button class="btn">Subscribe</button>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-12 text-center">
      <div class="item">
        <div class="items">
          
          
          <div id="div-i"><a href="#div-id" v-smooth-scroll="{duration: 1000}"><i class="bi bi-arrow-up-circle-fill"></i></a></div> 
          <!-- <a href="#div-id" v-smooth-scroll="{duration: 1000}">Anchor</a>  -->
        </div>
        <p class="p-3">© 2021-2022 All Rights Reserved, Made with bye//y</p>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footers",
};
</script>

<style scoped>
.buttonalert {
  margin-top: 3.5rem;

}
.fle {
  display: flex;
  align-items: center;
  /* flex-direction: column; */
}
.item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(13, 13, 13, 0.242);
}
.items {
  display: flex;
  justify-content: center;
  position: relative;
}
#div-i{

position: absolute;
right: 20px;
cursor: pointer;
}
#div-i i{
  color: orange;
  font-size: 50px;
}
@media screen and (max-width: 650px){
  #div-i{
    padding-left: 10px;
  }
  #div-i i{
  /* color: orange; */
  font-size: 30px;
  padding-left: 10px;
}
}
ul {
  display: flex;
}
ul li {
  list-style: none;
  padding: 0px 30px;
  font-size: 20px;
  /* font-weight: bold; */
}
.mians {
  width: 100%;

  /* max-width: 800px; */
  margin: 1rem auto;
  margin-top: 3rem;
}
.subscribe {
  margin-bottom: 2rem;
  margin-left: 3rem;
  padding: 20px 10px;
}
label {
  color: orange;
  font-size: 30px;
}
input[type=text] {
  padding: 10px 10px;
  width: 110%;
  transition: 0.5s ;
  outline: none;
}
input[type=text]:focus {
  border: 3px solid orange;
}
button {
  display: block;
  margin-left: 2rem;
  background-color: orange;
  font-size: 20px;
  width: 150px;

  border: none;
  font-weight: bold;
  outline: none;

  padding: 10px 15px;
  transition: all 0.3s;
}


</style>>
