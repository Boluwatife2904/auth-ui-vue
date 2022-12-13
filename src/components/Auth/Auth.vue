<script setup lang="ts">
import { ref, provide } from "vue";
import type { AuthProviders, SocialLayout, AuthView, Theme } from "@/types";
import Container from "../UI/Container.vue";
import EmailAuth from "./interfaces/EmailAuth.vue";
import ForgottenPassword from "./interfaces/ForgottenPassword.vue";

interface Props {
    providers?: AuthProviders;
    socialLayout: SocialLayout;
    view: AuthView;
    onlyThirdPartyProviders: boolean;
    magicLink: boolean;
    showLinks: boolean;
    theme: Theme;
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
provide("props", { ...props, authView, changeView });
</script>

<template>
    <Container gap="small" direction="vertical">
        <template v-if="authView === 'sign_in' || authView === 'sign_up'">
            <EmailAuth />
        </template>
        <template v-else-if="authView === 'forgotten_password'">
            <ForgottenPassword />
        </template>
        <template v-else-if="authView === 'magic_link'">
            <p>This is a forgotten password page</p>
        </template>
        <template v-else-if="authView === 'update_password'">
            <p>This is a forgotten password page</p>
        </template>
    </Container>
</template>

<style scoped></style>

