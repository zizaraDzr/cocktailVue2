<template>
  <div class="flexConteiner">
    <navbar></navbar>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import Navbar from './navbar/navbar.vue'
  import FooterComponent from './footer/footer.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
      FooterComponent,
    },
    created() {
      console.log(this.$router)
      document.title = 'Cocktail'
    },
  }
</script>
<style lang="scss">
  body {
    height: 100vh;
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #3e3f3a;
    text-align: left;
    background-color: #fff;
  }
  .flexConteiner {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .navbar-brand {
    font-size: 1.6rem;
  }
  .sitename {
    color: white;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
  }
  .sitename span {
    color: #d9534f !important;
    font-weight: 700;
  }
  thead {
    color: white;
  }
  .card {
    position: relative;
  }
  .card .favorite-btn {
    position: absolute;
    right: -18px;
    top: 18px;
    background-color: white;
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    font-size: 22px;
    padding-left: 10px;
    color: #29abe0;
  }

  .is-favorite {
    background-color: #29abe0 !important;
    color: white !important;
  }

  h1 {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
  }
  .card-title {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 1.2rem;
  }
  .btn {
    width: 100%;
  }
  footer p {
    color: white !important;
  }
</style>
