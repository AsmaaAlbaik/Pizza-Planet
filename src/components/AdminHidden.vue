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
        <tbody v-for="(item) in getMenuItems" :key="item['.key']" >
          <tr>
            <td>{{ item.name }}</td>
            <td>
              <button class="btn btn-outline-danger btn-sm"
                      @click="removeMenuItem(item['.key'])">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
        <div class="col-sm-12">
        <h3>Current Orders: {{ numberOfOrders }}</h3>
        <table class="table table-hover" v-for="(orders, index) in getOrders" :key="orders['.key']">
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
              <strong><em>Order number: {{ index + 1 }}</em></strong>
                <button class="btn btn-outline-danger btn-sm"
                        @click="removeOrderItem(orders['.key'])">X</button>
            </div>
            <tr v-for="orderItems in orders['.value']" :key="orderItems.key">
              <td>{{ orderItems.name }}</td>
              <td> {{ orderItems.size }} </td>
              <td> {{ orderItems.quantity }}</td>
              <td> {{ orderItems.price | currency}} </td>

            </tr>
          </tbody>
      </table>
    </div>
  </div>
</div>

</template>
<script>
import AppNewPizza from './NewPizza';
import { mapGetters } from 'vuex';
import { dbMenuRef, dbOrdersRef } from '../../firebaseConfig';

export default {
  components: {
    AppNewPizza,
  },
  computed: {
    ...mapGetters ([
      'getMenuItems',
      'numberOfOrders',
      'getOrders',
    ])
    // getMenuItems() {
    //   // return this.$store.state.menuItems
    //   return this.$store.getters.getMenuItems
    // },
    // getNumberOfOrders() {
    //   return this.$store.getters.numberOfOrders
    // }
  },
  methods: {
    removeMenuItem (key) {
      dbMenuRef.child(key).remove();
    },
    removeOrderItem (key) {
      dbOrdersRef.child(key).remove();
    }
  },
  beforeRouteLeave: (to, from, next) => {
    if (confirm('Do you logout first?!!')) {
      next();
    } else {
      next(false);
    }
  },
  // beforeRouteEnter: (to, from, next) => {
  //   next(vm => {
  //     alert('Hi '+ vm.name);
  //   });
  // },
}
</script>

