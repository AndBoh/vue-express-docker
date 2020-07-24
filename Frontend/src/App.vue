<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>

<style lang="scss" scoped>
  #app {
    height: 100vh;
    width: 100vw;
  }

  * {
    box-sizing: border-box;
  }
</style>

<style lang="scss">
  @import "./scss/reset.css";
</style>