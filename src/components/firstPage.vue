<template>
   <div class="content" id='firstPage'>
<<<<<<< HEAD
     <h1>{{ msg}}</h1>
     <h2 class="h2content">{{ ex1 | uppercase}}</h2>
     <a href="#" v-on:click.prevent="goToSectionOne"></a>
     <p>Description of this page</p>
     <div class="container">
       <div class="row">
          <div v-bind:class='compClasses' class="col-md-12 pes-box"></div>
=======
     <h1>{{ msg }}</h1>
     <p>Description of this page</p>
     <div class="container">
       <div class="row">
          <div class="col-md-12 pes-box"></div>
>>>>>>> 4642e16738a2820f24e4d75ed2183bb409ff6557
          <div class="col-md-6 pes-box"></div>
          <div class="col-md-6 pes-box"></div>
          <div class="col-md-4 pes-box"></div>
          <div class="col-md-4 pes-box"></div>
          <div class="col-md-4 pes-box"></div>
       </div>
<<<<<<< HEAD
       <div v-bind:class='compClasses'>
         <span>Pes</span>
       </div>
       <button type="button" class="btn btn-primary" v-on:click="nearby = !nearby">Toggle Nearby</button>
       <button type="button" class="btn btn-primary" v-on:click="available = !available">Toggle Available</button>
=======
>>>>>>> 4642e16738a2820f24e4d75ed2183bb409ff6557
     </div>
   </div>
</template>
<script>
export default {
  name: 'firstPage',
<<<<<<< HEAD
  computed: {
    compClasses: function(){
      return {
        available :this.available,
        nearby: this.nearby
      }
    }
  },
  data () {
    return {
      available: false,
      nearby: true,
      msg: 'Lorem ipsum dolor sit ametdd'
=======
  data () {
    return {
      msg: 'Lorem ipsum dolor sit amet'
>>>>>>> 4642e16738a2820f24e4d75ed2183bb409ff6557
    }
  }
}
</script>
