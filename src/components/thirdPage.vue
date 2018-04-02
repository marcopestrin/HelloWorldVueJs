<template>
   <div class="content" id='thirdPage'>
     <h1>{{ msg }}</h1>
       {{ $route.params.name }}
   </div>
</template>
<script>
export default {
  name: 'thirdPage',
  data () {
    return {
      msg: 'terza pagina'
    }
  }
}
</script>
