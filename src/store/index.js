import { createStore } from 'vuex';

export default createStore({
  state: {
    username: localStorage.getItem('username') || null
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
      if (username) {
        localStorage.setItem('username', username);
      } else {
        localStorage.removeItem('username');
      }
    }
  },
  actions: {
    updateUsername({ commit }, username) {
      commit('setUsername', username);
    }
  },
  getters: {
    username: state => state.username
  }
});