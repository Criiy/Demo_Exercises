<template>
  <div id="app">
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  import login from '../src/components/login'

  export default {
    name: 'App',
    components: {
      login
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  @import "assets/global";
  body{
    background: $background;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
