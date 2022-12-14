<script setup lang="ts">
// :providers="['apple', 'azure', 'bitbucket', 'discord', 'facebook', 'github', 'gitlab', 'google', 'keycloak', 'linkedin', 'notion', 'slack', 'spotify', 'twitch', 'twitter', 'workos']"
import Auth from "./components/Auth/Auth.vue";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
</script>

<template>
    <main>
        <Auth
            :supabase-client="supabase"
            social-layout="vertical"
            view="sign_in"
            :only-third-party-providers="false"
            :magic-link="true"
            :show-links="true"
            theme="default"
            :localization="{ lang: 'en' }"
        />
    </main>
</template>

<style scoped></style>
