<template>
  <div id="app">
    <header-bar></header-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar'
export default {
 components: {
   HeaderBar,
 }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #34495e
}
a:hover {
  color: #42b883;
  text-decoration: underline;

}

a.router-link-exact-active {
  text-decoration: underline;
}

/**Router -transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
