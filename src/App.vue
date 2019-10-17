<template>
  <div id="app">
    <todo-list />
    <todo-item />
    <add-todo />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'app',
  components: {
    TodoList,
    TodoItem,
    AddTodo,
  },
  data: function () {
    return {
      message: 'LOOL'
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
