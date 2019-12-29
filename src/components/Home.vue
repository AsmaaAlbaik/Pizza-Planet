<template>
  <div class="row">
    <div class="col-sm-12 text-center" id="home">
      <div class="background">
        <h1>welcome to Pizze planet</h1>
        <h2>Feeling Hungry ?</h2>
        <button class="btn btn-success">Let's Order!</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  #home {
    background: url('../../src/assets/img/pizza.jpg');
    height: 600px;
    padding: 10%;
    .background {
      background: #eee;
      opacity: 0.8;
      max-width: 80%;
      margin: 0 auto;
      padding: 20px 0;
    }
    h1, h2 {
      margin: 6%;
    }
  }
</style>
