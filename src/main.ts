import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import './style.css';
import { App } from "./App";
import { Home } from './views/home';
import { About } from "./views/about";

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App);

app.use(router).mount('#app')
