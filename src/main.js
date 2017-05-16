/* 项目启动 */
import Vue from 'vue'
import App from './App'
// 这里就是引入的是vue-router文件
import router from './router'
// 这里引入的就是一个vuex吧.
import store from './store/store'


new Vue({
    router,
    store,
    render: h => h(App)
        // components: { firstcomponent, secondcomponent }
}).$mount('#app')