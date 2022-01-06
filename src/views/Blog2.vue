<template>
    <div>
        <news/>
        <art/>
        <healthy/>
    </div>

</template>

<script>
import news from '../components/Blog2/news.vue'
import art from '../components/Blog2/art.vue'
import Healthy from '../components/Home/Healthy.vue'
export default {
  components: { news, art, Healthy},
    
}
</script>


<style>

</style>