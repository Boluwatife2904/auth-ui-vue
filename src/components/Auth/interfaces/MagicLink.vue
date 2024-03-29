<script setup lang="ts">
import { ref, inject } from "vue";
import type { I18nVariables, AuthProps, AuthEmits, ViewProps } from "@/types";

import Anchor from "@/components/UI/Anchor.vue";
import Button from "@/components/UI/Button.vue";
import Container from "@/components/UI/Container.vue";
import Input from "@/components/UI/Input.vue";
import Label from "@/components/UI/Label.vue";

import Message from "@/components/UI/Message.vue";

const email = ref("");
const error = ref("");
const message = ref("");
const isLoading = ref(false);

defineProps<{
    i18n: I18nVariables;
}>();

const { showLinks, redirectTo, supabaseClient } = inject("props") as AuthProps;
const { changeView } = inject("view") as ViewProps;
const emits = inject("emits") as AuthEmits;

const sendMagicLink = async () => {
    isLoading.value = true;
    emits("set-loading", true);
    error.value = "";
    message.value = "";
    const { error: magicLinkError } = await supabaseClient.auth.signInWithOtp({
        email: email.value,
        options: {
            emailRedirectTo: redirectTo,
        },
    });
    if (magicLinkError) {
        error.value = magicLinkError.message;
    } else {
        message.value = "Check your email for the magic link";
        emits("magic-link-sent");
    }
    isLoading.value = false;
    emits("set-loading", false);
};
</script>

<template>
    <form id="auth-magic-link" @submit.prevent="sendMagicLink">
        <Container gap="large" direction="vertical">
            <Container gap="large" direction="vertical">
                <div>
                    <Label label-for="email" :label="i18n['magic_link']?.email_input_label" />
                    <Input v-model="email" name="email" id="email" type="email" :placeholder="i18n['magic_link']?.email_input_label" />
                </div>
                <Button type="submit" :loading="isLoading" variant="primary">{{ i18n["magic_link"]?.button_label }}</Button>
            </Container>
            <template v-if="showLinks">
                <Anchor href="#auth-sign-up" @click.prevent="changeView('sign_up')"> {{ i18n["sign_up"]?.link_text }} </Anchor>
            </template>
            <Message v-if="!!message" color="default">{{ message }}</Message>
            <Message v-if="!!error" color="danger">{{ error }}</Message>
        </Container>
    </form>
</template>

