import * as types from './mutation-types'
export const getAge = function ({commit, state}, {list, index}) {
  commit(types.SET_AGE, index)
}

