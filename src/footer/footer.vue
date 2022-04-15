<template>
  <footer class="p-4 footerBg">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-4">
          <h1 class="sitename">PERFECT<span>COCKTAIL</span></h1>
        </div>
        <div class="col-md-4">
          <p class="text-right">All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footerComponent',
  }
</script>

<style lang="scss">
  @import '../styles/index';
  .footerBg {
    background: $dark;
    margin-top: auto;
  }
</style>
