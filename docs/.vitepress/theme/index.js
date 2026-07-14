import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import UnitList from './UnitList.vue'
// import PdfDownload from './PdfDownload.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 'doc-after': () => h(PdfDownload)
    })
  },
  enhanceApp({ app }) {
    app.component('UnitList', UnitList)
  }
}