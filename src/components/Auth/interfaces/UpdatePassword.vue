<script setup lang="ts">
import { ref, inject } from "vue";
import type { I18nVariables, AuthProps, LoadingProps } from "@/types";
const password = ref("");
const error = ref("");
const message = ref("");

defineProps<{
    i18n: I18nVariables;
}>();

const { supabaseClient } = inject("props") as AuthProps;
const { setIsLoading } = inject("loading") as LoadingProps;

const updateUserPassword = async () => {
    setIsLoading(true);
    error.value = "";
    message.value = "";

    const { error: updateUserPasswordError } = await supabaseClient.auth.updateUser({ password: password.value });
    if (updateUserPasswordError) {
        error.value = updateUserPasswordError.message;
    } else {
        message.value = "Your password has been updated";
    }
    setIsLoading(false);
};
</script>

<template>
    <form id="auth-forgot-password" @submit.prevent="updateUserPassword">
        <Container gap="large" direction="vertical">
            <Container gap="large" direction="vertical">
                <div>
                    <Label label-for="email" :label="i18n['update_password']?.password_label" />
                    <Input v-model="password" name="password" id="password" type="password" :placeholder="i18n['update_password']?.password_input_placeholder" />
                </div>
                <Button type="submit" :loading="false" variant="primary">{{ i18n["update_password"]?.button_label }}</Button>
            </Container>
            <Message v-if="!!message" color="default">{{ message }}</Message>
            <Message v-if="!!error" color="danger">{{ error }}</Message>
        </Container>
    </form>
</template>

