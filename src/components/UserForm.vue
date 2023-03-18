<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <VForm @submit="addOrder">
    <h2>訂購人資料</h2>
    <div class="user">
      <p>姓名</p>
      <VField type="name" name="name" :rules="validateName" v-model="form.user.name"/>
      <ErrorMessage name="name"></ErrorMessage>
    </div>
    <div class="user">
      <p>E-mail</p>
      <VField type="email" name="email" :rules="validateEmail" v-model="form.user.email"/>
      <ErrorMessage name="email"></ErrorMessage>
    </div>
    <div class="user">
      <p>手機號碼</p>
      <VField type="phone" name="phone" :rules="validatePhone"
      placeholder="0912-345678" v-model="form.user.tel"/>
      <ErrorMessage name="phone"></ErrorMessage>
    </div>
    <div class="user">
      <p>地址</p>
      <VField type="address" name="address" :rules="validateAddress" v-model="form.user.address"/>
      <ErrorMessage name="address"></ErrorMessage>
    </div>
    <div class="user">
      <p>留言</p>
      <VField type="text" name="text" v-model="form.user.message"/>
    </div>
    <div class="button">
      <p @click="move">取消</p>
      <button>送出</button>
    </div>
  </VForm>
</template>
<style>
@import '../assets/userForm.css';
</style>
<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    move() {
      this.$emit('moveTop');
    },
    addOrder(value) {
      console.log('驗證通過發送', value);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(api, { data: order }).then((res) => {
        console.log(res);
        if (res.data.success) {
          const id = res.data.orderId;
          this.$router.push(`/user/checkout/${id}`);
        }
      });
      // -NQmu_sbOgo7FLgVwYoN
    },
    validateAddress(value) {
      if (!value) {
        return '請填寫地址';
      }
      return true;
    },
    validatePhone(value) {
      if (!value) {
        return '手機號碼不得為空';
      }
      const regex = /\d{4}-\d{6}/;
      if (!regex.test(value)) {
        return '手機號碼長度不符合';
      }
      return true;
    },
    validateName(value) {
      if (!value) {
        return '名字不得為空';
      }
      return true;
    },
    validateEmail(value) {
      if (!value) {
        return '請輸入信箱';
      }
      const regex = /^[A-Z0-9._%+-]+@[\w]+\.[\w.]+$/i;
      if (!regex.test(value)) {
        return '信箱不符合格式';
      }
      return true;
    },
  },
};
</script>
