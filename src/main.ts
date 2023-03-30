import './style.css';
import { App } from "./App";
import { createApp } from 'vue';
import { routes } from './config/routes';
import { createRouter } from 'vue-router';
import { history } from './shared/history';

const router = createRouter({
  history,
  routes,
})

const app = createApp(App);

app.use(router).mount('#app')
