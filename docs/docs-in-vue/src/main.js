import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/main.scss'
import './assets/js/prism'

Vue.config.productionTip = false

router.afterEach((to, from) => {
    const details = document.getElementsByTagName('details');
    const id = to.name;
    let i = 0;
    while (i < details.length) {
        const detailId = details[i].getAttribute('id');
        if (detailId == id) {
            details[i].setAttribute('open', true)
        } else {
            details[i].removeAttribute('open')
        }
        i = i + 1;
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')