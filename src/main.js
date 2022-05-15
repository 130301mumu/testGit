// import Vue from 'vue';
// new Vue({
//     render: h => h(App),
// }).$mount('#app')


import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app');
// createApp(App) == render(App) ; mount('#app') == el: "#app";