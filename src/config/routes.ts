export const routes = [
  { path: '/', component: () => import("../views/home") },
  { path: '/about', component: () => import("../views/about") },
  { path: '/:pathMatch(.*)', component: () => import("../views/NotFound") }
]