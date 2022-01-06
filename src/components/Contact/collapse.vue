<template>
  <div class="accordion mt-5" role="tablist">
  <b-container class="bv-example-row">
  <b-row>

    <b-col lg="12" md="12" sm="12">
    <b-card no-body class="mb-1 shadow-sm p-3 mb-5 bg-body rounded">
      <b-card-header header-tag="header" class="p-2" role="tab">
        <div block v-b-toggle.accordion-1 variant="info" class="colla">
           <b-container>
             <b-row>
                <b-col cols="12"><h3>How can I use the application?</h3></b-col>
                
            </b-row>
           </b-container>
        </div>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>

    <b-col lg="12" md="12" sm="12">
     <b-card no-body class="mb-1 shadow-sm p-3 mb-5 bg-body rounded">
      <b-card-header header-tag="header" class="p-2" role="tab">
        <div block v-b-toggle.accordion-2 variant="info">
              <b-container>
             <b-row>
                <b-col cols="12"><h3>Is Artack app available on iPadOS?</h3></b-col>
                
            </b-row>
           </b-container>
        </div>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>

    <b-col lg="12" md="12" sm="12">
     <b-card no-body class="mb-1 shadow-sm p-3 mb-5 bg-body rounded">
      <b-card-header header-tag="header" class="p-2" role="tab">
        <div block v-b-toggle.accordion-3 variant="info">
          <b-container>
             <b-row>
                <b-col cols="12"><h3>Is Artack app available on iPadOS?</h3></b-col>
                
            </b-row>
           </b-container>
        </div>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>

      <b-col lg="12" md="12" sm="12">
     <b-card no-body class="mb-1 shadow-sm p-3 mb-5 bg-body rounded">
      <b-card-header header-tag="header" class="p-2" role="tab">
        <div block v-b-toggle.accordion-4 variant="info">
          <b-container>
             <b-row>
                <b-col cols="12"><h3>How can I create an account?</h3></b-col>
                
            </b-row>
           </b-container>
        </div>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>


    <b-col lg="12" md="12" sm="12">
     <b-card no-body class="mb-1 shadow-sm p-3 mb-5 bg-body rounded">
      <b-card-header header-tag="header" class="p-2" role="tab">
        <div block v-b-toggle.accordion-5 variant="info">
         <b-container>
             <b-row>
                <b-col cols="12"><h3>Why ECG does not appear?</h3></b-col>
               
            </b-row>
           </b-container>
           </div>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>



  </b-row>
</b-container>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: `
          Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon.Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon.Lorem ipsum dolor sit amet consectetur adipiscing elit urna velit amet tempor egestas fringilla bibendum vel nisl sed dolormsne iste drakon.
        `
      }
    }
  }
</script>


<style>
.card-header {
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    background-color: #fff;
    border-bottom: 0;
    }
.colla  h3{
font-size: 24px;
font-weight: bold;
}
.collbtn{
    width: 40px;
height: 40px;
background-color: #050229;
border-radius: 10px;

}
.collbtn a{
text-decoration: none;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
margin-top: 7px;
}
</style>