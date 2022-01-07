<template>
    <div class="article">
        <h2 class="text-center mb-5">Latest Articles</h2>

      <b-container>

            <b-row >
 <b-col class="" lg="6" md="6" sm="12">
    <div class="shadow  pl-5 m-3 bg-body  f2-cotent">
    <div class="f_img">
    <img src="@/assets/Imgs/9.jpg" alt="">
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
     <a href="#" class="bt" @click.prevent="posts()">Read more <img src="@/assets/Imgs/arrow-right.svg" class="arr" alt=""></a>
    </div>
    </div>
    </b-col>

    <b-col class="" lg="6" md="6" sm="12">
    <div class="shadow  pl-5 m-3 bg-body  f2-cotent">
    <div class="f_img">
    <img src="@/assets/Imgs/8.jpg" alt="">
    </div>
    <div class="f_con p-4 ">
    <h3>Should You Be Taking a Daily Aspirin?
    </h3>
    <div class="row sp">
    <div class="col-sm-6">
    <span><img src="@/assets/Imgs/Calendar.svg" alt=""> May 13th , 2021</span>
    </div>
    <div class="col-sm-6 ">
    <span><img src="@/assets/Imgs/Time.svg" alt="" > 3 min read</span>
    </div>
    </div>
     <a href="#" class="bt" @click.prevent="posts()">Read more <img src="@/assets/Imgs/arrow-right.svg" class="arr" alt=""></a>
    </div>
    </div>
    </b-col>


    <b-col class="" lg="6" md="6" sm="12">
    <div class="shadow  pl-5 m-3 bg-body  f2-cotent">
    <div class="f_img">
    <img src="@/assets/Imgs/4.jpg" alt="">
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
     <a href="#" class="bt" @click.prevent="posts()">Read more <img src="@/assets/Imgs/arrow-right.svg" class="arr" alt=""></a>
    </div>
    </div>
    </b-col>
    <b-col class="" lg="6" md="6" sm="12">
    <div class="shadow  pl-5 m-3 bg-body  f2-cotent">
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
     <a href="#" class="bt" @click.prevent="posts()">Read more <img src="@/assets/Imgs/arrow-right.svg" class="arr" alt=""></a>
    </div>
    </div>
    </b-col>

     <b-col class="" lg="6" md="6" sm="12">
    <div class="shadow  pl-5 m-3 bg-body  f2-cotent">
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
     <a href="#" class="bt" @click.prevent="posts()">Read more <img src="@/assets/Imgs/arrow-right.svg" class="arr" alt=""></a>
    </div>
    </div>
    </b-col>


    <b-col class="" lg="6" md="6" sm="12">
    <div class="shadow  pl-5 m-3 bg-body  f2-cotent">
    <div class="f_img">
    <img src="@/assets/Imgs/6.jpg" alt="">
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
     <a href="#" class="bt" @click="posts()" >Read more <img src="@/assets/Imgs/arrow-right.svg" class="arr" alt=""></a>
    </div>
    </div>
    </b-col>

  </b-row>
      </b-container>
    </div>
     
</template>

<script>
export default {
      methods:
    {
        posts(){
            this.$router.push('/blog')
        }
    }
}
</script>

<style>
.article{
background-color: #FCFCFC;
margin: 76px 0;
padding: 100px 0;
}
.article h2{
  font-size: 35px;
  font-weight: 700;
}
</style>