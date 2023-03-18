<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="container-fluid">
    <div class="row">
      <!-- 左邊區塊 -->
      <div class="col-md-8 mt-5 p-5">
        <h2>購物車清單</h2>
        <table class="table">
          <thead>
            <tr>
              <th>產品縮圖</th>
              <th>產品名稱</th>
              <th>單價</th>
              <th>總價</th>
              <th>人數</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td style="width: 300px; height: 200px;">
                <img :src="item.product.imageUrl" alt="產品縮圖" style="width: 100%; height: 100%;">
              </td>
              <td>{{ item.product.title }}</td>
              <td>${{ item.product.price }}</td>
              <td>${{ item.product.price * item.qty }}</td>
              <td>
                <label for="qty"></label>
                <input type="number" name="" id="qty" min="0"
                v-model="item.qty" style="width: 50px;" @change="updateCart(item)">
              </td>
              <td><button class="btn btn-danger"
                @click.prevent="deleteProduct(item.id)">刪除</button>
              </td>
            </tr>
            <tr class="text-center" v-if="!cart.length">
              <div class="mt-5">購物車沒有東西了，快去購物吧^^</div>
            </tr>
            <!-- 其他產品 -->
          </tbody>
        </table>
      </div>
      <!-- 右邊區塊 -->
      <div class="col-md-4 mt-5 p-5 border" style="height: 480px;">
        <h2>總金額</h2>
        <div class="panel panel-default">
          <div class="panel-body">
            <p>總金額: ${{ price.total }}</p>
            <div class="form-group">
              <label for="coupon-code">優惠碼</label>
              <input type="text" class="form-control" id="coupon-code" style="width: 250px;"
              v-model="coupon_code">
              <p style="color: blue;" v-if="price.total !== price.final_total">已經套用優惠碼</p>
              <button class="btn btn-secondary" @click="useCouponCode"
              style="margin-top: 10px;" :disabled="!cart.length">套用</button>
            </div>
            <p style="margin-top: 20px;" v-if="price.total !== price.final_total">
              折扣後: ${{ Math.floor(this.price.final_total) }}
            </p>
            <button class="btn btn-success btn-lg btn-block mt-5"
            @click="moveToForm" :disabled="!cart.length">下一步</button>
            <a href="#" class="btn btn-primary btn-lg btn-block mt-5"
            style="margin-left: 30px;" @click.prevent="this.$router.push('/user/cart')">返回購物頁面</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Form v-if="form_open" @moveTop="moveToTop"></Form>
  <Loading-now :active="isLoading"></Loading-now>
</template>
<style>
@import '../assets/cartOrder.css';
</style>
<script>
import Form from '../components/UserForm.vue';

export default {
  components: {
    Form,
  },
  data() {
    return {
      cart: {},
      price: {},
      isLoading: false,
      coupon_code: '',
      form_open: false,
    };
  },
  methods: {
    useCouponCode() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(api, { data: coupon }).then((res) => {
        console.log(res);
        this.getCart();
      });
    },
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product.id,
        qty: item.qty,
      };
      this.$http.put(api, { data: cart }).then((res) => {
        console.log(res);
        this.getCart();
      });
    },
    deleteProduct(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api).then((res) => {
        this.isLoading = false;
        console.log(res);
        this.getCart();
      });
    },
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        console.log(res);
        this.cart = res.data.data.carts;
        this.price.total = res.data.data.total;
        this.price.final_total = res.data.data.final_total;
      });
    },
    // handleScroll(e) {
    //   const winHeight = e.target.scrollTop || document.documentElement.scrollTop;
    //   console.log(winHeight);
    // },
    moveToForm() {
      this.form_open = true;
      setTimeout(() => {
        window.scroll(0, 650);
      }, 300);
    },
    moveToTop() {
      this.form_open = false;
      window.scroll(0, 0);
    },
  },
  created() {
    this.getCart();
  },
  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll, true);
  // },
};
</script>
