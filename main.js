import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import zh from '@/locale/zh.js'
import en from '@/locale/en.js'
import tr from '@/locale/tr.js'
// vuex
import store from './store'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'

import mixin from './common/mixin'

Vue.prototype.$store = store

Vue.config.productionTip = false

let i18nConfig = {
  locale: uni.getLocale(),
  messages:{
	  'zh':zh,
	  'en':en,
	  'tr':tr
  },
  silentTranslationWarn: true
}

App.mpType = 'app'
Vue.use(uView)
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)
// #ifdef MP
// 引入uView对小程序分享的mixin封装
const mpShare = require('@/uni_modules/uview-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)
// #endif

Vue.mixin(mixin)

const app = new Vue({
	i18n,
    store,
    ...App
})

// 引入请求封装
require('./util/request/index')(app)

app.$mount()
