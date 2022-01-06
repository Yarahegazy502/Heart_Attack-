<template>
 <div class="a">
    <b-container class="bv-example-row pt-5 pb-5">
  <b-row>
  <!-- ==========CONTENT========== -->
    <b-col align-self="center"  lg="6" md="12" sm="12" class="order-lg-1 order-md-2 order-sm-2">
    <div class="d-flex align-items-center">
    <div class="adv">
    <h1>Advanced Heart-Attack Prediction App</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon.</p>

    <a href="#" class="btn btn-dark"> <img src="@/assets/Imgs/playicon.svg"  alt=""> Download for android</a>
    </div>
    </div>
    </b-col>

<!-- ========IMG================== -->
    <b-col lg="6" md="12" sm="12" class=" order-lg-2 order-md-1 order-sm-1">
     <div class="img">
    <img src="@/assets/Imgs/app.png" alt="">
    </div>
    </b-col>
  </b-row>
</b-container>
 </div>
</template>

<script>
export default {
    
}
</script>

<style>
.a{
    margin-top: 110px;
}
.adv h1{
    font-size: 42px;
    font-weight: bold;
}
.adv p{
font-size: 20px;
    margin: 25px 150px 25px 0;
}
.adv a{
background-color: #111;
    padding: 15px 25px;
    border-radius: 8px;
    color: #fff;
    transition: all .3s ease-in-out;
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