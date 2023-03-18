<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#"
          @click.prevent="this.$router.push('/user/cart')">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
        </ul>
    </div>
  </nav>
  <ToasterMessages></ToasterMessages>
  <router-view></router-view>
  <Footer></Footer>
</template>
<script>
import emitter from '@/methods/emitter';
import ToasterMessages from '@/components/ToasterMessages.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    ToasterMessages,
    Footer,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
