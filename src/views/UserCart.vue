<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="header">
    <div class="slogan">
      <h1>日本の文化との出会いあなた</h1>
      <p>Choose the one you wanna experience in Japan</p>
      <div>お得</div>
    </div>
  </div>
  <leftNav @changeType="changeProductType"></leftNav>
  <div class="search">
    <div>
      <input type="search" placeholder="輸入關鍵字" v-model="searchWord">
      <button type="button" @click="searchProduct">搜尋</button>
    </div>
    <select name="" id="">
      <option value="">價錢(低到高)</option>
      <option value="">價錢(高到低)</option>
    </select>
  </div>
  <div class="product">
    <div class="item" v-for="product in tempProducts" :key="product.id">
      <div class="pic">
        <img :src="product.imageUrl" alt="">
        <i></i>
      </div>
      <div class="txt">
        <a href="" style="text-decoration: none;" @click.prevent=""><h4>{{ product.title }}</h4></a>
        <div>
          <span>原價{{ product.origin_price}}</span>
          <span>特價{{ product.price }}</span>
        </div>
      </div>
    </div>
  </div>
<Pagination :pages="pagination" style="margin-top: 50px"></Pagination>
<Footer></Footer>
<Loading-now :active="isLoading"></Loading-now>
</template>
<style>
@import '../assets/cart';
</style>
<script>
import leftNav from '../components/LeftNav.vue';
import Pagination from '../components/PagiNation.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    leftNav,
    Pagination,
    Footer,
  },
  data() {
    return {
      products: [],
      tempProducts: [],
      pagination: {},
      isLoading: false,
      searchWord: '',
    };
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        console.log(res);
        this.products = res.data.products;
        this.tempProducts = res.data.products;
        this.pagination = res.data.pagination;
      });
    },
    searchProduct() {
      this.tempProducts = this.tempProducts.filter((item) => item.title.match(this.searchWord));
      this.searchWord = '';
    },
    changeProductType(type) {
      if (type === null) {
        this.tempProducts = this.products;
      } else {
        this.tempProducts = this.products.filter((item) => item.category === type);
      }
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
