import { createApp } from 'vue';
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

const app = createApp(App);
// 全域註冊屬性的方式，$filters為自訂義的名稱，後面為要加入的函式
app.config.globalProperties.$filters = { currency, date };
app.use(VueAxios, axios);
app.use(router);
// 全域中註冊元件，到處都可以直接使用
app.component('LoadingNow', Loading);
app.mount('#app');
