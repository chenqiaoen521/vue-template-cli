import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = (resolve) => {
  import('components/main/main').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main
    }
  ]
})
