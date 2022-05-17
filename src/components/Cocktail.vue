<template>
  <div>
    <h1 class="text-center">{{ heading }}</h1>
    <ErrorMessages
      v-if="isShowMessages"
      :message="message"
      :isShowMessages.sync="isShowMessages"
    ></ErrorMessages>
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

      <div class="col-12 mt-5 results-wrapper">
        <h1 class="text-center">
          Results: <span id="total">{{ countCocktail }}</span>
        </h1>

        <div id="results" class="mt-5 row">
          <Result
            v-for="item in cocktails"
            :key="item.idDrink"
            :cocktail="item"
          ></Result>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '@/API/API.js'
  import ErrorMessages from '@/components/ErrorMessages.vue'
  import Result from '@/components/Result.vue'
  export default {
    name: 'CocktailComponents',
    components: {
      ErrorMessages,
      Result,
    },
    props: {
      heading: {
        type: String,
      },
    },
    data() {
      return {
        searchCocktails: 'vodka',
        isShowMessages: false,
        message: null,
        cocktails: [],
      }
    },
    computed: {
      countCocktail() {
        return this.cocktails.length
      },
    },
    methods: {
      async getCocktailsByName(e) {
        this.cocktails = []
        this.isShowMessages = false
        e.preventDefault()
        if (!this.searchCocktails) {
          this.isShowMessages = true
          this.message = 'Заполните поле'
          return
        }
        let cocktails = new API()
        let { contails } = await cocktails.getCoctailsName(this.searchCocktails)
        if (!contails.drinks) {
          this.isShowMessages = true
          this.message = 'Ничего не найдено'
          return
        }
        this.cocktails.push(...contails.drinks)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
