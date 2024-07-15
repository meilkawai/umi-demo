import { defineConfig } from 'umi';

export default defineConfig({
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  routes: [
    { path: '/', component: '@/layouts/index' },
    { path: '/login', component: '@/pages/login' },
    { path: '/showChildApp', component: '@/pages/showChildApp' },
    { path: '/categoryList', component: '@/pages/formCategoryList' },
    { path: '/404', component: '@/pages/notfound' },
    { path: '/order', component: '@/pages/order' },

  ],
  // fastRefresh: {},
  proxy: {
    '/api': {
      'target': 'http://localhost:8080',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' }
    }
  },
  // 修改icon
  links: [
    // href的图片你可以放在public里面，直接./图片名.png 就可以了，也可以是cdn链接
    { rel: 'icon', href: './favicon.ico' },
  ],
  // 修改title
  title: 'umi-blog',


});
