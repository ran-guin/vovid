import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    count: 1,
    messageContexts: [],
    errors: {},
    errorCount: 0,
    logs: []
  },
  mutations: {
    testme (state) {
      console.log('tested')
    },
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

