<template>
    <b-container class="bv-example-row pt-5 pb-5 ask">
  <b-row>

  <!-- ========IMG================== -->
    <b-col lg="6" md="12" sm="12" class="">
     <div class="img">
    <img src="@/assets/Imgs/mainimg 2.png" alt="">
    </div>
    </b-col>
  <!-- ==========CONTENT========== -->
    <b-col align-self="center"  lg="6" md="12" sm="12" class="">
    <div class="m-lg-5">
    <div class="adv mt-lg-0 mt-md-5 mt-sm-5">
    <h1>Asking About Artack?Let's Explore</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon</p>

    <ul class="mb-4">
    <li>check heart beats</li>
    <li>discover your ECG</li>
    <li>measure blood oxygen level</li>
    </ul>

    <a href="#" class="btn btn-dark">Learn more  <img src="@/assets/Imgs/arrow-right.svg" class="ml-3" alt=""></a>
    </div>
    </div>
    </b-col>

  </b-row>
</b-container>
</template>

<script>
export default {
    
}
</script>

<style >

.adv h1{
    font-size: 42px;
    font-weight: bold;
}
.adv p{
font-size: 20px;
    margin: 25px  0;
}
.adv a{
background-color: #111;
    padding: 15px 25px;
    border-radius: 8px;
    color: #fff;
    transition: all .3s ease-in-out;
}
.adv ul li{
margin-bottom: 10px;
color: #676788;
font-size: 19px;
}
.btn img{
margin-right: 10px;
}
.img img{
width: 100%;
}
.btn:hover{
    background-image: linear-gradient(to right, #EA4E7F , #7E72F0);
    border:1px solid #EA4E7F;
}
</style>