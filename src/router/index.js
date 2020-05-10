import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '热词分析', icon: 'example' },
    children: [
      {
        path: 'musiclyric',
        name: '歌词热词分析',
        component: () => import('@/views/chart/MusicLyricHotWordCloud'),
        meta: { title: '歌词热词分析', icon: 'table' }
      },
      {
        path: 'musiccomment',
        name: '评论热词分析',
        component: () => import('@/views/chart/MusicCommentHotWordCloud'),
        meta: { title: '评论热词分析', icon: 'table' }
      }
    ]
  },
  {
    path: '/singerType',
    component: Layout,
    redirect: '/example/singerType',
    name: 'Example',
    meta: { title: '歌手热度分析', icon: 'example' },
    children: [
      {
        path: 'singerType',
        name: '歌手热度分析',
        component: () => import('@/views/chart/SingerTypeAnalysis'),
        meta: { title: '歌手热度分析', icon: 'table' }
      }
    ]
  },
  {
    path: '/musicTop30',
    component: Layout,
    redirect: '/example/musicTop30',
    name: 'musicTop30',
    meta: { title: 'Top30歌曲', icon: 'example' },
    children: [
      {
        path: 'musicTop30',
        name: '火热30榜',
        component: () => import('@/views/chart/MusicTop30'),
        meta: { title: '火热30榜', icon: 'table' }
      }
    ]
  },
  {
    path: '/musicType',
    component: Layout,
    redirect: '/example/musicType',
    name: 'musicType',
    meta: { title: '歌曲类型分析', icon: 'example' },
    children: [
      {
        path: 'scene',
        name: '音乐类型情景分析',
        component: () => import('@/views/chart/MusicTypeScene'),
        meta: { title: '音乐类型情景分析', icon: 'table' }
      },
      {
        path: 'mood',
        name: '音乐类型心情分析',
        component: () => import('@/views/chart/MusicTypeMood'),
        meta: { title: '音乐类型心情分析', icon: 'table' }
      },
      {
        path: 'topic',
        name: '音乐类型主题分析',
        component: () => import('@/views/chart/MusicTypeTopic'),
        meta: { title: '音乐类型主题分析', icon: 'table' }
      },
      {
        path: 'language',
        name: '音乐类型语言分析',
        component: () => import('@/views/chart/MusicTypeLanguage'),
        meta: { title: '音乐类型语言分析', icon: 'table' }
      },
      {
        path: 'school',
        name: '音乐类型区分流派分析',
        component: () => import('@/views/chart/MusicTypeSchool'),
        meta: { title: '音乐类型区分流派分析', icon: 'table' }
      },
      {
        path: 'time',
        name: '音乐类型年代分析',
        component: () => import('@/views/chart/MusicTypeTime'),
        meta: { title: '音乐类型年代分析', icon: 'table' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
