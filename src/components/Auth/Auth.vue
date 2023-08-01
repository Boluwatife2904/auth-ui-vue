<script setup lang="ts">
import { ref, provide, onMounted, watch } from "vue";
import type { AuthProps, AuthEmits } from "@/types";
import { en, ja, de_formal, de_informal, pt_br } from "@/localisation";
import { merge } from "@/utils";

import EmailAuth from "@/components/Auth/interfaces/EmailAuth.vue";
import Container from "@/components/UI/Container.vue";
import ForgottenPassword from "@/components/Auth/interfaces/ForgottenPassword.vue";
import MagicLink from "@/components/Auth/interfaces/MagicLink.vue";
import UpdatePassword from "@/components/Auth/interfaces/UpdatePassword.vue";

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

const localizations = { en, ja, de_formal, de_informal, pt_br };
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

watch(
    () => props.appearance,
    () => {
        generateCSSVariables();
    },
    {
        deep: true,
    }
);
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
