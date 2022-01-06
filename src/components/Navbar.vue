<template>
    <div>
 <b-navbar toggleable="lg" type="dark" variant="" class="nav position-fixed">
 <b-container>
    <b-navbar-brand href="#">
    <img src="@/assets/Imgs/logo.svg" alt="">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" class="tog">
    <img src="@/assets/Imgs/th.jpg" width="40px" alt="">
    </b-navbar-toggle>

    <b-collapse id="nav-collapse"  is-nav>
      <b-navbar-nav class="links m-lg-auto ml-md-auto ml-sm-auto">
        <router-link class="link lactive" to="/">Home</router-link> 
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/blog2">Blog</router-link>
        <router-link class="link" to="/feature">Feature</router-link>
        <router-link class="link" to="/contact">Contact</router-link>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
    </b-collapse>

    <div class="ml-auto">
      <b-button variant="dark" class="nbtn p-3 pl-4 pr-4 pt-2 pb-2 d-lg-flex d-md-none d-sm-none">Download</b-button>
    </div>
   </b-container>
  </b-navbar>

    <router-view />

</div>
</template>

<script>
export default {
    
}
</script>

<style>
.tog{
  margin-left: auto;
}

.nav{
height: 100px;
background-color: #fff;
opacity: .95;
width: 100%;
top: 0;
z-index: 3;
}
.link{
  margin: 20px;
  color: #111;
}
.lactive{
  border-bottom: 2px solid #EA4E7F;

}
.link:hover{
  border-bottom: 2px solid #EA4E7F;
  color: #000;
}



.navbar > .container, .navbar > .container-fluid, .navbar > .container-sm, .navbar > .container-md, .navbar > .container-lg, .navbar > .container-xl, .navbar > .container-xxl {

  background-color: #fff;
}
</style>