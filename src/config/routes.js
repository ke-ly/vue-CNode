// 引用模板
import index from '../page/index.vue'
import topic from '../page/topic.vue'
import user from '../page/user.vue'
import getstart from '../page/getstart.vue'
import signin from '../page/signin.vue'
import api from '../page/api.vue'
import about from '../page/about.vue'
import create from '../page/create.vue'


import theCommand from '../vue163/theCommand.vue'
// 配置路由
export default [
    
    {
        path: '/',
        name:'index',
        component: index
    },
    {
        path: '/topic/:id',
        component: topic
    },
    {
        path: '/user/:id',
        component: user
    },    
    {
        path: '/signin',
        component: signin
    },
    {
        path: '/getstart',
        component: getstart
    },
    {
        path: '/api',
        component: api
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/create',
        component: create
    },
    {
        path:'/163',
        component:theCommand
    }
]