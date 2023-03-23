<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="header" ref="header">
    <div class="logo">
      <a href=""><h4>Japanese Drama Explore</h4></a>
    </div>
    <nav class="menu">
      <a href="#" @click.prevent="this.$router.push('/user/cart')">首頁</a>
      <a href="#">關於我們</a>
      <a href="#">追劇行程</a>
      <a href="#">聯絡方式</a>
    </nav>
    <div class="shop-cart">
      <p>商店</p>
      <i class="bi bi-cart3"></i>
    </div>
  </div>
</template>
<style>
@import '../assets/homeHeader.css';
</style>
<script>
export default {
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    moveDown() {
      console.log(123);
      window.scroll(0, 600);
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const Y = window.scrollY;
      const nav = this.$refs.header;
      if (Y > 8) {
        nav.style.background = 'rgb(0, 0, 0, .5)';
        nav.style.top = 0;
      } else {
        nav.style.background = 'transparent';
        nav.style.top = '10px';
      }
    });
  },
  created() {

  },
};
</script>
