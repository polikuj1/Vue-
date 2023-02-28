<template>
  <Navbar></Navbar>
  <!-- 沒有加入router-view的話，是無法看到底下的巢狀路由 -->
  <div class="container-fluid">
    <router-view/>
  </div>
</template>
<script>
import Navbar from '../components/NavBar.vue';

export default {
  components: {
    Navbar,
  },
  created() {
    // 先將token取出來，中間那個hexToken名稱是可以替換成你要取的token名字
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // 用axios的方法在header夾帶token
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api)
      .then((res) => {
        // console.log(res);
        if (!res.data.success) {
          this.$router.push('/login');
        }
      });
  },
};
</script>
