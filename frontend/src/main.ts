import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const log = (message: any) => {
  console.log(message)
}
log('Debugging')

createApp(App).mount('#app')
