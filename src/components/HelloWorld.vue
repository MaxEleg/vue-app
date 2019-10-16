<template>
  <div class="hello">
    <h1>{{ formattedMsg }}</h1>
  </div>
</template>

<script>/* eslint-disable no-console */

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  watch : {
  },
  computed:{
    formattedMsg: function(){
      return 'MAXOU ' + this.msg;
    }
  },
  created: function(){
    console.log('composant created morray')
  },
  mounted: function(){
    console.log('composant mounted morray')
  },
  updated: function(){
    console.log('composant updated morray')
  },
  destroyed: function(){
    console.log('composant destroyed morray')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
