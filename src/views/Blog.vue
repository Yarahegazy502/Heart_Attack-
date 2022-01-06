<template>
    <div>
    <Things/>
    <Blogg/>
    </div>
</template>

<script>
import Things from '@/components/Blog/Things.vue'
import Blogg from '@/components/Blog/Blogg.vue'
export default {
    name:"Blog",
    components: {Things, Blogg,  },
}
</script>

<style>

</style>