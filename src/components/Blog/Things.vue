<template>
    <div>
        <div class="things">
        <div class="things_content">
            <div class="thiInfo">
                <h2>3 Things Everyone With High Blood Pressure Needs to Know</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit placerat maecenas sit.</p>
                <div>
                <span> <img src="@/assets/Imgs/Calendar.svg" alt=""> 13th , 2021</span>
                <span class="min"> <img src="@/assets/Imgs/Time.svg" alt="" > 3 min read</span>
                </div>
            </div>

            <div class="thing_img">
            <img src="@/assets/Imgs/sam.jpg" alt="">
            </div>
            
            <!-- =====================-->
            <b-container class="contents">
            <div class="content1">
            <p>If you have high blood pressure, you’re probably concerned about getting it under control. And you should be. High blood pressure is a major risk factor for heart disease (the leading cause of death) and stroke (the fourth leading cause of death) and contributes to over 1,100 deaths per day. The more striking aspect is most of these deaths are preventable. We have effective and inexpensive treatments for high blood pressure, yet less than 44% of high blood pressure cases are controlled.</p>
            
            <p> The devastating effect on our health and length of life of uncontrolled high blood pressure is unacceptable and led the U.S. Surgeon General to release a Call to Action to Control Hypertension to help improve the health of people with high blood pressure. If you’re interested in taking control of your blood pressure, there are three new medical literature findings that you should know about.</p>
            </div>

            <div class="content2">
            <h3>It’s important to monitor your blood pressure at home.</h3>
            <p>Like most doctors, I always thought the most accurate blood pressure is the one taken in my office, preferably by me. But research in recent years has shown that office blood pressures are often not accurate. Studies show up to 65% of office blood pressures are not correct. Other research has shown that home blood pressure measurements may be a better predictor of risk than office measurements and that monitoring at home lowers blood pressure and improves control.</p>

            <p> Several expert blood pressure guidelines now endorse home blood pressure monitoring based on this information. I recommend home blood pressure monitoring for all my patients and emphasize that the best way to take your blood pressure is to sit quietly for 5 minutes first.</p>
            </div>

            <div class="content3">
            <h3>It may be better to take your blood pressure medications at night.</h3>
            <p>In the past, I reasoned that blood pressure is higher during the day, so it would be better to take blood pressure medications in the morning. However, more recent research suggests that taking blood pressure medications at night does a better job of lowering blood pressure and, more importantly, may reduce the risk of death, heart attack, heart failure, and stroke. <p>
            
            <p>The one caution I have is if you take a blood pressure medication that is a diuretic or water pill, it may still be better to take it in the morning to avoid having to go to the bathroom at night.</p>
            </div>

            <div class="content4">
            <h3>If your blood pressure has been difficult to control, ask your doctor whether there may be a hormone problem.</h3>
            <p>We have known for a long time that one of the causes of high blood pressure is an elevation in the hormone aldosterone. This was thought to be rare. Recent research, though, suggests that high aldosterone levels may be a more frequent cause of high blood pressure than we thought. </p>
            
            <p>One paper demonstrated up to 20% of people with hard-to-treat high blood pressure may have high aldosterone levels, although only about 1 in 1,000 people are actually tested. You have the power to take charge of your blood pressure. Lifestyle changes such as exercising regularly, eating nutritious food, avoiding excess alcohol and salt, and getting down to a healthy weight may be as effective (or more!) than any medication.</p>
            
            <p> In addition to lifestyle change, talk to your doctor to see if you should monitor your blood pressure at home, take your medicines at night, and possibly be tested for high aldosterone levels.</p>
            </div>


            </b-container>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style>
.things{
 margin-top: 150px;
}

    .thiInfo{
width: 70%;
margin: 0 auto;

    }
    .thing_img img{
    width: 100%;
    height: 610px;
    margin: 76px 0;
    }
   .thiInfo h2{
       font-size: 42px;
       font-weight: 700;
   }
   .thiInfo p{
       font-size: 18px;
       color: #676788;
       margin: 24px 0;
   }
   .thiInfo span{
       font-size: 14px;
       color: #676788;
   }
   .min{
       margin-left: 24px;
   }
   .contents h3{
       font-size: 24px;
       color:#050229;
       margin:32px 0;
       font-weight: 700;
   }
   .contents p{
       color: #676788;
       font-size: 18px;
       font-weight: 600;
       line-height: 1.6;
   }
</style>