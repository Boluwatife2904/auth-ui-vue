<script setup lang="ts">
import { ref, inject } from "vue";
const email = ref("");
const error = ref("");
const message = ref("");

const { showLinks } = inject("props");
const { changeView } = inject("view");
</script>

<template>
    <form id="auth-magic-link">
        <Container gap="large" direction="vertical">
            <Container gap="large" direction="vertical">
                <div>
                    <Label label-for="email" label="Email" />
                    <Input v-model="email" name="email" id="email" type="email" />
                </div>
                <Button type="button" :loading="false" variant="primary">Send Magic Link</Button>
            </Container>
            <template v-if="showLinks">
                <Anchor href="#auth-sign-up" @click.prevent="changeView('sign_up')"> Don't have an account? Sign Up </Anchor>
            </template>
            <Message v-if="!!message" color="default">{{ message }}</Message>
            <Message v-if="!!error" color="danger">{{ error }}</Message>
        </Container>
    </form>
</template>

