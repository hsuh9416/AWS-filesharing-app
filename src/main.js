import { createApp } from "vue";
import App from "./App.vue";
import AmplifyVue from "@aws-amplify/ui-vue";
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '@aws-amplify/ui-vue/styles.css';

Amplify.configure(awsconfig);

const app = createApp(App);
app.use(AmplifyVue);
app.use(Auth)
app.mount("#app");