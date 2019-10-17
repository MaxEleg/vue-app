<template>
  <div v-if="todo">
    <span>{{todo.status}} >> {{todo.text}}</span>
  </div>
</template>

<script>
  /* eslint-disable no-console */

  export default {
    name: "todo-item",
    props:{
      todo: Object
    },
    watch:{
      todo: ()=>{
        console.log('changed')
      }
    }
  }
</script>

<style scoped>

</style>