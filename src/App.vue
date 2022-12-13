<script setup lang="ts">
// :providers="['apple', 'azure', 'bitbucket', 'discord', 'facebook', 'github', 'gitlab', 'google', 'keycloak', 'linkedin', 'notion', 'slack', 'spotify', 'twitch', 'twitter', 'workos']"
import Auth from "./components/Auth/Auth.vue";
</script>

<template>
    <main>
        <Auth
            social-layout="vertical"
            view="forgotten_password"
            :only-third-party-providers="false"
            :magic-link="true"
            :show-links="true"
            theme="default"
            :localization="{ lang: 'en' }"
        />
    </main>
</template>

<style scoped></style>
