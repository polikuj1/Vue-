<template>
  <div class="modal" tabindex="-1" role="dialog" ref="modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">警告!!</h5>
        <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"> -->
          <!-- <span aria-hidden="true">&times;</span> -->
        <!-- </button> -->
      </div>
      <div class="modal-body">
        <p>用戶資料錯誤或是尚未註冊</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"
        data-dismiss="modal" @click="hideModal">關閉</button>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  mixins: [modalMixin],
  data() {
    return {
      message: '',
      modal: {},
    };
  },
};
</script>
