<script setup lang="ts">
import { ref, inject } from "vue";
const email = ref("");
const error = ref("");
const message = ref("");

const { showLinks, changeView } = inject("props");
</script>

<template>
    <form id="auth-forgot-password">
        <Container gap="large" direction="vertical">
            <Container gap="large" direction="vertical">
                <div>
                    <Label label-for="email" label="Email" />
                    <Input v-model="email" name="email" id="email" type="email" />
                </div>
                <Button type="button" :loading="false" variant="primary"
                    >Send reset password instructions</Button
                >
            </Container>
            <template v-if="showLinks">
                <Anchor href="#auth-sign-in" @click.prevent="changeView('sign_in')">
                    Remember your password? Login
                </Anchor>
            </template>
            <Message v-if="!!message" color="default">{{ message }}</Message>
            <Message v-if="!!message" color="danger">{{ message }}</Message>
        </Container>
    </form>
</template>

