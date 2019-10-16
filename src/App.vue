<template>
  <div id="app">
    <HelloWorld v-bind:msg="message" />
    <input v-model="message" placeholder="modifiez-moi">
    <p>Le message est : {{ message }}</p>
    <todo-list />
    <todo-item />
    <add-todo />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'app',
  components: {
    TodoList,
    TodoItem,
    AddTodo,
    HelloWorld,
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
