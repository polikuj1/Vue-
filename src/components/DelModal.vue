<template>
  <div class="modal" tabindex="-1" ref="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">刪除:{{ tempProduct.title}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>你是否確定要刪除<strong>{{ tempProduct.title}}</strong>品項。</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary"
        @click="$emit('delete-product', tempProduct)">刪除</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    product: {
      type: Object,
      default() { return {}; },
    },
  },
  mixins: [modalMixin],
  data() {
    return {
      modal: {},
      tempProduct: {},
    };
  },
  watch: {
    product() {
      this.tempProduct = this.product;
    },
  },
};
</script>
