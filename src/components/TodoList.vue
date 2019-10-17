<template>
  <div>
    <div v-for="(todo, index) in todos" v-bind:key="index">
      <todo-item v-bind:todo="todo"/>
    </div>
  </div>
</template>

<script>
  import TodoItem from './TodoItem';

  /* eslint-disable no-console */
  export default {
    name: "todo-list",
    mounted(){
      console.log(this.$store)
    },
    computed:{
      todos: function(){
        return this.$store.getters.getTodos
      }
    },
    components:{
      TodoItem
    }
  }
</script>

<style scoped>

</style>