<script setup lang="ts">
import { ref, inject, defineAsyncComponent } from "vue";
import type { I18nVariables, AuthProps, AuthEmits } from "@/types";

import Button from "@/components/UI/Button.vue";
import Container from "@/components/UI/Container.vue";
import Input from "@/components/UI/Input.vue";
import Label from "@/components/UI/Label.vue";

const Message = defineAsyncComponent(() => import("@/components/UI/Message.vue"));

const password = ref("");
const error = ref("");
const message = ref("");
const isLoading = ref(false);

defineProps<{
    i18n: I18nVariables;
}>();

const { supabaseClient } = inject("props") as AuthProps;
const emits = inject("emits") as AuthEmits;

const updateUserPassword = async () => {
    isLoading.value = true;
    emits("set-loading", true);
    error.value = "";
    message.value = "";

    const { error: updateUserPasswordError } = await supabaseClient.auth.updateUser({ password: password.value });
    if (updateUserPasswordError) {
        error.value = updateUserPasswordError.message;
    } else {
        message.value = "Your password has been updated";
        emits("update-password-completed");
    }
    isLoading.value = false;
    emits("set-loading", false);
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
                <Button type="submit" :loading="isLoading" variant="primary">{{ i18n["update_password"]?.button_label }}</Button>
            </Container>
            <Message v-if="!!message" color="default">{{ message }}</Message>
            <Message v-if="!!error" color="danger">{{ error }}</Message>
        </Container>
    </form>
</template>

