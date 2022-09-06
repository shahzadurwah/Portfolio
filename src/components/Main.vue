<template>
  <div class="row pt-3 pb-2 justify-content-center  " id="hei">
    <div
      class="col-xs-12  col-sm-12 col-md-5 p-5 mr-2"
      id="text"
    >
      <h1>Hello.<i class="fa fa-star"></i><br />I am M.Shahzad</h1>
      <span style="color:lightyellow">I design & build things for the web.</span>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-5 mt-3" id="imag">
      <img src="../images/img2.jpg" alt="" class="img-fluid rounded shadow" />
    </div>
  </div>
  <div class="d-flex justify-content-center pt-4  exp">
    <button class=" expl text-black">Explore</button>
  
  </div>
  <div class="d-flex justify-content-center exp">
  
    <a href="#div-p" v-smooth-scroll="{duration: 700}"><i class="bi bi-arrow-down-circle-fill" style="font-size: 40px;"></i></a>
    
  </div>



</template>

<script>
export default {};
</script>

<style scoped>
#hei{
    height: 65vh;
    /* overflow: hidden; */
}
#text{
  margin-top: 3rem;
}
img {
  width: 100%;
  max-height: 380px;
  object-fit: cover;
 object-position: center;
}
h1 {
  font-size: 60px;
  font-weight: bolder;
}

.expl{
    font-size: 25px;
    width: 170px;
    border: none;
    font-weight: bold;
    outline: none;
    background-color:  linear-gradient(red, yellow,green);
    text-shadow: 2px 2px 5px red;
    border-radius: 30px;
    padding: 10px 15px;
    transition: all 0.3s;
}
.expl:hover{
    background-color: rgba(0, 255, 255, 0.827);
    width: 200px;
}
i{
    font-size: 40px;
    color: orange;
    cursor: pointer;
}



/* media query start */

@media screen and (max-width: 1200px) {
  h1 {
    font-size: 60px;
  }
  #imag {
    text-align: center;
    margin: 0 5px;
    width: 100%;
  }
  #hei{
      height: auto;
    overflow: visible;
}
}
@media screen and (max-width: 768px) {
  
  #imag img{
    display: block;
    width: 100% !important;
  }

  h1 {
    font-size: 50px;
  }
  #text {
    text-align: center;
    margin: 0 10px;
  }
}
@media screen and (max-width: 500px) {
  
  #imag img{
    display: block;
    width: 100% !important;
    margin: auto;
  }
  img{
        display: block;
    width: 100% !important;
  }
    #text {
    /* text-align: center; */
    margin-left: 3rem;
  }
  .exp{
    margin-left: 3rem;
  }

  h1 {
    font-size: 30px;
  }

}

/* media end  */
i{
  font-size: 88px;
}
/*  */

</style>