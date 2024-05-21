// import { createMemoryHistory, createRouter } from 'vue-router'

// const routes = [
//   // { 
//   //   path: '/', 
//   //   name: "home",
//   //   component: () => import('../views/index.vue')
//   // },
//   { 
//     path: '/asd', 
//     name: "thread",
//     component: () => import('../views/thread.vue')
//   },
//   {
//     path: "/:catchAll(.*)", //匹配未定义的路由
//     redirect: "/", //重定向
//   }
// ]

// const router = createRouter({
//   history: createMemoryHistory(),
//   routes,
// })

// export default router
// 导入router所需的方法
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { 
        path: '/', 
        name: "home",
        component: () => import('../views/index.vue')
      },
      { 
        path: '/thread', 
        name: "thread",
        component: () => import('../views/thread.vue')
      },
      {
        path: "/:catchAll(.*)", //匹配未定义的路由
        redirect: "/", //重定向
      }
    ]
});

// 判断是否存在正确的token
// const isHaveToken = () => {
//     return !!localStorage.getItem("token");
// };

// 添加路由守卫进行登录验证
// router.beforeEach((to, from, next) => {
    //没选择国家则重定向
    // if (to.name !== "country" && !window.localStorage.getItem('country')) next({ name: 'country' })
    // else next()
    // if (to.path === `/login`) {
    //     if (isHaveToken()) {
    //         next("/");
    //     } else {
    //         next();
    //     }
    // } else {
    //     if (isHaveToken()) {
    //         next();
    //     } else {
    //         next(`/login`);
    //     }
    // }
// });

//置顶
// router.afterEach((to, from, next) => {
//     document.documentElement.scrollTop = document.body.scrollTop = 0;
//     window.scrollTo(0, 0);
//   })

export default router;
