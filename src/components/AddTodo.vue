<template>
  <div class="container">
    <input v-model="newTodo.text"/>
    <input v-model="newTodo.status"/>
    <button v-on:click="createTodo(newTodo)">NOUVELLE TODO</button>
  </div>
</template>

<script>
  export default {
    name: "add-todo.vue",
    data: ()=>{
      return {
        newTodo: {
          text: '',
          status: ''
        }
      }
    },
    methods:{
      createTodo(newTodo){
        newTodo = JSON.parse(JSON.stringify(newTodo));
        this.$store.dispatch('addTodo', newTodo)
      }
    }

  }
</script>

<style scoped>
  .container{
    margin-top: 70px;
  }
</style>