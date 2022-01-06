<template>
    
<div class="about">
     <AboutA/>
    <About_work/>
    <Meet/>
</div>
</template>

<script>
import AboutA from '@/components/About/AboutAttrack.vue'
import About_work from '@/components/About/About_work.vue'
import Meet from '@/components/About/Meet.vue'
export default {
    name: 'About',
  components: {
    AboutA, About_work, Meet
  }
}
</script>