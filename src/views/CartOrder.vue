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
              <th>價格</th>
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
              <td>{{ item.qty }}</td>
              <td><button class="btn btn-danger"
                @click.prevent="deleteProduct(item.id)">刪除</button>
              </td>
            </tr>
            <!-- 其他產品 -->
          </tbody>
        </table>
      </div>
      <!-- 右邊區塊 -->
      <div class="col-md-4 mt-5 p-5">
        <h2>總金額</h2>
        <div class="panel panel-default">
          <div class="panel-body">
            <p>總金額: $250</p>
            <div class="form-group">
              <label for="coupon-code">優惠碼</label>
              <input type="text" class="form-control" id="coupon-code" style="width: 250px;"
              ref="coupon">
            </div>
            <p style="margin-top: 20px;" v-if="true">折扣後: $250</p>
            <button class="btn btn-success btn-lg btn-block mt-5">確認訂購</button>
            <a href="#" class="btn btn-primary btn-lg btn-block mt-5"
            style="margin-left: 30px;" @click.prevent="this.$router.push('/user/cart')">返回購物頁面</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loading-now :active="isLoading"></Loading-now>
</template>
<script>
export default {
  data() {
    return {
      cart: {},
      price: {},
      isLoading: false,
    };
  },
  methods: {
    deleteProduct(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api).then((res) => {
        this.isLoading = false;
        console.log(res);
        this.getCart();
      });
    },
    cal() {
      this.price.final_total = this.price.total * 5;
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
  },
  created() {
    this.getCart();
  },
};
</script>
