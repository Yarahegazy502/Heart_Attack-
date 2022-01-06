<template>
  <div class="work-about">
    <b-container class="bv-example-row pt-5 pb-5">

  <b-row>
  <!-- ==========CONTENT========== -->
    <b-col align-self="center"  lg="6" md="12" sm="12" class="order-lg-1 order-md-2 order-sm-2">
    <div class="d-flex align-items-center">
    <div class="adv">
    <h1>How it works?</h1>
    <p>After connecting the sensor to the right places, the application connects to the sensor via Bluetooth, and the current heart rate is displayed to the user as well as the electrocardiogram, through which we have developed artificial intelligence mechanisms that enable the application to know whether the ECG is normal or not, and if there is a suspicion of a heart attack, the application will predict it before it occurs This will enable the application to direct the patient to the nearest hospital according to his location to check on his health condition.</p>

    </div>
    </div>
    </b-col>

<!-- ========IMG================== -->
    <b-col lg="6" md="12" sm="12" class=" order-lg-2 order-md-1 order-sm-1 d-flex align-items-center">
     <div class="img ">
   <!--<img src="@/assets/Imgs/c.jpg"/>-->
   <iframe width="560" height="315" src="https://www.youtube.com/embed/ygsvAZVA6sc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

<style scoped>
.work-about{
    background-color: #FCFCFC;
    padding: 100px 0;
}
.adv h1{
    font-size: 42px;
    font-weight: bold;
}
.adv p{
font-size: 20px;
    margin: 25px 100px 25px 0;
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
</style>