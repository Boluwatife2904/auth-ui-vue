<script setup lang="ts">
import { ref } from "vue";
import type { I18nVariables } from "@/types";
const email = ref("");
const error = ref("");
const message = ref("");

defineProps<{
    i18n: I18nVariables;
}>();
</script>

<template>
    <form id="auth-forgot-password">
        <Container gap="large" direction="vertical">
            <Container gap="large" direction="vertical">
                <div>
                    <Label label-for="email" :label="i18n['update_password']?.password_label" />
                    <Input v-model="email" name="email" id="email" type="email" :placeholder="i18n['update_password']?.password_input_placeholder" />
                </div>
                <Button type="button" :loading="false" variant="primary">{{ i18n["update_password"]?.button_label }}</Button>
            </Container>
            <Message v-if="!!message" color="default">{{ message }}</Message>
            <Message v-if="!!error" color="danger">{{ error }}</Message>
        </Container>
    </form>
</template>

