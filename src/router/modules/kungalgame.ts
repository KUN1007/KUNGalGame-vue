import { type RouteRecordRaw } from 'vue-router'

const kungalgame: RouteRecordRaw[] = [
  // KUNGalgame 关于我们页
  {
    name: 'KUNGalgame',
    path: '/kungalgame',
    component: () => import('@/views/kungalgame/KUNGalgame.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '关于我们',
    },
  },
]

export default kungalgame
