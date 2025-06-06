import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import VeeValidate from './includes/validation';
import { auth } from "./includes/firebase"
import Icon from './directives/icon';
import i18n from './includes/i18n';
import { registerSW } from "virtual:pwa-register";
import GlobalComponent from "./includes/_globals";
import ProgressBar from "./includes/progress-bar";

import './assets/base.css';
import './assets/main.css';
import "nprogress/nprogress.css";

registerSW({ immediate: true });

ProgressBar(router);

let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        app.use(createPinia());
        app.use(router);
        app.use(VeeValidate);
        app.use(i18n);
        app.use(GlobalComponent);
        app.directive("icon", Icon);

        app.mount('#app')
    }
})
