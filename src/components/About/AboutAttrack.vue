<template>
<div>
<b-container>
<div class="about">

    <div class="about-cont">
      <h2>About Artack</h2>
    <p>It is an application specialized in early prediction of a heart attack, using modern technologies such as the Internet of Things, artificial intelligence, and signal processing. The application aims to help the user follow up on the health of his heart at any time from the home and without the need to go to the doctor.</p>
    </div>

    <div class="about-img">
     <img src="@/assets/Imgs/h.jpg" alt="">
    </div>


</div>
</b-container>

</div>
    
</template>


<script>
export default {
    
}
</script>

<style>
.about-img img{
    width: 100%;
    height: 650px;
    border-radius: 20px;
}
.about{
    margin-top: 150px;
}
.about .about-cont{
    width: 80%;
    margin: 0 auto;
    text-align: center;
}
.about .about-cont h2{
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 24px;
}
.about .about-cont p{
letter-spacing: 0px;
color: #676788;
font-size: 20px;
margin-bottom: 56px;
}
</style>