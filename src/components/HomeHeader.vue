<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="header" ref="header">
      <div class="logo">
        <a href=""><h4>Japanese Drama Explore</h4></a>
      </div>
      <nav class="menu">
        <a href="#" @click.prevent="this.$router.push('/user/home')">首頁</a>
        <a href="#" @click.prevent="this.$router.push('/user/about')">關於我們</a>
        <a href="#" @click.prevent="this.$router.push('/user/cart')">追劇行程</a>
        <a href="#">聯絡方式</a>
      </nav>
      <button type="button" @click="openNav"><i class="bi bi-list"></i></button>
      <div class="shop-cart">
        <!-- <p>購物車</p> -->
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
    openNav() {
      const menu = document.querySelectorAll('.menu a');
      const logo = document.querySelector('.logo');
      menu.forEach((item) => {
        item.classList.toggle('responsive');
        if (item.classList.contains('responsive')) {
          logo.style.display = 'none';
        } else {
          logo.style.display = 'block';
        }
      });
    },
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
