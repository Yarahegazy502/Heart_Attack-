<template>
    <div class="facts">
        <b-container>
               <h2 class="">Facts about us</h2>
                <div class="fact-sec">
                    <b-row>
                        <b-col lg="4" md="6" sm="12" class="mb-sm-5">
                             <div class="fact-info m-auto error">
                            <h3>3 %</h3>
                        <p>Error Rate</p>  
                    </div>
                        </b-col>
                        <b-col lg="4" md="6" sm="12" class="mb-sm-5">
                             <div class="fact-info  m-auto app ">
                        <h3>94 %</h3>
                        <p>App Rating</p>
                    </div>
                        </b-col>
                        <b-col lg="4" md="12" sm="12" class="mb-sm-5">
                            <div class="fact-info  m-auto acur">
                        <h3>97 %</h3>
                        <p>Acurracy</p>
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

.facts{
    padding: 120px 0;
}
.facts h2{
    font-size: 36px;
    margin-bottom: 76px;
    text-align: center;
    font-weight: bold;
}

.facts .fact-sec .fact-info{
    width: 219px;
    height: 226px;
    border: 15px solid #111;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.facts .fact-sec .fact-info h3{
    font-size: 42px;
}
.facts .fact-sec .fact-info p{
    font-size: 20px;
    color: var(--gray);
}
.facts .fact-sec .error{
    border: 15px solid #ea4e7f88;
    color:#EA4E7F;
}
.facts .fact-sec .app{
    border: 15px solid #ecce3881;
    color: #ECCE38;
}
.facts .fact-sec .acur{
    border: 15px solid #00ffa267;
    color: #00FFA2;
}
.facts .fact-sec .fact-info::before{
    position: absolute;
    content: "";
    top: -20px;
        left: -25px;
        right: -22px;
        bottom: -18px;
    border: 25px solid #d31f1f;
    transform: rotate(40deg);
    border-radius: 50%;
}
.facts .fact-sec .error:before{
        border: 25px solid #EA4E7F;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;

}
.facts .fact-sec .app:before{
    border: 25px solid #ECCE38;
border-left-color: transparent;
border-bottom-color: transparent;
}
.facts .fact-sec .acur:before{
    border: 25px solid #00FFA2;
border-left-color: transparent;

}

</style>