<template>
  <div class="test mt-5">
      <b-container>
      <div class="testimonials-section">
      <h2 class="">Testimonials</h2>
        <b-row>
            <b-col cols="11" class="m-auto">
            <div class="testimonial_cont text-center">

				<div class="test_img ">
                <img src="@/assets/Imgs/i/6.jpg" alt="">
                </div>
                
                <h4 class="m-4">SANDRA M. GARCIA</h4>

                <hr class="hr">

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, consectetur adipiscing elit consectetur adipiscing elit luctus dui. Mauris magna metus.</p>

                <h5 class="mi">- Michael Holz</h5>
                <h5 class="mii">Nations Trust Bank</h5>

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

.test{
    background-color: #f1f1f1;
    padding: 60px 0;
    text-align: center;
}
.test h2{
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 100px;
}
.test_img img{
    border-radius: 50%;
}
.hr{
    width: 70%;
    margin: 20px auto;
}
.mii,.mi{
    font-size: 14px;
}
.mi{
    color: #EA4E7F;
}
</style>