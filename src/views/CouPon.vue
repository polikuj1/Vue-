<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="text-end">
    <button type="button" class="btn btn-primary" @click="openCouponModal(true)">
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
          <button class="btn btn-outline-primary btn-sm" @click="openCouponModal(false, data)"
          >編輯</button>
          <button class="btn btn-outline-danger btn-sm" @click="deleteCoupon(data.id)"
          >刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<CouponModal ref="coupon" :Coupon="couponData" @coupon-emit="addCoupon"></CouponModal>
<Pagination :pages="pagination"></Pagination>
<Loading-now :active="isLoading"></Loading-now>
</template>
<script>
import CouponModal from '../components/CouponModal.vue';
import Pagination from '../components/PagiNation.vue';

export default {
  components: {
    CouponModal,
    Pagination,
  },
  data() {
    return {
      isLoading: false,
      couponData: {},
      renderCoupon: [],
      isNew: false,
      pagination: {},
    };
  },
  methods: {
    openCouponModal(status, data) {
      this.couponData = {
        code: 'test',
        is_enabled: 0,
      };
      console.log(data, status);
      if (!status) {
        this.couponData = data;
      }
      if (status) {
        this.couponData = {};
      }
      this.isNew = status;
      const couponComponent = this.$refs.coupon;
      couponComponent.showModal();
    },
    getCoupon() {
      this.isLoading = true;
      const api1 = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.$http.get(api1).then((res) => {
        this.isLoading = false;
        console.log(res);
        this.pagination = res.data.pagination;
        this.renderCoupon = res.data.coupons;
      });
    },
    addCoupon(order) {
      this.isLoading = true;
      this.couponData = order;
      this.couponData.code = 'test';
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let apiMethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.couponData.id}`;
        apiMethod = 'put';
      }
      this.$http[apiMethod](api, { data: this.couponData }).then((res) => {
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
