<template>
  <div class="home">
    <b-container>
        <!--<Carsoul/>-->
        <Advanced/>
        <Discover/>
        <features/>
        <Asking/>
        <Works/>
        <Facts/>
        <Blog/>
        <Healthy/>
    </b-container>
  </div>
</template>

<script>
import Advanced from '@/components/Home/Advanced.vue'
import Discover from '@/components/Home/Discover.vue'
import features from '@/components/Home/Features.vue'
import Asking from '@/components/Home/Asking.vue'
import Works from '@/components/Home/Works.vue'
import Blog from '@/components/Home/Blog.vue'
import Healthy from '@/components/Home/Healthy.vue'
import Facts from '@/components/Home/Facts.vue'
// import Carsoul from '../components/Home/Carsoul.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    Advanced,Discover,features,Asking,Works,Blog,Healthy,Facts,
    // Carsoul,
  }
}
</script>
