<template>
  <div>
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
              <!-- <a class="nav-link" href="index.html" @click="$emit('routing', 'Cocktail')">Cocktail Name</a> -->
              <v-link class="nav-link" href="/">Home</v-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="ingredient.html">Ingredient</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="category.html">Category</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="filter-alcohol.html"
                >Alcohol / Non Alcohol</a
              >
            </li> -->
          </ul>
        </div>
        <div class="dropdown">
          <a href="favorites.html" class="btn btn-danger"> My Favorites </a>
        </div>
      </div>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
import VLink from "./components/VLink.vue";
export default {
  name: "navbarComponents",
  components: {
    VLink,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/index";
@import "../styles/bootstrap.css";
// https://getbootstrap.com/docs/4.0/getting-started/introduction/
.navbarBg {
  background: $dark;
}
.nav-link {
  cursor: pointer;
}
body {
  height: 100vh;
  margin: 0;
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
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
  font-family: "Raleway", sans-serif;
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
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 1.6rem;
}
.card-title {
  font-family: "Raleway", sans-serif;
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