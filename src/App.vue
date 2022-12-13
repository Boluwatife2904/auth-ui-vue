<script setup lang="ts">
// :providers="['apple', 'azure', 'bitbucket', 'discord', 'facebook', 'github', 'gitlab', 'google', 'keycloak', 'linkedin', 'notion', 'slack', 'spotify', 'twitch', 'twitter', 'workos']"
import Auth from "./components/Auth/Auth.vue";
</script>

<template>
    <main>
        <Auth
            social-layout="vertical"
            view="sign_in"
            :only-third-party-providers="false"
            :magic-link="false"
            :show-links="true"
            theme="default"
        />
    </main>
</template>

<style scoped></style>
