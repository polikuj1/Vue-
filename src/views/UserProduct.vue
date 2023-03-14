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
            <p>原價{{ product.origin_price }} 元</p>
            <p>特價 {{ product.price }}元</p>
          </div>
        </div>
        <form action="">
          <label for="num">預計人數</label>
          <input type="number" id="num" min="1" max="10">
          <div>
            <button type="button">訂購</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer></Footer>
  <Loading-now :active="isLoading"></Loading-now>
</template>
<style>
@import '../assets/userProduct.css';
</style>
<script>
import Footer from '../components/Footer.vue';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      product: {},
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    const id = this.$route.params.productId;
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
    this.$http.get(api).then((res) => {
      this.isLoading = false;
      console.log(res);
      this.product = res.data.product;
    });
  },
};
</script>
