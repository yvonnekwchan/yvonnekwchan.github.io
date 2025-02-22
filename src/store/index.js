import { createStore } from 'vuex';

export default createStore({
  state: {
    username: localStorage.getItem('username') || null,
    isAdmin: localStorage.getItem('isAdmin') || null,
  },
  mutations: {
    setIsAdmin(state, isAdmin) {
      state.isAdmin = isAdmin;
      if (isAdmin) {
        localStorage.setItem('isAdmin', isAdmin);
      } else {
        localStorage.removeItem('isAdmin');
      }
    }
  },
  actions: {
    updateIsAdmin({ commit }, isAdmin) {
      commit('setIsAdmin', isAdmin);
    }
  },
  getters: {
    isAdmin: state => state.isAdmin
  }
});