<template>
  <header class="row">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <router-link :to="{name: 'homeLink'}" tag="li" class="nav-item">
          <a class="nav-link" href="#">home</a>
        </router-link>
        <router-link :to="{name: 'aboutLink'}" tag="li" class="nav-item">
          <a class="nav-link" href="#">About</a>
        </router-link>
        <router-link :to="{name: 'menuLink'}" tag="li" class="nav-item">
          <a class="nav-link" href="#">menu</a>
        </router-link>
          <router-link :to="{name: 'adminLink'}" tag="li" class="nav-item">
          <a class="nav-link" href="#">admin</a>
        </router-link>
      </ul>
    </nav>
  </header>
</template>
