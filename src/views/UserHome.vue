<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="slide-box">
    <div class="slide show">
      <img src="https://www.mbs.jp/oujougiwa_no_imioshire/images/head_pc.jpg" alt="">
      <div class="text">
        <h4>你也差不多該死心了！</h4>
        <pre>消失七年的前女友，重新相遇後第一句話竟然是…
「我希望你能替我拍攝分娩紀錄」
沒想到久違重逢的她，卻提出了踐踏市松自尊心的要求…！？</pre>
      </div>
    </div>
    <div class="slide">
      <img src="https://cdn.clipkit.co/tenants/1044/articles/images/000/000/758/large/a50e55e2-25de-4134-b814-8c8e3a5eb3b5.jpg?1648017416" alt="">
      <div class="text">
        <h4>惡女!誰說工作不帥氣</h4>
        <pre>超級樂觀卻有點廢柴的新鮮人田中麻理鈴，
第一份工作就被分派到公司的「邊緣部門」—備品管理課，
並遇見神秘上司兼職涯導師峰岸。麻理鈴的惡女之路就此展開！</pre>
      </div>
    </div>
    <div class="slide">
      <img src="https://statics.tver.jp/images/content/thumbnail/series/xlarge/sr1dvhg7rz.jpg?v=25" alt="">
      <div class="text">
        <h4>Silent</h4>
        <pre>高二的秋天，紬的目光被在台上朗讀作文的佐倉想的聲音所吸引。
在朋友的助攻下，兩人終於在高三那年開始交往。然而，
想卻在畢業後一聲不響地消失......</pre>
      </div>
    </div>
    <div class="slide">
      <img src="https://www.tv-asahi.co.jp/niceflight/common-img/main_sp.jpg" alt="">
      <div class="text">
        <h4>NICE FLIGHT!</h4>
        <pre>在航空公司擔任副機師的倉田粋，在某次飛行遭遇惡劣氣候，
當粋和機長決定冒險在強勁側風中降落之際，
一位女性航管員的聲音從無線電傳來......</pre>
      </div>
    </div>
    <a class="next" @click.prevent="nextSlide(1)" href="#">&gt;</a>
    <a class="pre" @click.prevent="preSlide(-1)" href="#">&lt;</a>
    <div class="scroll-down-btn" @click="scrollMove(600)">
      <button type="button" @click="moveDown">看更多</button>
      <i class="bi bi-arrow-down"></i>
    </div>
  </div>
  <div class="photo-wall" data-aos="fade-up" data-aos-delay="100"
  data-aos-duration="1000" data-aos-easing="ease-in-out">
    <div class="col-4">
      <div class="pic">
        <img :src="url.src1" alt="" v-for="(url, index) in imageWall"
        :key="url.src1" @click.prevent="photoWall(index)">
      </div>
    </div>
    <div class="col-4">
      <div class="zoom-in-pic">
        <img :src="imageWall[imageNum].src1" alt="日劇劇照" title="2022日劇">
      </div>
    </div>
    <div class="col-4">
      <div class="imageWall-intro">
        <h4>2022精選日劇:TOP9</h4>
        <p>喜愛日劇，熱愛日劇，沒有日劇就吃不下飯，就睡不著覺，甚至就會活不下去的日劇迷。</p>
        <p>一定對這些日劇的人物、場景如數家珍!</p>
      </div>
    </div>
  </div>
  <div class="promotion-txt">
    <div class="txt-1" data-aos="fade-up" data-aos-delay="100"
    data-aos-duration="1000" data-aos-easing="ease-in-out">
      <div class="col-6">
        <p>扣人心懸的劇情、</p>
        <p>唯美浪漫的畫面、</p>
      </div>
      <div class="col-6 image-shadow">
        <img src="https://media.vogue.com.tw/photos/6385fccf87349df114e4a292/master/w_1600%2Cc_limit/%25E5%2588%259D%25E6%2588%2580%2520%25E6%259C%25A8%25E6%2588%25B6%25E5%25A4%25A7%25E8%2581%25968.jpg" alt="">
      </div>
    </div>
    <div class="txt-1" data-aos="fade-down" data-aos-delay="100"
    data-aos-duration="1000" data-aos-easing="ease-in-out">
      <div class="col-6 flex-order">
        <p>細膩的情感刻畫、</p>
        <p>奇妙的命運牽絆、</p>
      </div>
      <div class="col-6 image-shadow">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/8-1672052910.jpeg" alt="">
      </div>
    </div>
    <div class="txt-2" data-aos="fade-up" data-aos-delay="100"
    data-aos-duration="1000" data-aos-easing="ease-in-out">
      <div class="col-12">
        <div class="static-txt">
          <p>熱愛日劇的你</p>
          <p>是不是很想要，立即展開一場</p>
        </div>
        <div class="dynamic-txt-wrapper">
          <li><span>&quot;追劇場景&quot;探險之旅</span></li>
        </div>
      </div>
    </div>
  </div>
  <button v-if="scrollY > 600" type="button"
  class="go-up-btn" @click="scrollMove(0)">
  <i class="bi bi-arrow-up-circle"></i>
  </button>

  <!-- <Loading-now :active="isLoading"></Loading-now> -->
