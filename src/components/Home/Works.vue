<template>
    <div class="w">
            <b-container class="bv-example-row bv-example-row-flex-cols pt-5">
    <h2 class="work text-center mt-5">How it works</h2>
  <b-row >
    <b-col class="" align-self="start" lg="4" md="6" sm="12">
    <div class="dd">
        <div class="num">
          <b-row>
            <b-col sm="6">
                <div class="n">
                01
                </div>
            </b-col>
            <b-col sm="6">
            <div class="img">
            <img src="@/assets/Imgs/arrow2.svg" alt="">
            </div>
            </b-col>
  </b-row>
        </div>
        <h3>Connect Sensors</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon.</p>
    </div>
    </b-col>

    <b-col class="" align-self="center" lg="4" md="6" sm="12">
    <div  class="down1 dd">
        <div class="num">
          <b-row>
            <b-col sm="6">
                <div class="n">
                01
                </div>
            </b-col>
            <b-col sm="6">
            <div class="img">
            <img src="@/assets/Imgs/arrow2.svg" alt="">
            </div>
            </b-col>
  </b-row>
        </div>
        <h3>Turn on Bluetooth</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon.</p>
    </div>
    </b-col>

    <b-col class="" align-self="end" lg="4" md="12" sm="12">
    <div class="down2 dd">
        <div class="num">
          <b-row>
            <b-col sm="6">
                <div class="n">
                03
                </div>
            </b-col>
            <b-col sm="6">
            <div class="img">
            <img src="@/assets/Imgs/arrow2.svg" alt="">
            </div>
            </b-col>
  </b-row>
        </div>
        <h3>Start Reading</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon.</p>
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


<style  scoped>
.w{
background-color: #FCFCFC;
padding-bottom: 100px;

}
.work h2{
    font-size: 36px;
    margin-bottom: 100px;
}
.num .n{
    font-size: 34px;
    color: #fff;
    width: 64px;
    height: 64px;
    background-color: #7e72f0;
    border-radius: 8px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dd h3{
    font-size: 24px;
    margin: 20px 0;
}
.dd p{
    font-size: 16px;
    color: #676788;
    line-height: 1.6;
}
.img{
margin-top: 15px;
}
.img img{
width: 60%;
}
.dd{
margin: 0 20px;
}
.down1{
margin-top: 50px;
}

.down2{
margin-top: 100px;
}
</style>