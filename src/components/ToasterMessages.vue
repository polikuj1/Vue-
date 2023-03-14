<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0">
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script>
import Toast from '@/components/ToastC.vue';

export default {
  components: { Toast },
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  mounted() {
    // on為監聽的方式來接收資料，push-message為自訂義的名稱，後面是觸發的事件
    // ，自定義一個參數名稱，此參數為從其他元件傳過來的資料
    this.emitter.on('push-messages', (message) => {
      console.log(message);
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
    });
    this.emitter.on('push-msg', (msg) => {
      const { style, title } = msg;
      this.messages.push({ style, title });
    });
  },
};
</script>
