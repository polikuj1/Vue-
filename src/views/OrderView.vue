<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <table class="table mt-4">
    <thead>
      <tr>
        <th width="150">購買時間</th>
        <th width="200">Email</th>
        <th>購買品項</th>
        <th width="150">應付金額</th>
        <th width="100">是否付款
        </th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td class="text-right">

        </td>
        <td class="text-right">

        </td>
        <td>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox"
            id="flexSwitchCheckDefault" v-model="isPay">
            <label class="form-check-label"
            for="flexSwitchCheckDefault"></label>
            <span v-if="isPay">已付款</span>
            <span v-else>未付款</span>
          </div>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openOrderModal"
            >檢視</button>
            <button class="btn btn-outline-danger btn-sm"
            >刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <OrderModal ref="orderModal"></OrderModal>
  <Loading-now :active="isLoading"></Loading-now>
</template>
<script>
import OrderModal from '../components/OrderModal.vue';

export default {
  components: {
    OrderModal,
  },
  data() {
    return {
      isLoading: false,
      orderData: {},
      isPay: false,
    };
  },
  methods: {
    getOrders(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        console.log(res);
        this.orderData = res.data;
      });
    },
    setTimestamp(time) {
      const timeStamp = time;
      console.log(timeStamp);
    },
    openOrderModal() {
      console.log(123);
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal();
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
