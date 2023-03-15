<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="container-fluid">
    <div class="text-left p-3">
      <p>&gt;</p>
      <a href="#" @click.prevent="this.$router.push('/user/cart')"><p>日本旅遊</p></a>
      <p>{{ product.category}}</p>
      <p>{{ product.title }}</p>
    </div>
    <div class="row">
      <div class="col-6 p-5">
        <div class="pic">
          <img :src="product.imageUrl" alt="">
        </div>
      </div>
      <div class="col-3 p-5">
        <div class="intro">
          <h4>{{ product.title }}</h4>
          <p v-if="product.description">{{ product.description }}</p>
          <p v-else>商品介紹</p>
          <div class="price">
            <p>原價<i class="bi bi-currency-dollar"></i>{{ product.origin_price }} 元</p>
            <p>特價<i class="bi bi-currency-dollar"></i>{{ product.price }}元</p>
          </div>
        </div>
        <form action="">
          <label for="num">預計人數</label>
          <input type="number" id="num" min="1" max="10" v-model="qty">
          <div>
            <button type="button" @click="addCart">訂購</button>
          </div>
        </form>
      </div>
    </div>
    <div class="cart" v-if="cart.carts.length">
      <a href="#" @click.prevent="this.$router.push('/user/cartOrder')">
        <i class="bi bi-cart3">{{ cart.carts.length }}</i></a>
    </div>
  </div>
  <Loading-now :active="isLoading"></Loading-now>
</template>
<style>
@import '../assets/userProduct.css';
</style>
<script>
export default {
  inject: ['emitter'],
  components: {

  },
  data() {
    return {
      product: {},
      isLoading: false,
      id: '',
      qty: 0,
      cart: {},
    };
  },
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        console.log(res);
        this.cart = res.data.data;
      });
    },
    getProduct() {
      this.isLoading = true;
      const id = this.$route.params.productId;
      this.id = id;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        console.log(res);
        this.product = res.data.product;
      });
    },
    addCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: this.id,
        qty: this.qty,
      };
      this.$http.post(api, { data: cart })
        .then((res) => {
          console.log(res);
          this.getCart();
          this.emitter.emit('push-msg', {
            style: 'success',
            title: '已經加入購物車',
          });
        });
    },
  },
  // mounted() {
  //   this.emitter.on('push-id', (id) => {
  //     console.log(id.id);
  //   });
  // },
  created() {
    this.getProduct();
    this.getCart();
  },
};
</script>
