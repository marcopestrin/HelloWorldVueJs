<template>
   <div class="content" id='secondPage'>
     <h1>{{ msg }}</h1>
        {{ $route.params.name }}
   </div>
</template>
<script>
export default {
  name: 'secondPage',
  data () {
    return {
      msg: 'seconda pagina'
    }
  }
}
</script>
