<script setup lang="ts">
import { ref, inject} from "vue";
import type { I18nVariables, AuthProps, AuthEmits, ViewProps } from "@/types";

import Anchor from "@/components/UI/Anchor.vue";
import Button from "@/components/UI/Button.vue";
import Container from "@/components/UI/Container.vue";
import Input from "@/components/UI/Input.vue";
import Label from "@/components/UI/Label.vue";

import Message from"@/components/UI/Message.vue";
import SocialAuth from"./SocialAuth.vue";

defineProps<{
    i18n: I18nVariables;
}>();

const email = ref("");
const password = ref("");
const error = ref("");
const message = ref("");
const isLoading = ref(false);

const { showLinks, onlyThirdPartyProviders, providers, magicLink, supabaseClient } = inject("props") as AuthProps;
const { authView, changeView } = inject("view") as ViewProps;
const emits = inject("emits") as AuthEmits;

const registerOrCreateAccount = async () => {
    isLoading.value = true;
    emits("set-loading", true);
    error.value = "";
    message.value = "";

    if (authView.value === "sign_in") {
        const {
            data: { user, session },
            error: signInError,
        } = await supabaseClient.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        });

        if (signInError) {
            error.value = signInError.message;
        } else {
            emits("signin-completed", { user, session });
        }
    } else if (authView.value === "sign_up") {
        const {
            data: { user, session },
            error: signUpError,
        } = await supabaseClient.auth.signUp({
            email: email.value,
            password: password.value,
        });
        if (signUpError) {
            error.value = signUpError.message;
        }
        // Check if session is null -> email confirmation setting is turned on
        else if (user && !session) {
            emits("signup-completed", { user });
            message.value = "Check your email for the confirmation link.";
            // Check if session exists -> email confirmation setting is turned off
        } else if (user && session) {
            emits("signup-completed", { user, session });
        }
    }
    isLoading.value = false;
    emits("set-loading", false);
};
</script>

<template>
    <form :id="`auth-${authView}`" @submit.prevent="registerOrCreateAccount">
        <SocialAuth :i18n="i18n" v-if="providers && providers.length > 0" />
        <Container v-if="!onlyThirdPartyProviders" direction="vertical" gap="large">
            <div>
                <Label label-for="email" :label="i18n[authView as 'sign_in' | 'sign_up']?.email_label" />
                <Input v-model="email" name="email" id="email" type="email" :placeholder="i18n[authView as 'sign_in' | 'sign_up']?.email_input_placeholder" />
            </div>
            <div>
                <Label label-for="password" :label="i18n[authView as 'sign_in' | 'sign_up']?.password_label" />
                <Input v-model="password" name="password" id="password" type="password" :placeholder="i18n[authView as 'sign_in' | 'sign_up']?.password_input_placeholder" />
            </div>
            <Button type="submit" :loading="isLoading" variant="primary">{{ i18n[authView]?.button_label }}</Button>
            <Message v-if="!!message" color="default">{{ message }}</Message>
            <Message v-if="!!error" color="danger">{{ error }}</Message>
            <template v-if="showLinks">
                <Anchor v-if="magicLink && authView === 'sign_in'" href="#auth-magic-link" @click.prevent="changeView('magic_link')"> {{ i18n["magic_link"]?.link_text }} </Anchor>
                <Anchor v-if="authView === 'sign_in'" href="#auth-forgot-password" @click.prevent="changeView('forgotten_password')"
                    >{{ i18n["forgotten_password"]?.link_text }}
                </Anchor>
                <Anchor v-if="authView === 'sign_in'" href="#auth-sign-up" @click.prevent="changeView('sign_up')"> {{ i18n["sign_up"]?.link_text }} </Anchor>
                <Anchor v-else-if="authView === 'sign_up'" href="#auth-sign-in" @click.prevent="changeView('sign_in')"> {{ i18n["sign_in"]?.link_text }} </Anchor>
            </template>
        </Container>
    </form>
</template>

<style scoped></style>

