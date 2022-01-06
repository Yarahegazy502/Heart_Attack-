<template>
<div>
    <div class="carsol">
    <div class="overlay"></div>
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    animation
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="First slide"
      img-src="https://assets.ignitermedia.com/products/33468-attack-of-the-heart/preview/image"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="https://i.pinimg.com/236x/7a/1e/10/7a1e1039c172eb3ae6f4379e96376d66.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="https://i.pinimg.com/236x/5a/3a/28/5a3a28f9872932a9af3c3ee8093c4bed.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Fourth Slide"
      img-src="https://i.pinimg.com/236x/11/83/03/1183032b7ddbc13d52fc6af62e8ad11d.jpg"
    ></b-carousel-slide>
  </b-carousel>
</div>
</div>
</template>


<script>
export default {
    
}
</script>


<style>
.carsol{
  width: 100%;
  height: 100vh
}
.carousel {
    margin-top: 119px;}

    .overlay{
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: chartreuse;
    }
</style>