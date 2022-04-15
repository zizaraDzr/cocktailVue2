<template>
    <nav class="navbar navbar-expand-lg navbar-dark navbarBg">
      <div class="container">
        <a class="navbar-brand text-uppercase" href="index.html">
          <h1 class="sitename">PERFECT<span>COCKTAIL</span></h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <span class="nav-link" @click="$router.push('/Cocktail')">Cocktail Name</span>
            </li>
            <li class="nav-item">
              <span class="nav-link" @click="$router.push('/Ingredient')">Ingredient</span>
            </li>
            <li class="nav-item">
              <span class="nav-link" @click="$router.push('/Category')">Category</span>
            </li>
            <li class="nav-item">
              <span class="nav-link" @click="$router.push('/Alcohol')">Alcohol / Non Alcohol</span>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <a href="favorites.html" class="btn btn-danger"> My Favorites </a>
        </div>
      </div>
    </nav>
</template>

<script>
  export default {
    name: 'navbarComponents',
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index';
  @import '../styles/bootstrap.css';
  // https://getbootstrap.com/docs/4.0/getting-started/introduction/
  .navbarBg {
    background: $dark;
  }
  span.nav-link  {
      display: inline-block;
      cursor: pointer
  }
</style>
