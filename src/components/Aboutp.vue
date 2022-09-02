<template>
  <div class="text-center mt-5">
    <h1>About</h1>
  </div>
  <div class="row justify-content-center" id="par">
    <div class="col-sm-12 col-md-5 mt-5 mr-3 rounded" id="para">
      <p class="sumary p-3">
        Junior Web Developer with 1+year of experience. Ability to build Spring
        Boot web applications. Adept in information gathering, planning,
        designing,development,delivery, and maintenance of websites. Extremely
        dedicated towards software designing with an incessant urge to serve the
        needs of the clients promising delivery of high quality solutions.
      </p>
    </div>
    <div class="col-sm-12 col-md-5 mt-5">
      <img src="../images/web3.jpg" alt="" class="img-fluid rounded shadow"/>
    </div>
  </div>

  <div class="row justify-content-center mt-5">
    <div class="col-sm-10 bg-dark text-white">
      <h2 class="text-center pt-3 small-30%">Newsletter</h2>
      <p class="text-center" style="font-size: 20px;">
        Keep up to date with my digital garden, my blog posts, and anything else
        I'm working on, as well as gain access to newsletter exclusive content.
        No spam, unsubscribe at any time.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aboutp",
};
</script>

<style scoped>
h2 {
  font-size: 40px;
  font-weight: bold;
}
#para {
  background-color: rgba(165, 141, 141, 0.142);

  margin-top: 1rem;
  /* padding-top: 6rem; */
}
.sumary{
  font-size: 20px;
  font-weight: bold;
  word-spacing: 5px;
  line-height: 3rem;
}
img {
  
  object-fit: cover;
  object-position: center;
}
h1 {
  margin-top: 0.5rem;
  font-size: 70px;
  font-weight: bolder;
}
</style>