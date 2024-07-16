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

    //注册子项目路由
    {
      name: 'm-umi',
      path: '/m-umi',
      microApp: 'm-umi',
    },

  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'm-umi', // 唯一 id
          entry: '//localhost:9999', // html entry
        },
      ],
      //   jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      //   prefetch: true, // 是否启用 prefetch 特性，默认为 true
    },
  },
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
  // chainWebpack(config) {
  //   // 禁用 CSS Modules
  //   config.module
  //     .rule('css')
  //     .use('css-loader')
  //     .tap(options => {
  //       options.modules = false;
  //       return options;
  //     });
  // },

});
