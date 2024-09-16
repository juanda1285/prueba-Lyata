import { createMemoryHistory, createRouter } from 'vue-router'


import HomePage from '../views/Home.vue'
import PokeApi from '../views/PokeApi.vue'
import TestAlgorithm from '../views/TestAlgorithm.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/PokeApi', component: PokeApi },
  { path: '/TestAlgorithm', component: TestAlgorithm },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router;