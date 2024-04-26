import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { MotionPlugin } from '@vueuse/motion'
import './style.css'
import router from './routes'
import App from './App.vue'

// Import translations
import en from "./locales/en.json";
import de from "./locales/de.json";
import hi from "./locales/hi.json";

const messages = {
    en: en,
    de: de,
    hi: hi,
};

const i18n = createI18n({
  legacy: false,  
  locale: 'en', // Set default locale
  fallbackLocale: "en", // Fallback to English if translation not found
  messages,
});

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(MotionPlugin)
app.use(i18n)
app.mount('#app');

