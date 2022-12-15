/* eslint-disable vue/no-reserved-component-names */
import { createApp, defineAsyncComponent } from "vue";
import App from "@/App.vue";

import "./assets/scss/main.scss";

const app = createApp(App);

const Vue = app;

Vue.component(
    "Anchor",
    defineAsyncComponent(() => import("@/components/UI/Anchor.vue"))
);
Vue.component(
    "Button",
    defineAsyncComponent(() => import("@/components/UI/Button.vue"))
);
Vue.component(
    "Container",
    defineAsyncComponent(() => import("@/components/UI/Container.vue"))
);
Vue.component(
    "Divider",
    defineAsyncComponent(() => import("@/components/UI/Divider.vue"))
);
Vue.component(
    "Input",
    defineAsyncComponent(() => import("@/components/UI/Input.vue"))
);
Vue.component(
    "Label",
    defineAsyncComponent(() => import("@/components/UI/Label.vue"))
);
Vue.component(
    "Loader",
    defineAsyncComponent(() => import("@/components/UI/Loader.vue"))
);
Vue.component(
    "Message",
    defineAsyncComponent(() => import("@/components/UI/Message.vue"))
);

app.mount("#app");
