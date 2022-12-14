<script setup lang="ts">
import { ref, provide, onMounted } from "vue";
import type { AuthProps } from "@/types";
import EmailAuth from "./interfaces/EmailAuth.vue";
import ForgottenPassword from "./interfaces/ForgottenPassword.vue";
import MagicLink from "./interfaces/MagicLink.vue";
import UpdatePassword from "./interfaces/UpdatePassword.vue";
import { en, ja, de_formal, de_informal } from "@/localisation";
import { merge } from "@/utils";

const props = withDefaults(defineProps<AuthProps>(), {
    view: "sign_in",
    socialLayout: "vertical",
    onlyThirdPartyProviders: false,
    magicLink: false,
    showLinks: true,
    theme: "default",
});
provide("props", props);

interface Emits {
    (e: "set-loading", value: boolean): void;
}
const emits = defineEmits<Emits>();

const authView = ref(props.view);
const changeView = (newView: "sign_in" | "sign_up" | "magic_link" | "forgotten_password" | "update_password") => {
    authView.value = newView;
};
provide("view", {
    authView,
    changeView,
});

const localizations = { en, ja, de_formal, de_informal };
const selectedLocalization = merge({ ...localizations[props?.localization?.lang ?? "en"] }, { ...props?.localization?.variables });

const showUserData = (data: any) => {};

const setIsLoading = (loading: boolean) => {
    emits("set-loading", loading);
};
provide("loading", { setIsLoading });

const generateCSSVariables = () => {
    const selectedTheme = merge(props?.appearance?.theme?.default ?? {}, props?.appearance?.theme?.[props.theme] ?? {}, props?.appearance?.variables?.default ?? {}, props?.appearance?.variables?.[props?.theme] ?? {});

    for (const key in selectedTheme) {
        for (const item in selectedTheme[key]) {
            (document.querySelector(":root") as HTMLElement)?.style.setProperty(`--${key}-${[item]}`, selectedTheme[key][item]);
        }
    }
};

onMounted(() => {
    generateCSSVariables();
});
</script>

<template>
    <Container gap="small" direction="vertical">
        <template v-if="authView === 'sign_in' || authView === 'sign_up'">
            <EmailAuth :i18n="selectedLocalization" @signin-completed="showUserData" @signup-completed="showUserData" />
        </template>
        <template v-else-if="authView === 'forgotten_password'">
            <ForgottenPassword :i18n="selectedLocalization" />
        </template>
        <template v-else-if="authView === 'magic_link'">
            <MagicLink :i18n="selectedLocalization" />
        </template>
        <template v-else-if="authView === 'update_password'">
            <UpdatePassword :i18n="selectedLocalization" />
        </template>
    </Container>
</template>

<style scoped></style>