</template>
<style>
@import '../assets/home';
@import url('https://fonts.googleapis.com/css2?family=Shantell+Sans&family=Tilt+Neon&display=swap');
</style>
<script>
export default {
  inject: ['emitter'],
  components: {

  },
  data() {
    return {
      imageWall: [
        { src1: 'https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202209/6330131E7A1D71664095006.jpeg' },
        { src1: 'https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202209/63301798DE1DF1664096152.jpeg' },
        { src1: 'https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202209/633017743AA7A1664096116.jpeg' },
        { src1: 'https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202209/633015AF04B6E1664095663.jpeg' },
        { src1: 'https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202209/63301644D7E0B1664095812.jpeg' },
        { src1: 'https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202209/633016CAD66461664095946.jpeg' },
        { src1: 'https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202209/63301578A526C1664095608.jpeg' },
        { src1: 'https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202209/633015430D92A1664095555.jpeg' },
        { src1: 'https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202209/633019B928A921664096697.jpeg' },
      ],
      imageNum: 0,
      products: [],
      tempProducts: [],
      pagination: {},
      isLoading: false,
      searchWord: '',
      productId: '',
      page: 0,
      scrollY: 0,
    };
  },
  methods: {
    photoWall(num) {
      console.log(num);
      this.imageNum = num;
    },
    scrollMove(num) {
      if (num) {
        window.scroll(0, num);
      } else {
        window.scroll(0, 0);
      }
    },
    nextSlide(num) {
      this.changeSlide(num);
    },
    preSlide(num) {
      this.changeSlide(num);
    },
    changeSlide(num) {
      const slide = document.querySelectorAll('.slide');
      this.page += num;
      if (this.page > slide.length - 1) {
        this.page = 0;
      }
      if (this.page < 0) {
        this.page = slide.length - 1;
      }
      slide.forEach((item, index) => {
        item.classList.remove('show');
        if (this.page === index) {
          item.classList.add('show');
        }
      });
    },
    goProduct(id) {
      this.productId = id;
      this.emitter.emit('push-id', {
        id: this.productId,
      });
      this.$router.push(`/user/product/${id}`);
    },
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        console.log(res);
        this.products = res.data.products;
        this.tempProducts = res.data.products;
        this.pagination = res.data.pagination;
      });
    },
    searchProduct() {
      this.tempProducts = this.tempProducts.filter((item) => item.title.match(this.searchWord));
      this.searchWord = '';
    },
    changeProductType(type) {
      if (type === null) {
        this.tempProducts = this.products;
      } else {
        this.tempProducts = this.products.filter((item) => item.category === type);
      }
    },
  },
  created() {
    this.getProducts();
    window.scroll(0, 0);
  },
  mounted() {
    // setInterval(() => {
    //   this.nextSlide(1);
    // }, 5000);
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
    });
  },
};
</script>
