<script setup lang="ts">
// :providers="['apple', 'azure', 'bitbucket', 'discord', 'facebook', 'github', 'gitlab', 'google', 'keycloak', 'linkedin', 'notion', 'slack', 'spotify', 'twitch', 'twitter', 'workos']"
import Auth from "./components/Auth/Auth.vue";
import { createClient } from "@supabase/supabase-js";
import { ThemeSupa } from "./theming/defaultThemes";
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
            :localization="{ lang: 'en' }"
            theme="default"
            :appearance="{
                theme: ThemeSupa,
            }"
            :providers="['google']"
            redirect-to="http://127.0.0.1:5173/"
        />
    </main>
</template>

<style scoped></style>
