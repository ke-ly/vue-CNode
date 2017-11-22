// 引用模板
import index from '../page/index.vue'
import topic from '../page/topic.vue'
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
]