<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <router-view name="ordering-guide"></router-view>
        </div>
        <div class="col-md-4 col-sm-12">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-md-4 col-sm-12">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
    <div class="container">
      <app-footer></app-footer>
    </div>

    </div>
</template>

<script>
import AppHeader from './components/Header';
import AppFooter from './components/Footer';

export default {
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<style lang="scss">

</style>
