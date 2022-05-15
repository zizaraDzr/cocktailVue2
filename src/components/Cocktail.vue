<template>
  <div>
    <h1 class="text-center">{{ heading }}</h1>
    <div class="row">
      <div class="col-12">
        <form action="#" id="search-form" @submit="getCocktailsByName">
          <div class="form-group">
            <label for="search">Cocktail Name:</label>
            <input
              v-model="searchCocktails"
              type="text"
              class="form-control"
              id="search"
              placeholder="Eg. Margarita"
            />
          </div>
          <div class="form-group pt-3">
            <input type="hidden" id="type" value="name" />

            <button @click="getCocktailsByName" class="btn btn-success d-block">
              Get Cocktails
            </button>
          </div>
        </form>
      </div>

      <div class="col-12 mt-5 results-wrapper" style="display: none">
        <h1 class="text-center">Results: <span id="total"></span></h1>
        <div id="results" class="mt-5 row"></div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/API/API.js";
  export default {
    name: 'CocktailComponents',
    props: {
      heading: {
        type: String,
      },
    },
    data() {
      return {
        searchCocktails: 'vodka'
      }
    },
    methods: {
       async getCocktailsByName (e) {
         e.preventDefault();
         if (!this.searchCocktails) {
           console.log('Ничего не написано')
           return
         }
        let cocktails = new API
        let { contails } = await cocktails.getCoctailsName(this.searchCocktails)
        console.log(contails)
      }
    }
  }
</script>

<style lang="scss" scoped></style>
