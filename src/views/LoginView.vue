<template>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address
          <input type="email" id="inputEmail" class="form-control"
          placeholder="Email address" required v-model="user.username"/></label>
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password
          <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required v-model="user.password"/></label>
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      // 取用環境變數的資料
      const api = `${process.env.VUE_APP_API}admin/signin`;
      // Vue-axios的使用方法
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            // 採用解構賦值ES6的寫法，
            const { token, expired } = res.data;
            // 設定cookie ，前面為cookie的名稱和要儲存的內容，分號後為到期時間
            document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
            this.$router.push('/dashboard');
          } else {
            console.log(res.data.message);
          }
        });
    },
  },
};
</script>
