<template>
  <div class="about">
    <iframe width="100%" height="580px" src="https://www.youtube.com/embed/HrlItTx86Nw?autoplay=1&mute=1" title="YouTube video player"
    frameborder="0" allow="accelerometer;
    clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
    </iframe>
    <div class="intro-us">
      <div data-aos="fade-up" data-aos-delay="100"
  data-aos-duration="1000" data-aos-easing="ease-in-out">
        <h2>如初戀般的難以忘懷</h2>
        <p>我們創立的初衷，希望從日劇中找到屬於每個人的感動。回想起當初，那認真拚鬥的你、
          青澀靦腆的你、天真無邪的你；或者是在職場中，歷經波折、沒日沒夜、逐漸迷失自我的你。
          都能夠從日劇中拾起勇氣，重新面對人生。
        </p>
        <p>私たちが創設した目的は、日本のドラマから、誰にでも感動を与えるものを見つけ出すことです。
          当時のあなたの熱意溢れる姿、未熟で恥ずかしがり屋なあなた、純真無垢なあなた、または職場での試練を経験し、
          夜も眠らずに自己を迷うあなた。それら全てを日本のドラマから勇気を得て、再び人生に立ち向かえるようになってほしいと思っています。
        </p>
      </div>
      <h2 data-aos="fade-up" data-aos-delay="100"
  data-aos-duration="1000" data-aos-easing="ease-in-out">我們的理念</h2>
      <div class="target" data-aos="fade-up" data-aos-delay="100"
  data-aos-duration="1000" data-aos-easing="ease-in-out">
        <div class="card">
          <div class="cover">
            <p>T</p>
          </div>
          <div class="back">
            <div><span>T</span><h4>ravel</h4></div>
            <p>探訪日劇的拍攝地點，來一趟有別以往的旅行吧</p>
          </div>
        </div>
        <div class="card">
          <div class="cover">
            <p>E</p>
          </div>
          <div class="back">
            <div><span>E</span><h4>xplore</h4></div>
            <p>探索劇中的每一個角落，讓自己置身於日劇之中</p>
          </div>
        </div>
        <div class="card">
          <div class="cover">
            <p>U</p>
          </div>
          <div class="back">
            <div><span>U</span><h4>nknown</h4></div>
            <p>旅途中的未知事物，總是讓人特別興奮</p>
          </div>
        </div>
        <div class="card">
          <div class="cover">
            <p>L</p>
          </div>
          <div class="back">
            <div><span>L</span><h4>ife</h4></div>
            <p>人生如劇，劇如人生，你準備好要寫下人生的旅程了嗎</p>
          </div>
        </div>
      </div>
      <div class="group-member" data-aos="fade-up" data-aos-delay="100"
  data-aos-duration="1000" data-aos-easing="ease-in-out">
        <h2>我們的團隊</h2>
        <p>每一個成員都對日劇有深入的研究，針對各自擅長的日劇類型，撰寫影視評論。
          在國內外多次接受報刊媒體專訪，對於日劇娛樂、日本旅遊、日本飲食，皆有獨特的見解。
        曾為日本觀光局拍攝影片，推廣地方性的創生旅遊計畫，並定期於官網更新最新日劇、旅遊情報。
      至今為止，已經帶領無數日劇迷，訪日次數達到十萬人次。</p>
        <p>各メンバーはそれぞれ得意なジャンルの日本のドラマに精通し、映像評論を執筆しています。
          国内外の新聞やメディアから何度も専門的なインタビューを受け、日本のエンターテインメント、旅行、飲食について独自の見解を持っています。
          日本の観光局の地方創生旅行プロジェクトのために映像を撮影し、定期的に公式ウェブサイトで最新のドラマや旅行情報を更新しています。
          今までに数多くの日本ドラマファンを導き、訪日回数は10万回を超えています。</p>
        <div class="portrait" v-for="person in member" :key="person.name">
          <img :src="person.url" alt="">
          <div class="txt">
            <h4>{{ person.name }}</h4>
            <p>{{ person.intro }}</p>
          </div>
        </div>
      </div>
      <div class="partners" data-aos="fade-up" data-aos-delay="100"
  data-aos-duration="1000" data-aos-easing="ease-in-out">
        12
      </div>
    </div>
  </div>
</template>
<style>
@import '../assets/about.css';
</style>
<script>
export default {
  data() {
    return {
      member: [
        {
          name: '長澤雅美',
          intro: '企劃執行長 : 統籌所有行程',
          url: 'https://s.yimg.com/os/creatr-uploaded-images/2022-09/5cc0aa10-358b-11ed-bf5b-001b1bbd0c9b',
        },
        {
          name: '新垣結衣',
          intro: '領隊 : 日本當地接待、引導',
          url: 'https://d5ttlem47o98b.cloudfront.net/s3fs-public/styles/article_image/public/2023-02/gakki556cc7.jpg?itok=GHJC3bqA',
        },
        {
          name: '石原聰美',
          intro: '活動企劃 : 追劇場景規劃',
          url: 'https://wow-japan.com/wp-content/uploads/2022/01/FJX9Bk9aUAA124_.jpg',
        },
        {
          name: '福士蒼汰',
          intro: '活動企劃 : 追劇場景規劃',
          url: 'https://www.mirrormedia.com.tw/assets/images/20211213164316-764d581b3bd40095c50772885756638e-tablet.jpg',
        },
        {
          name: '西島俊秀',
          intro: '領隊 : 日本當地接待、引導',
          url: 'https://i0.wp.com/pinkupost.com/wp-content/uploads/2021/08/%E8%A5%BF%E5%B3%B6%E7%A7%80%E4%BF%8A%EF%BC%86%E5%AE%AE%E6%BE%A4%E7%90%86%E6%83%A0%E9%A3%BE%E6%BC%94%E5%A4%AB%E5%A6%BB%EF%BC%8C%E5%87%BA%E6%BC%94%E7%A7%8B%E5%85%83%E5%BA%B7%E6%87%B8%E7%96%91%E6%96%B0%E4%BD%9C%E3%80%8C%E7%9C%9F%E5%85%87%E6%A8%99%E8%A8%98%E3%80%8D%E3%80%82%E8%8A%B3%E6%A0%B9%E4%BA%AC%E5%AD%90%E4%B9%9F%E7%A2%BA%E5%AE%9A%E5%8A%A0%E5%85%A5%EF%BC%81-4-1.jpg?ssl=1',
        },
        {
          name: '阿部寬',
          intro: '攝影師 : 隨隊攝影、拍照',
          url: 'https://farm66.static.flickr.com/65535/51138296070_4ec44c59bf_b.jpg',
        },
      ],
    };
  },
};
</script>
