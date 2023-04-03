import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import us from './locales/us.json'
import jp from './locales/jp.json'
import vn from './locales/vn.json'

export const resources = {
  us: {
    translation: us,
  },
  jp: {
    translation: jp,
  },
  vn: {
    translation: vn,
  },
}
const languageLocal = window.localStorage.getItem('LANGUAGE') ? window.localStorage.getItem('LANGUAGE') : null;
const init = languageLocal ? languageLocal : 'jp'

i18n.use(initReactI18next).init({
  resources,
  lng: init, // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})
export default i18n
