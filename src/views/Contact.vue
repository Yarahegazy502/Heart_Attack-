<template>
    <div>
      <Form/>
      <collapse/>
    </div>
    

</template>

<script>
import Form from "@/components/Contact/form.vue"
import Collapse from '../components/Contact/collapse.vue'

export default {
    name: 'Contact',
  components: {
    Form,
    Collapse,
  }
}
</script>
