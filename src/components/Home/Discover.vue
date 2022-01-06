<template>
    <div>
        <div class="discover mt-5">
        <h2 class="text-center disc">Discover Our Technologies</h2>
        <b-container class="bv-example-row text-center">
        <b-row cols-lg="3" cols-md="2" cols-sm="2" cols-xl="5" align-h="between" align-v="center">

            <b-col class="">
            <div>
            <div class="im">
            <img src="@/assets/Imgs/flutter.svg" alt="">
            </div>
            <p class="content">Flutter</p>
            </div>
            </b-col>


            <b-col class="">
            <div>
            <div class="im">
            <img src="@/assets/Imgs/xd.svg" alt="">
            </div>
            <p class="content">Adobe Xd</p>
            </div>
            </b-col>


            <b-col  class="">
            <div>
            <div class="im">
            <img src="@/assets/Imgs/ai.svg" alt="">
            </div>
            <p class="content">Ai Processing</p>
            </div>
            </b-col>


            <b-col  class="m-md-auto m-sm-auto">
            <div>
            <div class="im">
            <img src="@/assets/Imgs/iot.svg" alt="">
            </div>
            <p class="content">Iot</p>
            </div>
            </b-col>


            <b-col  class=" m-md-auto m-sm-auto">
            <div>
            <div class="im">
            <img src="@/assets/Imgs/signal.svg" alt="">
            </div>
            <p class="content">Signal Processing</p>
            </div>
            </b-col>


        </b-row>
        </b-container>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.content{
    margin-top: 15px;
    color: #c8c8d5;
    font-size: 24px;
}
.disc{
font-size: 36px;
    margin-bottom: 64px;
}
</style>