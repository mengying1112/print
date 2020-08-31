<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from './components/common/NavMenu'
import Home from './views/Home'
import OverView from './views/OverView'

export default {
  name: 'App',
  components: {
    NavMenu,
    Home,
    OverView
  }
}
</script>

<style>

</style>
