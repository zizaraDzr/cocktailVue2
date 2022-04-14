import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
import routes from './routes'

new Vue({
  // el: '#app',
  created() {
    window.addEventListener('popstate', () => {
      this.currentRoute = window.location.pathname
    })
  },
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    console.log(this.ViewComponent)
    return h(this.ViewComponent)
  }
}).$mount('#app')

