import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';
//store
import pinia from './stores' 
import { useLayoutStore } from '@/stores/layout'
//css
import 'primeicons/primeicons.css'
import '@/assets/css/style.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
//languages
import en from '@/assets/locales/en.json';
import kr from '@/assets/locales/kr.json';
import cn from '@/assets/locales/cn.json';
import jp from '@/assets/locales/jp.json';
import vn from '@/assets/locales/vn.json';
//prime vue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
//directives
import AnimateOnScroll from 'primevue/animateonscroll';

const messages = {
  en,
  kr,
  jp,
  vn,
  cn
};

const savedLocale = localStorage.getItem('locale') || 'en';
const i18n = createI18n({
  locale: savedLocale, 
  fallbackLocale: 'en',
  messages,
});

const app = createApp(App)

app.use(pinia)
app.use(i18n);
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.directive('animateonscroll', AnimateOnScroll);

//global properties
app.config.globalProperties.$layoutStore = useLayoutStore

app.mount('#app')
