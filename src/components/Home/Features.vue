<template>
    <div class="all_features">
    <b-container>
    <!-- ============ -->
    <div class="bv-example-row">
    <b-row cols="2">
    <b-col cols="8" class="">
    <div class="take">
    <h2 >Take Alook At Our Features</h2>
    </div>
    </b-col>
    <b-col cols="4" class="">
    <div class="d-flex justify-content-end d">
    <a href="#" class="bt">Discover features <img src="@/assets/Imgs/arrow-right.svg"/></a>
    </div>
    </b-col>
  </b-row>
</div>

<!-- ============== -->

<!-- <b-row>
    <b-col>
    <div class="bg">
        <div class="f_content">
        <h2>Feature title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon.</p>
        </div>
    </div>
    </b-col>
  </b-row> -->

  <!--<div class="features d-flex align-items-center">
   <div class="feat">
   <h2>Feature title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon.</p>
   </div>
  </div>-->


  <Feature1/>


<!-- ================= -->

    <div class="mt-5">
      <b-row cols-lg="3" cols-md="2" cols-sm="2" >
    <b-col class="">
    <div class="shadow p-5 pl-5 mb-5 bg-body  f2-cotent">
    <h2>Feature Title</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon.</p>
     <a href="#" class="bt">Learn more <img src="@/assets/Imgs/arrow-right.svg"/></a>
    </div>
    </b-col>

    <b-col class="">
    <div class="shadow p-5 mb-5 bg-body  f2-cotent">
    <h2>Feature Title</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon.</p>
     <a href="#" class="bt">Learn more <img src="@/assets/Imgs/arrow-right.svg"/></a>

    </div>
    </b-col>

    <b-col class="m-md-auto m-sm-auto w-md-100" >
    <div class="shadow p-5 mb-5 bg-body  f2-cotent">
    <h2>Feature Title</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon.</p>
     <a href="#" class="bt">Learn more <img src="@/assets/Imgs/arrow-right.svg"/></a>

    </div>
    </b-col>
  </b-row>

    </div>
    </b-container>
    </div>
</template>

<script>
import Feature1 from '@/components/Features/Feature1.vue'
export default {
    components:{Feature1}
}
</script>

<style>
.all_features{
background-color: #FCFCFC;
padding: 40px 0;
margin: 50px 0;
}
.take h2{
font-size: 36px;
}
.features{
background-image: url(../../assets/Imgs/mainfeat.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
     border-radius: 15px;
     height: 330px;
     margin-top: 68px;
}
.features .feat{
width: 500px;
margin-left: 30px;
}
.features .feat h2{
    margin-bottom: 16px;
    font-size: 30px;
    color: #F9F9FB;}
.features .feat p{
    font-size: 18px;
     width: 565px;
    color: #F9F9FB;  }  


.f2-cotent h2{
    font-size: 24px;
}
.f2-cotent p{
    color: #676788;
    margin: 16px 0;
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 35px;
    }
.f2-cotent{
    border-radius: 15px;
}
.f2-cotent a,.d a{
text-decoration: none;
text-align: center;
}
.f2-cotent a:hover,.d a:hover{
color: #fff;
}
.bt{
    background-color: #111;
    padding: 15px 25px;
    border-radius: 8px;
    color: #fff;
    transition: all .3s ease-in-out;
    font-size: 16px;

}    

.bt:hover{  
    background-image: linear-gradient(to right, #EA4E7F , #7E72F0);
    border:1px solid #EA4E7F;
}

 @media (max-width: 991px) {
 .features{
    background-size: contain;
    margin: 0;
}
}
@media (max-width: 767px) {
.features{
    margin: 0;
    background-size: contain;
   padding: 20px 0;
}
.features .feat{
width: 500px;
margin-left: 20px;
}
.features .feat h2{
    margin-bottom: 16px;
    font-size: 27px;
    color: #F9F9FB;}
.features .feat p{
    font-size: 16px;
     width: 450px; } 
}
@media (max-width: 565px) {
  .features{
    margin: 0;
    background-size: contain;
   padding: 20px 0;
}
.features .feat{
width: 500px;
margin-left: 20px;
padding: 40px 0;
}
.features .feat h2{
    margin-bottom: 16px;
    font-size: 25px;
    color: #F9F9FB;}
.features .feat p{
    font-size: 15px;
     width: 100%; } 
}
@media (max-width: 350px) {
  .features{
    margin: 0;
    background-size: contain;
   padding: 20px 0;
}
.features .feat{
width: 500px;
margin-left: 20px;
}
.features .feat h2{
    margin-bottom: 16px;
    font-size: 25px;
    color: #F9F9FB;}
.features .feat p{
    font-size: 14px;
     width: 100%; } 
}   
</style>