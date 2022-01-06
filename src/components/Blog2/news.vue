<template>
    <div class="news">
        <h2>Blogs & News</h2>

        <b-container class="bv-example-row">
            <b-row>

                <b-col lg="8" md="12" sm="12">
                    <div class="news_img">
                        <img src="@/assets/Imgs/sam.jpg" alt="">
                    </div>
                </b-col>

                <b-col lg="4" md="12" sm="12" class="d-flex align-items-center">
                    <div class="f2-cotent">
                        
                        <div class="f_con p-4">
                        <h3>3 Things Everyone With High Blood Pressure Needs To Know</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit placerat maecenas sit.</p>

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

<style scoped>
.news{
     margin-top: 150px;
}
.news h2{
font-size: 42px;
font-weight: bold;
text-align: center;
    margin: 76px 0;

}
.news h3{
    font-size: 32px;
    font-weight: 700;
}
.news_img img{
    width: 100%;
    height: 411px;
    border-radius: 25px;
}
</style>