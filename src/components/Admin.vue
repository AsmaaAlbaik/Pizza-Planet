<template>
<div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <app-newPizza></app-newPizza>
    </div>
    <div class="col-sm-12 col-md-6">
      <h3>Menu: </h3>
      <table class="table table-hover">
        <thead class="thead thead-default">
          <tr>
            <th>Item</th>
            <th>Delete from Menu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>maghgerita</td>
            <td>
              <button class="btn btn-outline-danger btn-sm">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
        <div class="col-sm-12">
        <h3>Current Orders: </h3>
        <table class="table table-hover">
          <thead class="thead thead-default">
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <div class="order-number">
              <strong><em>Order number: 1</em></strong>
                <button class="btn btn-outline-danger btn-sm">X</button>
            </div>
            <tr>
              <td>maghgerita</td>
              <td>9"</td>
              <td>1</td>
              <td>9.95</td>

            </tr>
          </tbody>
      </table>
    </div>
  </div>

</div>

</template>
<script>
import AppNewPizza from './NewPizza';
export default {
  components: {
    AppNewPizza
  }
}
</script>

