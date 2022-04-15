import Vue from 'vue'
import VueRouter from 'vue-router'
import Cocktail from '@/components/Cocktail.vue'
import Ingredient from '@/components/Ingredient.vue'
import Category from '@/components/Category.vue'
import Alcohol from '@/components/Alcohol.vue'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: '/Cocktail', component: Cocktail },
        { path: '/Ingredient', component: Ingredient },
        { path: '/Category', component: Category },
        { path: '/Alcohol', component: Alcohol }
    ]
  })
export default router