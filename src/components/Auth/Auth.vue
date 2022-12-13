<script setup lang="ts">
import { ref, provide } from "vue";
import type { AuthProviders, SocialLayout, AuthView, Theme, I18nVariables } from "@/types";
import Container from "../UI/Container.vue";
import EmailAuth from "./interfaces/EmailAuth.vue";
import ForgottenPassword from "./interfaces/ForgottenPassword.vue";
import MagicLink from "./interfaces/MagicLink.vue";
import UpdatePassword from "./interfaces/UpdatePassword.vue";
import * as _defaultLocalizations from "@/localisation";

interface Localization {
    [key: string]: I18nVariables;
}

interface Props {
    providers?: AuthProviders;
    socialLayout?: SocialLayout;
    view?: AuthView;
    onlyThirdPartyProviders?: boolean;
    magicLink?: boolean;
    showLinks?: boolean;
    theme?: Theme;
    localization?: {
        lang?: string;
        variables?: I18nVariables;
    };
}

const props = withDefaults(defineProps<Props>(), {
    view: "sign_in",
    socialLayout: "vertical",
    onlyThirdPartyProviders: false,
    magicLink: false,
    showLinks: true,
    theme: "default",
});

const authView = ref<AuthView>(props.view);
const changeView = (newView: AuthView) => {
    authView.value = newView;
};
provide("props", props);
provide("view", {
    authView,
    changeView,
});

const defaultLocalizations: Localization = { ..._defaultLocalizations };
const selectedLocalization = {
    ...defaultLocalizations[props?.localization?.lang ?? "en"],
    ...props?.localization?.variables,
};
</script>

<template>
    <Container gap="small" direction="vertical">
        <template v-if="authView === 'sign_in' || authView === 'sign_up'">
            <EmailAuth :i18n="selectedLocalization" />
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

