// 引用模板
import index from '../page/index.vue'
import topic from '../page/topic.vue'
import user from '../page/user.vue'
// 配置路由
export default [
  {
    path: '/',
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
]