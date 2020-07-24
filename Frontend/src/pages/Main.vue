<template>
  <div class="main-page">
    Hello VUE
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MainPage',
});
</script>

<style lang="scss" scoped>
  .main-page {
    height: 100%;
    display: grid;
    place-items: center;
  }
</style>