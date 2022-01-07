<template>
   <div class="up" >
    <div class="toTop" @click="toTop()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20.975" height="20.975" viewBox="0 0 20.975 20.975">
  <path id="arrow-above" d="M6.374,1.757a.84.84,0,0,0,0,1.174l4.059,3.824H.805A.8.8,0,0,0,0,7.561V8.634a.775.775,0,0,0,.805.805h9.628L6.374,13.3a.874.874,0,0,0,0,1.174l.738.738a.831.831,0,0,0,1.141,0l6.542-6.541a.831.831,0,0,0,0-1.141L8.252,1.019a.831.831,0,0,0-1.141,0Z" transform="translate(-0.561 10.06) rotate(-45)" fill="#EA4E7F"/>
</svg>

    </div>
   </div>
</template>

<script>
export default {
    methods:{
        toTop(){
            window.scrollTo(0,0);
        }
    }
}
</script>


<style>
.up{
    display: flex;
    align-items: flex-end;
}
.toTop{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border:2px solid #EA4E7F;
    border-radius: 100%;
    position: fixed;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
}
.toTop svg{
    transform: rotate(315deg);
}
</style>