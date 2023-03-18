<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="col-12">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">新增優惠券</h5>
          </div>
        </div>

        <div class="modal-body">
          <div class="row">
            <div class="col">
              <label for="couponName" class="">優惠券名稱</label>
              <input type="text" name="coupon" id="couponName" required v-model="this.coupon.title">
            </div>
            <div class="col">
              <label for="discount" class="">折扣百分比</label>
              <input type="number" name="coupon" id="discount"
              min="0" step="5" required v-model="this.coupon.percent">
            </div>
          </div>
          <div class="row mt-5">
            <div class="col">
              <label for="expired" class="text-center">優惠券到期時間</label>
              <input type="date" id="expired" class="form-control" v-model="this.expired">
            </div>
          </div>
          <div class="row mt-5">
            <div class="col text-end">
              <input class="form-check-input" type="checkbox"
              id="check1" name="option1" v-model="this.is_enabled">
              <label class="form-check-label">是否啟用此優惠券</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger"
          data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-success"
          data-bs-dismiss="modal" @click="this.$emit('coupon-emit', this.coupon)">儲存</button>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['Coupon'],
  data() {
    return {
      coupon: {
        code: 'test1',
        is_enabled: 0,
      },
      modal: {},
      expired: '',
      is_enabled: false,
    };
  },
  watch: {
    is_enabled() {
      this.coupon.is_enabled = Number(this.is_enabled);
    },
    expired() {
      this.coupon.due_date = Math.floor(new Date(this.expired) / 1000);
      // this.coupon.due_date = Date.parse(this.expired) / 1000結果是一樣的
    },
    Coupon() {
      this.coupon = this.Coupon;
      this.is_enabled = Boolean(this.Coupon.is_enabled);
      // const dateAndTime = new Date(this.coupon.due_date * 1000).toISOString().split('T');
      // [this.expired] = dateAndTime;
    },
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal, { keyboard: true });
  },
};
</script>
