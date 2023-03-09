<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="text-end">
    <button type="button" class="btn btn-primary" @click="openCouponModal">
      新增優惠券
    </button>
  </div>
  <table class="table mt-4">
  <thead>
    <tr>
      <th width="200">名稱</th>
      <th width="200">折扣百分比</th>
      <th width="200">到期日</th>
      <th>是否啟用</th>
      <th>編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="data in renderCoupon" :key="data.id">
      <td>{{ data.title }}</td>
      <td>{{ data.percent }}</td>
      <td class="text-right">
        {{ $filters.date(data.due_date) }}
      </td>
      <td>
          <span v-if="data.is_enabled">啟用</span>
          <span v-else>未啟用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm" @click="openCouponModal"
          >編輯</button>
          <button class="btn btn-outline-danger btn-sm" @click="deleteCoupon(data.id)"
          >刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<CouponModal ref="coupon" :Coupon="couponData" @coupon-emit="addCoupon"></CouponModal>
<Loading-now :active="isLoading"></Loading-now>
</template>
<script>
import CouponModal from '../components/CouponModal.vue';

export default {
  components: {
    CouponModal,
  },
  data() {
    return {
      isLoading: false,
      couponData: {},
      isPay: false,
      renderCoupon: [],
    };
  },
  methods: {
    openCouponModal() {
      const couponComponent = this.$refs.coupon;
      couponComponent.showModal();
    },
    getCoupon() {
      this.isLoading = true;
      const api1 = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.$http.get(api1).then((res) => {
        this.isLoading = false;
        console.log(res.data.coupons);
        this.renderCoupon = res.data.coupons;
      });
    },
    addCoupon(order) {
      this.isLoading = true;
      this.couponData = order;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      this.$http.post(api, { data: this.couponData }).then((res) => {
        this.isLoading = false;
        console.log(res);
        this.getCoupon();
      });
    },
    deleteCoupon(id) {
      this.isLoading = true;
      const deleteApi = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;
      this.$http.delete(deleteApi).then((res) => {
        this.isLoading = false;
        console.log(res);
        this.getCoupon();
      });
    },
  },
  created() {
    this.getCoupon();
  },
};
</script>
