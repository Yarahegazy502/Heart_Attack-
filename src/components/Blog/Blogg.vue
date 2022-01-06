<template>
    <div class="all_features">
    <b-container>
    <!-- ============ -->
    <div class="bv-example-row">

    <b-row cols="2">

    <b-col cols="8" class="">
    <div class="take">
    <h2 >Latest Articles</h2>
    </div>
    </b-col>
    
    <b-col cols="4" class="">
    <div class="d-flex justify-content-end d">
    <a href="#" class="bt">Browse all articles  <img src="@/assets/Imgs/arrow-right.svg"/> </a>
    </div>
    </b-col>
  </b-row>
</div>

<!-- ============== -->

<!-- ================= -->

    <div class="mt-5">
      <b-row >


    <b-col class="" lg="6" md="6" sm="12" >
    <div class="shadow pl-5 mb-5 bg-body  f2-cotent">
    <div class="f_img">
    <img src="@/assets/Imgs/6.jpg" alt="">
    </div>
    <div class="f_con p-4">
    <h3>Is It Heart Pain or Just Heartburn?</h3>
    <div class="row sp">
    <div class="col-sm-6">
    <span><img src="@/assets/Imgs/Calendar.svg" alt=""> May 13th , 2021</span>
    </div>
    <div class="col-sm-6 ">
    <span><img src="@/assets/Imgs/Time.svg" alt="" > 3 min read</span>
    </div>
    </div>
     <a href="#" class="bt">Read more <img src="@/assets/Imgs/arrow-right.svg" class="arr" alt=""></a>
    </div>
    </div>
    </b-col>




    <b-col class="" lg="6" md="6" sm="12">
    <div class="shadow  pl-5 mb-5 bg-body  f2-cotent">
    <div class="f_img">
    <img src="@/assets/Imgs/5.jpg" alt="">
    </div>
    <div class="f_con p-4 ">
    <h3>Should You Be Taking a Daily Aspirin?</h3>
    <div class="row sp">
    <div class="col-sm-6">
    <span><img src="@/assets/Imgs/Calendar.svg" alt=""> May 13th , 2021</span>
    </div>
    <div class="col-sm-6 ">
    <span><img src="@/assets/Imgs/Time.svg" alt="" > 3 min read</span>
    </div>
    </div>
     <a href="#" class="bt">Read more <img src="@/assets/Imgs/arrow-right.svg" class="arr" alt=""></a>
    </div>
    </div>
    </b-col>

  </b-row>

    </div>
    </b-container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

.take h2{
font-size: 36px;
}
.f2-cotent {
padding-bottom: 20px;
}
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
.f_con{
padding-bottom: 20px;
} 
.f_con .sp{
margin: 20px 0 30px 0;
}
  .f_con .sp span{
  font-size: 15px;
  color: #676788;
  }
  .f_img{
  width: 100%;
  }
.f_img img{
width: 100%;
border-top-left-radius: 17px;
    border-top-right-radius: 17px;

}  
.arr{
transform: matrix(0.71, -0.71, 0.71, 0.71, 0, 0);
}
</style>