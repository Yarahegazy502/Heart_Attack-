<template>
    <div class="form">
        <b-container class="bv-example-row">
           <div class="formcontent">

             <b-row>

                <b-col lg="4" md="12" sm="12" class="d-flex align-items-center">
                    <div class="get">
                        <b-container >
                        <h3>Get in touch</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit placerat maecenas sit.</p>
                        </b-container>
                    <b-container class="bv-example-row">
                        <div class="shadow p-3 mb-5 bg-body s mt-4">
                                <b-row>
                                    <b-col cols="4">
                                        <div class="mail d-flex justify-content-end">
                                            <img src="@/assets/Imgs/mail.png" alt="">
                                        </div>
                                    </b-col>
                                    <b-col cols="8">
                                        <div class="fc ">
                                            <h4>Email Us</h4>
                                        <p>info@artack.com</p>
                                        </div>
                                    </b-col>
                                </b-row>  
                        </div>
                        </b-container>
                       
                        <b-container class="bv-example-row">
                        <div class="shadow p-3 mb-5 bg-body s ">
                                <b-row>
                                    <b-col cols="4">
                                        <div class="mail d-flex justify-content-end">
                                            <img src="@/assets/Imgs/tel.png" alt="">
                                        </div>
                                    </b-col>
                                    <b-col cols="8">
                                        <div class="fc">
                                            <h4>Call Us</h4>
                                        <p>(354) - 456 - 1303</p>
                                        </div>
                                    </b-col>
                                </b-row>  
                        </div>
                        </b-container>
                    </div>



                </b-col>

                <b-col lg="7" md="12" sm="12" class="mt-5 mb-5">
                    <div class="for">
                    <div class="shadow p-5 mb-5 bg-body  sh">
                        <b-container class="bv-example-row">
                        
                            <b-row>
                                <b-col lg="6" md="6" sm="12">
                                    <div class="input">
                                        <label for="full_name">Full Name</label>
                                        <input type="text" name="full name" placeholder="Your Name" id="full_name">
                                    </div>
                                </b-col>
                                <b-col lg="6" md="6" sm="12">
                                    <div class="input">
                                        <label for="Email">Email Address</label>
                                        <input type="Email" name="Email" placeholder="example@mail.com" id="Email">
                                    </div>
                                </b-col>
                                <b-col lg="6" md="6" sm="12">
                                    <div class="input">
                                        <label for="Phone">Phone Number</label>
                                        <input type="text" name="Phone" placeholder="(123) - 456 - 7890" id="Phone">
                                    </div>
                                </b-col>
                                <b-col lg="6" md="6" sm="12">
                                    <div class="input">
                                        <label for="full_name">Full Name</label>
                                        <input type="text" name="full name" placeholder="Your Name" id="full_name">
                                    </div>
                                </b-col>
                                 <b-col cols="12">
                                    <div class="input">
                                        <label for="Subject">Subject</label>
                                        <textarea name="Subject" id="Subject" placeholder="Ex. support"></textarea>
                                    </div>
                                </b-col>
                              
                            </b-row>
                             <a href="#" class="bt">Send Message</a>
                            </b-container>
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
.form{
    margin-top: 150px;
}

.formcontent{
    margin-top: 30px;
    background-image: url(../../assets/Imgs/i/bg.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
   
}

.for label{
    display: block;
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: bold;
}
.for input{
      width: 95%;
}
.for input,.for textarea{
    border: 1px solid #E4E4EB;
    border-radius: 14px;
    padding: 17px 0 17px 24px;
    margin-bottom: 24px;
}
.for textarea{
    width: 100%;
      margin-bottom: 42px;
}
.for a{
    padding: 18px 37px;
    background-color: #050229;
    border-radius: 14px;
    border: 1px solid #E4E4EB;
    color: #fff;
    text-decoration: none;
}
.for a:hover{
color: #fff;
}
.sh{
padding: 64px 0;
border-radius: 25px;
}
input:focus,textarea:focus{
    outline: 0;
}
.get h3{
color: #050229;
font-size: 42px;
font-weight: bold;
}
.s{
border-radius: 22px;
}
.fc h4{
font-size: 18px;
font-weight: 700;
}
p{
color: #676788;
font-size: 18px;
}

.bt:hover{
    background-image: linear-gradient(to right, #EA4E7F , #7E72F0);
    border:1px solid #EA4E7F;
}

</style>