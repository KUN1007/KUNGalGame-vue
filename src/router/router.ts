import type { KUNRouteType } from '@/router/types'

const LoginRoute: KUNRouteType = {
  name: 'Login',
  path: '/login',
  component: () => import('@/views/login/Login.vue'),
  meta: {
    title: '登录',
  },
}

// KUNGalgame 联系我们
const ContactsRoute: KUNRouteType = {
  name: 'Contacts',
  path: '/contacts',
  component: () => import('@/views/contacts/Contacts.vue'),
  meta: {
    title: '联系我们',
  },
}

// KUNGalgame 捐助我们
const DonateRoute: KUNRouteType = {
  name: 'Donate',
  path: '/donate',
  component: () => import('@/views/donate/Donate.vue'),
  meta: {
    title: '捐助我们',
  },
}

// KUNGalgame  用户协议
const LicenceRoute: KUNRouteType = {
  name: 'Licence',
  path: '/licence',
  component: () => import('@/views/licence/Licence.vue'),
  meta: {
    title: '用户协议',
  },
}

// KUNGalgame 隐私政策
const PrivacyRoute: KUNRouteType = {
  name: 'Privacy',
  path: '/privacy',
  component: () => import('@/views/privacy/Privacy.vue'),
  meta: {
    title: '隐私政策',
  },
}

// KUNGalgame 重定向页面
const RedirectRoute: KUNRouteType = {
  name: 'Redirect',
  path: '/redirect',
  redirect: '/',
  component: () => import('@/views/redirect/Redirect.vue'),
  meta: {
    title: '重定向',
  },
}

// KUNGalgame 404
const ErrorRoute = {
  name: '404',
  path: '/:path(.*)*',
  component: () => import('@/views/404/404.vue'),
  meta: {
    title: '404',
  },
}

// KUNGalgame 403 TODO:
const ForbiddenRoute = {
  name: '403',
  path: '/admin',
  component: () => import('@/views/403/403.vue'),
  meta: {
    title: '403',
  },
}

const isArray = (val: any): val is object =>
  toString.call(val) === '[object Array]'

const getAsyncRoute = (): KUNRouteType[] => {
  const modules = import.meta.glob('./modules/*.ts', {
    eager: true,
    import: 'default',
  })
  const asyncRoute: KUNRouteType[] = []
  Object.values(modules).forEach((value) => {
    const moduleList = isArray(value)
      ? [...(value as KUNRouteType[])]
      : [value as KUNRouteType]
    asyncRoute.push(...moduleList)
  })
  return asyncRoute
}

const getRouteName = (routeList: KUNRouteType[]) => {
  const routeArr: string[] = []
  routeList.forEach((item) => {
    routeArr.push(item.name as string)
    if (item?.children) {
      routeArr.push(...getRouteName(item?.children))
    }
  })
  return routeArr
}

// 异步路由
export const asyncRoutes = getAsyncRoute()

// 基础路由
export const noCertRoutes = [
  LoginRoute,
  ContactsRoute,
  DonateRoute,
  LicenceRoute,
  PrivacyRoute,
  RedirectRoute,
  ErrorRoute,
  ForbiddenRoute,
]

// 路由白名单
export const WHITE_LIST = getRouteName(noCertRoutes)