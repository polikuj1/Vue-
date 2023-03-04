import { createApp } from 'vue';
// 載入中的元件引入
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
// axios套件的引用
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
// 全域中註冊元件，到處都可以直接使用
app.component('LoadingNow', Loading);
app.mount('#app');
