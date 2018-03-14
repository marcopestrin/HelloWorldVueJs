<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="row">
          <!--LOGO NELL'HEADER-->
          <div class="col-md-1">
            <img src="./assets/logo.png" />
          </div>
          <!--MENU PRINCIPALE-->
          <div class="col-md-10">
            <nav class="navbar">
                <a v-bind:class="{ active: showFirstPage }" v-on:click="showFirstPage = !showFirstPage, showSecondPage = false, showThirdPage = false" class="navbar-brand" href="#/">First</a>
                <a v-bind:class="{ active: showSecondPage }" v-on:click="showSecondPage = !showSecondPage, showThirdPage = false, showFirstPage = false" class="navbar-brand" href="#/secondPage">Second</a>
                <a v-bind:class="{ active: showThirdPage }" v-on:click="showThirdPage = !showThirdPage, showSecondPage = false, showFirstPage = false" class="navbar-brand" href="#/thirdPage">Third</a>
            </nav>
          </div><!--col-md-10-->
          <div class="col-md-1">
            <dropdown :data="dropdownData" :cbChanged="changed"></dropdown>
          </div>
        </div><!--row-->
      </div>
    </header>
    <router-view/>
    <!--FOOTER DOPO IL CONTENUTO PAGINA-->
    <footer>
      Created by Marco Pestrin with VueJs
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showFirstPage:false,
      showSecondPage:false,
      showThirdPage:false,
      dataData:false,
      dropdownData: [{
        label: 'profile',
        value: 1
      }, {
        label: 'setting',
        value: 2
      }, {
        label: 'logout',
        value: 2
      }]
    }
  },
  methods: {
    changed (selected) {
      console.log(selected)
    }
  }
}
</script>

<style lang="scss">
  @import 'assets/scss/main';
</style>
