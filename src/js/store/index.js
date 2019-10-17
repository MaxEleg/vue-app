import * as Vuex from 'vuex';

const createStore = ()=> new Vuex.Store({
  state: {
    todos: [{text: 'Ma premiere todo', status: 'open'}]
  },
  mutations: {
    addTodo (state, payload) {
      state.todos.push(payload)
    }
  },
  getters: {
    getTodos: state=>state.todos
  },
  actions: {
    addTodo: function ({commit}, payload) {
      commit('addTodo', payload)
    }
  }
});

export {createStore};