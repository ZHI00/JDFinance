<template>
  <div id="app">
    <heador></heador>
    <router-view/>
    <navbar></navbar>
  </div>
</template>

<script>
import heador from './public/header';
import navbar from './public/navbar';
export default {
  name: 'app',
  components:{
    heador,
    navbar
  }
}
</script>
