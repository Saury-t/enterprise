// 引入i18n
import { createI18n } from "vue-i18n";
import zh from "./langs/zh.js";
import en from "./langs/en.js";
 
// 语言包
const messages = {
  zh,
  en,
};
 
const i18n = createI18n({
  locale: "zh", //默认语言
  fallbackLocale:'en',//回退语言
  messages,
});
 
export default i18n;