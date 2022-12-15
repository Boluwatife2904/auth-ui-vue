<script setup lang="ts">
import { ref, inject } from "vue";
import type { I18nVariables, AuthProps, AuthEmits, ViewProps, } from "@/types";

defineProps<{
    i18n: I18nVariables;
}>();

const email = ref("");
const error = ref("");
const message = ref("");

const { showLinks, redirectTo, supabaseClient } = inject("props") as AuthProps;
const { changeView } = inject("view") as ViewProps;
const emits = inject("emits") as AuthEmits;

const sendForgottenPasswordInstructions = async () => {
    emits("set-loading", true);
    error.value = "";
    message.value = "";
    const { error: forgottenPasswordError } = await supabaseClient.auth.resetPasswordForEmail(email.value, {
        redirectTo,
    });
    if (forgottenPasswordError) {
        error.value = forgottenPasswordError.message;
    } else {
        message.value = "Check your email for the password reset link";
        emits("forgotten-password-completed");
    }
    emits("set-loading", false);
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

