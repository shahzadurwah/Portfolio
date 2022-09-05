<template>
  <div class="row mt-5 pt-3 pb-5 justify-content-center text-white">
    <div class="col-sm-12 col-md-5  color shadow setm">
      <div class="restitle">
        <h1>M.Shahzad</h1>
        <p class="text-right log">Web Developer & Designer</p>
      </div>
    </div>
    <div class="col-sm-12 col-md-5 color shadow setm">
      <div class="items">
        <ul>
          <li>
            <i class="bi bi-envelope"></i>
            <a href="#">shahzadakhtarurdu@gmail.com</a>
          </li>
          <li><i class="bi bi-house-fill"></i><a href="#">Bahawalnagar</a></li>
          <li>
            <i class="bi bi-telephone-fill"></i><a href="#">03090825766</a>
          </li>
          <li>
            <i class="bi bi-badge-wc-fill"></i> <a href="#">www.shahzad.com</a>
          </li>
          <li>
            <i class="bi bi-back"></i><a href="#">linkedIn.com/shahzad</a>
          </li>
          <li>
            <i class="bi bi-github"></i> <a href="#">github.com/shahzad</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- div 2 start -->

    <div class="col-sm-12 col-md-5 pr-3 color shadow setm">
      <div class="restitle2">
        <h2 class="pb-2">Summary</h2>
        <p>
          Junior Web Developer with 1+year of experience. Ability to build Spring Boot web applications. Adept in information gathering, planning, designing,development,delivery, and maintenance of websites.Extremely dedicated towards software designing with an incessant urge to serve the needs of the clients promising delivery of high quality solutions.
        </p>
      </div>
    </div>
    <div class="col-sm-12 col-md-5 color shadow setm">
      <div class="restitle2">
        <h2 class="pb-2">Key skills</h2>
        <button class="btn btnn">Semantic HTML</button>
        <button class="btn btnn">Advanced CSS</button>
        <button class="btn btnn">JavaScript</button>
        <button class="btn btnn">Vue Js</button>
        <button class="btn btnn">Java</button>
        <button class="btn btnn">Spring Boot</button>
        <button class="btn btnn">Hibernate</button>
        <button class="btn btnn">Jsp</button>
        <button class="btn btnn">Servlet</button>
        <button class="btn btnn">Rest Api</button>
        <button class="btn btnn">Sql</button>
        <button class="btn btnn">Firebase</button>
        
      </div>
    </div>
    <!-- div 3 start -->

    <div class="col-sm-12 col-md-5 pr-3 color shadow setm">
      <div class="restitle2">
        <h2 class="pb-2">Interests</h2>
        <div class="interest">
          <ul>
            <li>Personal knowledge management and digital gardening</li>
            <li>Developing general development skills</li>
            <li>CSS</li>
            <li>DESIGN</li>
            <li>READING</li>
            <li>Landscape photography</li>
          </ul>
        </div>
        <p></p>
      </div>
    </div>
    <div class="col-sm-12 col-md-5 color shadow setm">
      <div class="restitle2">
        <h2 class="pb-2">Software</h2>
        <button class="btn btnn">Visual Studio</button>
        <button class="btn btnn">Eclipse</button>
        <button class="btn btnn">STS</button>
        
        <button class="btn btnn">NetBeans</button>
        <button class="btn btnn">Photoshop</button>
        <button class="btn btnn">Java</button>
      </div>
    </div>
  </div>

  <div class="row justify-content-center text-white">
    <div class="col-sm-12 col-md-10 color shadow">
      <div class="restitle2">
        <h2 class="pb-2">Work history</h2>
        <div class="worktext">
          <ul>
            <li>
              <h5>Junior Developer</h5>
              <span> at Portable — Sep 2021-Present</span>
            </li>
          </ul>
          <p>
            Responsible for writing server-side web application logic. develop back-end components, connect the application with the other (often third-party) web services and support the front-end developers by integrating their work with the application.
          </p>
        </div>
      </div>

      <!-- div 2 start -->

   

      <!-- div 3 start -->

      <div class="worktext">
        <ul>
          <li>
            <h5>Video Editor and Motion Designer</h5>
            <span> at Idleglance (_YouTube Channel_) — 2018-2019</span>
          </li>
        </ul>
        <p>
          Delivered music video edits with audio syncing, motion graphics,
          titles, audio and special effects.
        </p>
      </div>
      <!-- div 4 start -->

      <div class="worktext">
        <ul>
          <li>
            <h5>Social Media Manager and Content Curator</h5>
            <span> — 2017-2018</span>
          </li>
        </ul>
        <p>
          After consultation with the client I created and edited visual
          communications tobe posted on platforms, such as Facebook<br />
          and LinkedIn.
        </p>
      </div>
    </div>
  </div>

  <!-- row 3 start -->
  <div class="row justify-content-center text-white">
    <div class="col-sm-12 col-md-10 color shadow">
      <h2>Education</h2>
      <div class="interest">
        <ul>
          <li>MATRIC</li>
          <li>FA</li>
          <li>BS SOFTWARE ENGINEERING <span>(CONTINUE)</span></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- row 4 start -->

</template>

<script>
export default {
  name: "Resume",
};
</script>

<style scoped>
.worktext {
  padding-top: 1rem;
  padding-bottom: 2rem;
}
.worktext ul {
  padding: 0;
  margin: 0;
}
.worktext ul li {
  margin-left: 2rem;
}
.worktext p {
  border-left: 2px solid orange;
  padding-left: 1rem;
  margin-left: 1.5rem;
}
h5 {
  display: inline-block;
  border-bottom: 0.5px solid orange;
}
.restitle {
  padding-top: 60px;
  padding-bottom: 60px;
}
.restitle2 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.restitle h1 {
  font-size: 90px;
  font-weight: bolder;
}
.restitle .log {
  display: inline;
  border-bottom: 1px solid orange;
  float: right;
}

.color {
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-top: 2rem;
  background-color: rgba(0, 0, 0, 0.623);
}
.color:hover {
  transform: scale(1.03, 1.03);
  border: 1px solid orange;
  border-radius: 5px;
}
.items {
  display: flex;
  justify-content: center;
  padding: 20px 0px;
}
.items ul li {
  list-style: none;
  padding-top: 10px;
}
i {
  padding-right: 5px;
}
.btnn {
  border: none;
  outline: none;
  margin-left: 1rem;
  margin-top: 1rem;
  background-color: orange;
}
.setm{
  margin: 1rem 1rem;
}
@media only screen and (max-width: 500px){
  .restitle h1 {
  font-size: 50px;
  font-weight: bold;
}
.setm{
  margin: 1rem 0rem;
  
}
}
</style>