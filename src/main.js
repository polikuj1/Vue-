import { createApp } from 'vue';
// 視窗滾動效果
import AOS from 'aos';
import 'aos/dist/aos.css';
// 表單驗證套件
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// bootstrap的icon引用
import 'bootstrap-icons/font/bootstrap-icons.css';
// 載入中的元件引入
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
// axios套件的引用
import axios from 'axios';
import VueAxios from 'vue-axios';
// 常用的方法js引入，千分位
import { currency, date } from './methods/filters';
import App from './App.vue';
import router from './router';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);
// 全域註冊屬性的方式，$filters為自訂義的名稱，後面為要加入的函式
app.config.globalProperties.$filters = { currency, date };
AOS.init();
app.use(VueAxios, axios);
app.use(router);
// 全域中註冊元件，到處都可以直接使用
app.component('LoadingNow', Loading);
app.mount('#app');
