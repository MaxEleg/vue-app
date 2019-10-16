import * as Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    todos: [{text: 'Ma premiere todo', status: 'open'}]
  },
  mutations: {
    addTodo (state) {
      state.count++
    }
  }
});