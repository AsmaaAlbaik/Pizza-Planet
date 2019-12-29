<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <!-- <th>#</th> -->
            <th>Size</th>
            <th>Price</th>
            <th>Add to Basket</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in getMenuItems" :key="item.index">
          <tr>
            <td class="d-none">{{ index }}</td>
            <td>
              <strong>{{ item.name }}</strong>
            </td>
          </tr>
          <tr v-for="option in item.options" :key="option.price">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td>
              <button
                class="btn btn-sm btn-outline-success"
                type="button"
                @click="addToBasket(item, option)"
              >
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-12 col-md-6">
      <div v-if="(Basket.length > 0)">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Quantity</th>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in Basket" :key="index">
            <tr>
              <td>
                <button class="btn btn-sm"
                @click="decreaseQuantity(item)">-</button>
                <span>{{ item.quantity }} -</span>
                <button class="btn btn-sm"
                @click="increaseQuantity(item)">+</button>
              </td>
              <td>{{ item.name }} {{ item.size }}</td>
              <td>{{ item.price * item.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <p>Total Order:</p>
        <button class="btn btn-block btn-success">place Order</button>
      </div>
      <div v-else>
        <p>{{ BasketText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BasketText: 'your Basket is Empty!',
      Basket: [],
      getMenuItems: {
        1: {
          name: "Margherita",
          description: "A delicious tomato based pizza topped with mozzarella",
          options: [
            {
              size: 9,
              price: 6.95
            },
            {
              size: 12,
              price: 10.95
            }
          ]
        },
        2: {
          name: "Pepperoni",
          description:
            "A delicious tomato based pizza topped with mozzarella and pepperoni",
          options: [
            {
              size: 9,
              price: 7.95
            },
            {
              size: 12,
              price: 12.95
            }
          ]
        },
        3: {
          name: "Ham and Pineapple",
          description:
            "A delicious tomato based pizza topped with mozzarella, ham and pineapple",
          options: [
            {
              size: 9,
              price: 7.95
            },
            {
              size: 12,
              price: 12.95
            }
          ]
        }
      }
    };
  },
  methods: {
    addToBasket(item, option) {
      this.Basket.push({
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      });
    },
    removeFromBasket(item) {
        this.Basket.splice(this.Basket.indexOf(item),1); //remove one item from array
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.removeFromBasket(item);
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    }
  }
};
</script>
