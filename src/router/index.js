/* 路由配置全写这里 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/* 开启debug模式 */
Vue.config.debug = true
Vue.use(VueRouter);

import Index from '../pages/index.vue'
import News from '../pages/news.vue'
import secondcomponent from '../pages/otherPages.vue'
import thirdcomponent from '../pages/otherPages2.vue'
import list1 from '../pages/list/list1.vue'
import list2 from '../pages/list/list2.vue'
import list3 from '../pages/list/list3.vue'


export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            component: Index

        }, {
            path: '/index',
            component: Index

        },
        {
            path: '/news',
            component: News,
            children: [{
                path: '/news/list1',
                component: list1,
                alias: '/news',
            }, {
                path: '/news/list2',
                component: list2
            }, {
                path: '/news/list3',
                component: list3
            }]

        },
        {
            path: '/second',
            component: secondcomponent
        },
        {
            path: '/third',
            component: thirdcomponent
        }
    ]
})