<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <app-admin></app-admin>
    </div>

    <div class="container">
      <app-footer></app-footer>
    </div>

    </div>
</template>

<script>
import AppHeader from './components/Header';
import AppHome from './components/Home';
import AppFooter from './components/Footer';
import AppMenu from './components/Menu';
import AppAdmin from './components/Admin';

export default {
  components: {
    AppHeader,
    AppHome,
    AppFooter,
    AppMenu,
    AppAdmin
  }
}
</script>

<style lang="scss">

</style>
