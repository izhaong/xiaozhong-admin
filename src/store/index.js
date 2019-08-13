import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    sidebar: true
  },
  getters: {
    token: state => state.token,
    sidebar: state => state.sidebar
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    // user login
    login ({ commit }, userInfo) {
      // const { username, password } = userInfo
      const pramas = {
        key: '00d91e8e0cca2b76f515926a36db68f5',
        phone: 'admin',
        passwd: '123456'
      }
      return new Promise((resolve, reject) => {
        login(pramas).then(res => {
          const { data } = res
          commit('SET_TOKEN', data.key)
          setToken(data.key)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
})
