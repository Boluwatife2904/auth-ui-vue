<script setup lang="ts">
import { ref, inject } from "vue";
import SocialAuth from "./SocialAuth.vue";
// import Loader from "@/components/UI/Loader.vue";

const email = ref("");
const password = ref("");

const { showLinks, onlyThirdPartyProviders, providers, authView, changeView } = inject("props");
</script>

<template>
    <form>
        <SocialAuth v-if="providers && providers.length > 0" />
        <Container v-if="!onlyThirdPartyProviders" direction="vertical" gap="large">
            <div>
                <Label label-for="email" label="Email" />
                <Input v-model="email" name="email" id="email" type="email" />
            </div>
            <div>
                <Label label-for="password" label="Password" />
                <Input v-model="password" name="password" id="password" type="password" />
            </div>
            <Button type="button" :loading="false" variant="primary">Submit</Button>
            <Message color="default">Hello World</Message>
            <template v-if="showLinks">
                <Anchor href="#auth-forgot-password" @click.prevent="changeView('forgotten_password')">
                    Forgot your password?
                </Anchor>
                <Anchor
                    v-if="authView === 'sign_in'"
                    href="#auth-sign-up"
                    @click.prevent="changeView('sign_up')"
                >
                    Don't have an account? Sign up
                </Anchor>
                <Anchor
                    v-else-if="authView === 'sign_up'"
                    href="#auth-sign-in"
                    @click.prevent="changeView('sign_in')"
                >
                    Already have an account? Sign in
                </Anchor>
            </template>
            <!-- <Loader /> -->
        </Container>
    </form>
</template>

<style scoped></style>

