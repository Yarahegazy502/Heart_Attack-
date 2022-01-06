<template>
    <div>
    <div class="featt">
    <h2 class="text-center">Artack features</h2>
    <b-container class="bv-example-row">
  <b-row>
    <b-col  align-self="center" lg="4" md="6" sm="6" offset-md="3" class="m-auto order-lg-1 order-md-2 order-sm-2 c1 ">
       <div class="fepos d-flex justify-content-end">
        <div class="feat1 ">

            <div class="feat11">
            <div class="featnum d-flex justify-content-end">
                <div class="featnumm">01</div>
            </div>
            <div class="featcon mb-5">Feature title</div>
            </div>

             <div class="feat11">
            <div class="featnum d-flex justify-content-end">
                <div class="featnumm">02</div>
            </div>
            <div class="featcon">Feature title</div>
            </div>
        </div>
       </div>
    </b-col>

    <b-col lg="4" md="12" sm="12" class="order-lg-2 order-md-1 order-sm-1 c2  mb-sm-5 ">
        <div class="feat2">
            <img src="@/assets/Imgs/Group501.png" alt="">
        </div>
    </b-col>

    <b-col  align-self="center" lg="4" md="6" sm="5" class="order-lg-3 order-md-3 order-sm-3 c3 ">
        <div class="feat1">
            <div class="feat3">
            <div class="feat11">
            <div class="featnum">
                <div class="featnumm">03</div>
            </div>
            <div class="featcon  mb-5">Feature title</div>
            </div>

             <div class="feat11">
            <div class="featnum">
                <div class="featnumm">04</div>
            </div>
            <div class="featcon">Feature title</div>
            </div>
        </div>
        </div>
    </b-col>
  </b-row>
  <div class="apara">
    <p class="">Artack application presents many wonderful features for the user, which help him to monitor the state of his heart health at any time.</p>
   <a href="#" class="btn btn-dark"> <img src="@/assets/Imgs/playicon.svg"  alt=""> Download for android</a>
  </div>

</b-container>
    </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.featt{
    margin-top: 150px;
}
.featt h2{
margin: 76px 0;
font-size: 42px;
font-weight: 700;
}
.feat2 img{
width: 100%;
}

.featnumm{
    width: 50px;
    height: 50px;
    background-color: #050229;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 16px;
     font-size: 18px;
     font-weight: 700;
}
.featcon{
    font-size: 22px;
     font-weight: 700;
}
.apara{
    color: #676788;
    text-align: center;
    font-size: 20px;
    margin: 76px auto 40px auto;
    width: 60%;
}
.apara a{
    background-color: #111;
    padding: 15px 25px;
    border-radius: 8px;
    color: #fff;
}
.c1{
    order: 1;
}
.c2{
    order: 2;
}
.c3{
    order: 3;
}
 @media (max-width: 565px) {
     
.c1{
    order: 2;
}
.c2{
    order: 1;
}
.c3{
    order: 3;
}
.fepos{
    display: flex;
    justify-content: start;
}
 }
</style>

