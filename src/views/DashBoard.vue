<template>
  <Navbar></Navbar>
  <!-- 沒有加入router-view的話，是無法看到底下的巢狀路由 -->
  <div class="container-fluid mt-3 position-relative">
    <ToasterMessages></ToasterMessages>
    <router-view/>
  </div>
</template>
<script>
// 引入跨元件溝通的套件，讓底下的都可以使用。也可以在main.js引入(全域都可以使用)
import emitter from '@/methods/emitter';
import ToasterMessages from '@/components/ToasterMessages.vue';
import Navbar from '../components/NavBar.vue';

export default {
  components: {
    Navbar,
    ToasterMessages,
  },
  provide() {
    return {
      emitter,
    };
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
