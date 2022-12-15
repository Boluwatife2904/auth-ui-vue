<script setup lang="ts">
import { ref, provide, onMounted, defineAsyncComponent } from "vue";
import type { AuthProps, AuthEmits } from "@/types";
import { en, ja, de_formal, de_informal } from "@/localisation";
import { merge } from "@/utils";

const EmailAuth = defineAsyncComponent(() => import("./interfaces/EmailAuth.vue"));
const ForgottenPassword = defineAsyncComponent(() => import("./interfaces/ForgottenPassword.vue"));
const MagicLink = defineAsyncComponent(() => import("./interfaces/MagicLink.vue"));
const UpdatePassword = defineAsyncComponent(() => import("./interfaces/UpdatePassword.vue"));

// Props definition and providing
const props = withDefaults(defineProps<AuthProps>(), {
    view: "sign_in",
    socialLayout: "vertical",
    onlyThirdPartyProviders: false,
    magicLink: false,
    showLinks: true,
    theme: "default",
});
provide("props", props);

// Emits definition and providing
const emits = defineEmits<AuthEmits>();
provide("emits", emits);

const authView = ref(props.view);
const changeView = (newView: "sign_in" | "sign_up" | "magic_link" | "forgotten_password" | "update_password") => {
    authView.value = newView;
};
provide("view", { authView, changeView });

const localizations = { en, ja, de_formal, de_informal };
const selectedLocalization = merge({ ...localizations[props?.localization?.lang ?? "en"] }, { ...props?.localization?.variables });

const generateCSSVariables = () => {
    const selectedTheme = merge(
        props?.appearance?.theme?.default ?? {},
        props?.appearance?.theme?.[props.theme] ?? {},
        props?.appearance?.variables?.default ?? {},
        props?.appearance?.variables?.[props?.theme] ?? {}
    );

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
        <EmailAuth v-if="authView === 'sign_in' || authView === 'sign_up'" :i18n="selectedLocalization" />
        <ForgottenPassword v-else-if="authView === 'forgotten_password'" :i18n="selectedLocalization" />
        <MagicLink v-else-if="authView === 'magic_link'" :i18n="selectedLocalization" />
        <UpdatePassword v-else-if="authView === 'update_password'" :i18n="selectedLocalization" />
    </Container>
</template>

<style scoped></style>

