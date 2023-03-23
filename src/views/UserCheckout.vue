<template>
  <div class="wrap">
    <h2>確認訂單</h2>
    <div class="item">
      <div>
        <p class="col-6">訂購品項</p>
        <p class="col-3">人數</p>
        <p class="col-3">金額</p>
      </div>
      <div v-for="item in order.products" :key="item.id">
        <p class="col-6">{{ item.product.title }}</p>
        <p class="col-3">{{ item.qty }}</p>
        <p class="col-3 hr">${{ Math.floor(item.final_total) }}</p>
        <div class="total">金額總計: {{ Math.floor(order.total) }}元</div>
      </div>
    </div>
    <form @submit.prevent="payOrder">
      <div class="user">
        <div>
          <h6 class="col-2">姓名:</h6>
          <p>{{ user.name }}</p>
        </div>
        <div>
          <h6 class="col-2">信箱:</h6>
          <p>{{ user.email }}</p>
        </div>
        <div>
          <h6 class="col-2">電話:</h6>
          <p>{{ user.tel }}</p>
        </div>
        <div>
          <h6 class="col-2">地址:</h6>
          <p>{{ user.address }}</p>
        </div>
        <div>
          <h6 class="col-2">付款狀態</h6>
          <p v-if="order.is_paid">已付款</p>
          <p v-else>未付款</p>
        </div>
        <div class="paid-button">
          <button class="btn btn-danger" :disabled="order.is_paid">付款確認</button>
        </div>
      </div>
    </form>
  </div>
</template>
<style>
@import '../assets/userCheckout.css';
</style>
<script>
export default {
  data() {
    return {
      orderId: '',
      order: {},
      user: {},
    };
  },
  methods: {
    payOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(api).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.getOrder();
        }
      });
    },
    getOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(api).then((res) => {
        console.log(res);
        this.order = res.data.order;
        this.user = res.data.order.user;
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
