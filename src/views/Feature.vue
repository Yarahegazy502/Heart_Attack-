<template>
    <div>
    <afeature/>
    <Feature1/>
    <Feature2/>
    <Feature1 />
    <Feature2 />
    <Testimonial/>
    </div>
</template>

<script>
import Afeature from '@/components/Features/Afeature.vue'
import Feature1 from '@/components/Features/Feature1.vue'
import Feature2 from '@/components/Features/Feature2.vue'
import Testimonial from '@/components/Features/Testimonial.vue'
export default {
    components: { Afeature, Feature1,Feature2,Testimonial },
}
</script>

<style>

</style>