/* eslint-disable vue/no-reserved-component-names */
import { createApp } from "vue";
import App from "./App.vue";
import Anchor from "@/components/UI/Anchor.vue";
import Button from "@/components/UI/Button.vue";
import Container from "@/components/UI/Container.vue";
import Divider from "@/components/UI/Divider.vue";
import Input from "@/components/UI/Input.vue";
import Label from "@/components/UI/Label.vue";
import Loader from "@/components/UI/Loader.vue";
import Message from "@/components/UI/Message.vue";

import "./assets/scss/main.scss";

const app = createApp(App);

const Vue = app;

Vue.component("Anchor", Anchor);
Vue.component("Button", Button);
Vue.component("Container", Container);
Vue.component("Divider", Divider);
Vue.component("Input", Input);
Vue.component("Label", Label);
Vue.component("Loader", Loader);
Vue.component("Message", Message);

app.mount("#app");
