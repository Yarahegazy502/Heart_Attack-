<template>
<div>
<b-container>
<div class="health">
    <h2 class="text-center">
    A Healthy Heart Is<br>
    The Main Source Of Your Strength</h2>
    <a href="#" class="btn btn-dark btt"> <img src="@/assets/Imgs/playicon.svg"  alt=""> Download for android</a>
</div>
</b-container>
</div>
    
</template>


<script>
export default {
    
}
</script>

<style>
.health{
background-image: url(../../assets/Imgs/maindown.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 379px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    text-transform: capitalize;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 36px;
    border-top-left-radius: 36px;
    border-top-right-radius: 36px;
}
.health h2{
    font-size: 42px;
    color: #fff;
    margin-bottom: 30px;
}
.health a{
    text-decoration: none;}
.health a{
    background-color: #111;
    padding: 10px 20px;
    border-radius: 6px;
    color: #fff;
    transition: all .3s ease-in-out;
}
.btt{
padding: 10px 30px;
}
</style>