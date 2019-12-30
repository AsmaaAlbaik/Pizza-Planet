<template>
  <header class="row">
    <nav class="navbar navbar-expand-sm bg-light">
      <a href="" class="navbar-brand">PIZZA PLANET</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" href="#">home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/menu" class="nav-link" href="#">menu</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  margin-bottom: 20px;
  .navbar-brand {
    font-size: 1.5rem;
  }
}
</style>
