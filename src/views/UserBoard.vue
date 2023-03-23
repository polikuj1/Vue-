<template>
  <Header></Header>
  <ToasterMessages></ToasterMessages>
  <router-view></router-view>
  <Footer></Footer>
</template>
<script>
import emitter from '@/methods/emitter';
import ToasterMessages from '@/components/ToasterMessages.vue';
import Header from '../components/HomeHeader.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    ToasterMessages,
    Header,
    Footer,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
