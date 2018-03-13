<template>
   <div class="content" id='firstPage'>
     <h1>{{ msg }}</h1>
     <p>Description of this page</p>
     <div class="container">
       <div class="row">
          <div class="col-md-12 pes-box"></div>
          <div class="col-md-6 pes-box"></div>
          <div class="col-md-6 pes-box"></div>
          <div class="col-md-4 pes-box"></div>
          <div class="col-md-4 pes-box"></div>
          <div class="col-md-4 pes-box"></div>
       </div>
     </div>
   </div>
</template>
<script>
export default {
  name: 'firstPage',
  data () {
    return {
      msg: 'Lorem ipsum dolor sit amet'
    }
  }
}
</script>
