import Vue from 'vue'
import VueRouter from 'vue-router'
import Cocktail from '@/components/Cocktail.vue'
import Ingredient from '@/components/Ingredient.vue'
import Category from '@/components/Category.vue'
import Alcohol from '@/components/Alcohol.vue'
import Favorites from '@/components/Favorites.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/Cocktail', name: 'Cocktail', component: Cocktail, props: { heading: 'Search Cocktails by Name' } },
    { path: '/Ingredient', name: 'Ingredient', component: Ingredient, props: { heading: 'Search Cocktails by Ingredient' } },
    { path: '/Category', name: 'Category', component: Category, props: { heading: 'Search Cocktails by Category' } },
    { path: '/Alcohol', name: 'Alcohol', component: Alcohol, props: { heading: 'Search Cocktails by Alcohol / Non Alcohol' } },
    { path: '/Favorites', name: 'Favorites', component: Favorites, props: { heading: 'My Favorites' } },
  ],
})

export default router