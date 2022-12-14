<script setup lang="ts">
import { ref, inject } from "vue";
import type { I18nVariables, AuthProps, ViewProps, LoadingProps } from "@/types";

defineProps<{
    i18n: I18nVariables;
}>();

const email = ref("");
const error = ref("");
const message = ref("");

const { showLinks, supabaseClient } = inject("props") as AuthProps;
const { changeView } = inject("view") as ViewProps;
const { setIsLoading } = inject("loading") as LoadingProps;

const sendForgottenPasswordInstructions = async () => {
    setIsLoading(true);
    error.value = "";
    message.value = "";
    const { error: forgottenPasswordError } = await supabaseClient.auth.resetPasswordForEmail(email.value, {
        redirectTo: "http://127.0.0.1/5173#view=update_password",
    });
    if (forgottenPasswordError) {
        error.value = forgottenPasswordError.message;
    } else {
        message.value = "Check your email for the password reset link";
    }
    setIsLoading(false);
};
</script>

<template>
    <form id="auth-forgot-password" @submit.prevent="sendForgottenPasswordInstructions">
        <Container gap="large" direction="vertical">
            <Container gap="large" direction="vertical">
                <div>
                    <Label label-for="email" :label="i18n['forgotten_password']?.email_label" />
                    <Input v-model="email" name="email" id="email" type="email" :placeholder="i18n['forgotten_password']?.email_input_placeholder" />
                </div>
                <Button type="submit" :loading="false" variant="primary">{{ i18n["forgotten_password"]?.button_label }}</Button>
            </Container>
            <template v-if="showLinks">
                <Anchor href="#auth-sign-in" @click.prevent="changeView('sign_in')"> Remember your password? Login </Anchor>
            </template>
            <Message v-if="!!message" color="default">{{ message }}</Message>
            <Message v-if="!!error" color="danger">{{ error }}</Message>
        </Container>
    </form>
</template>

