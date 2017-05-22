<template>
  <div id="app">
    <oheader></oheader>
    <addList v-if="!$store.state.listFlag"></addList>
    <noteMain v-if="!$store.state.listFlag"></noteMain>
    <noteList v-if="$store.state.listFlag"></noteList>
    <popUp v-if="$store.state.popupFlag"></popUp>
  </div>
</template>

<script>
  import oheader from './components/header.vue'
  import addList from './components/add-list.vue'
  import noteList from './components/note-list.vue'
  import noteMain from './components/note-main.vue'
  import popUp from './components/pop-up.vue'

  export default {
    name: 'app',
    components: {
      oheader,
      addList,
      noteList,
      noteMain,
      popUp
    },
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  body {
    overflow: scroll;
  }
  a {
    text-decoration: none;
  }
  ul, ol, li {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  #app {
    margin-bottom: 50px;
  }
</style>
