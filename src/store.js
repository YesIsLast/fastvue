import Vue from 'vue'
import Vuex from 'vuex'
import localStore from 'store' // 浏览器存储

// 全局使用vuex状态管理库
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    FASTVUE_USER_INFO: null, // 登录的用户个人信息
  },
  mutations: {
    // 用户信息
    FASTVUE_USER_INFO(state, params) {
      localStore.set('FASTVUE_USER_INFO', params);
      state.FASTVUE_USER_INFO = params;
    },
  },
  actions: {

  },
  getters: {
    // 登录的个人信息
    FASTVUE_USER_INFO: (state) => {
      return state.FASTVUE_USER_INFO || localStore.get('FASTVUE_USER_INFO')
    },
  }
})

export default store
