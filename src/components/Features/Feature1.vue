<template>
    <b-container>
           <div class="feature1">
                <b-row>

                    <b-col lg="6" md="12" sm="12" class="d-flex align-items-center">
                        <div class="feature1_cont m-lg-5 m-md-5">
                            <b-container>
                                <h2>Feature title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon.</p>
                            </b-container>
                        </div>
                    </b-col>

                    <b-col lg="6" md="12" sm="12" class="d-flex justify-content-center">
                      <b-container>
                      <div class="feature1_img ">
                            <img src="@/assets/Imgs/i/m.png" alt="">
                        </div>
                      </b-container>
                    </b-col>

                    
                </b-row>
             
    </div>
    </b-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  .feature1{
      background-image: url(../../assets/Imgs/i/1.png);
        background-size: cover;
        background-repeat: no-repeat;
        border-top-right-radius:50px ;
        border-bottom-right-radius: 50px;
        margin-top: 56px;
        overflow: hidden;
  }
  .feature1_img img{
      width: 100%;
margin:  auto;
  }
  .feature1_cont{
      width: 100%;
  }
  .feature1_cont h2{
 margin-bottom: 16px;
    font-size: 30px;
    color: #F9F9FB;
  }
   .feature1_cont p{
 font-size: 18px;
    color: #F9F9FB; 
  }
 @media (max-width: 767px) {
 .feature1_cont{
     margin: 20px ;
     text-align: center;
 }

 }
</style>