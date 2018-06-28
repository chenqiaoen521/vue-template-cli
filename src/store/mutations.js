import * as types from './mutation-types'

const mutations = {
  [types.SET_AGE](state, age) {
    state.age = age
  }
}

export default mutations