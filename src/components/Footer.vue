<template>
<div class="footer shadow-lg p-3 mt-5 bg-body">
    <b-container class="bv-example-row">
  <b-row class="">
    <b-col class="">
    <div>
     <!-- <img :src="../../Imgs/logo.svg" /> -->
    <img src="@/assets/Imgs/logo.svg"/>
    <!-- <img src="logo"/> -->
    </div>
    </b-col>

    <b-col class="" cols="6" >
    <div class="ii">
       <a href="#" class="text-secondary link">FAQs</a>
    <span class="m-5 text-secondary info m-sm-3">info@artack.com</span>
    </div>
    </b-col>

    <b-col lg="3" md="12" sm="12" class=" text-md-center text-sm-center " >
    <div class="copy">
    <p class="text-secondary">Copyright © <span class="text-secondary link">Artack</span></p>
    </div>
    </b-col>
    </b-row>
    </b-container>
</div>
 
  
</template>

<script>
// import logo from '../../Imgs/logo.svg'
// import logo from '../../Imgs/logo.svg'
export default {
//    logo
 
}
</script>

<style>
.link{
text-decoration: none;
font-weight: bold;
font-size: 18px;
}
.info{
font-size: 18px;
}



@media (max-width: 991px) {
  .copy{
  margin-top: 30px;
  }
}
@media (max-width: 767px) {
  .copy{
  margin-top: 30px;
  }
 
}
@media (max-width: 565px) {
.info{
font-size: 16px;
}
  .copy{
  text-align: center;
  margin-top: 30px;
  }

 
}
@media (max-width: 350px) {
   .copy{
  text-align: center;
  margin-top: 30px;

  }
   .ii{
    width: 100%;
   margin: 0 auto;
  }
}
</style>