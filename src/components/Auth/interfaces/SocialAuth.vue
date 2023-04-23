<script setup lang="ts">
import { inject, ref } from "vue";
import type { I18nVariables, AuthProps, AuthEmits, ViewProps } from "@/types";
import type { Provider } from "@supabase/supabase-js";

import Container from "@/components/UI/Container.vue";
import Button from  "@/components/UI/Button.vue";
import Divider from "@/components/UI/Divider.vue";

import IconApple from "@/components/icons/IconApple.vue";
import IconAzure from "@/components/icons/IconAzure.vue";
import IconBitBucket from "@/components/icons/IconBitBucket.vue";
import IconDiscord from "@/components/icons/IconDiscord.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconGitlab from "@/components/icons/IconGitlab.vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";
import IconKeycloak from "@/components/icons/IconKeycloak.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconNotion from "@/components/icons/IconNotion.vue";
import IconSlack from "@/components/icons/IconSlack.vue";
import IconSpotify from "@/components/icons/IconSpotify.vue";
import IconTwitch from "@/components/icons/IconTwitch.vue";
import IconTwitter from "@/components/icons/IconTwitter.vue";
import IconWorkos from "@/components/icons/IconWorkos.vue";

defineProps<{
    i18n: I18nVariables;
}>();

const { socialLayout, onlyThirdPartyProviders, providers, redirectTo, supabaseClient } = inject("props") as AuthProps;
const { authView } = inject("view") as ViewProps;
const emits = inject("emits") as AuthEmits;

const hasVerticalLayout = socialLayout === "vertical";

const Icons = {
    apple: IconApple,
    azure: IconAzure,
    bitbucket: IconBitBucket,
    discord: IconDiscord,
    facebook: IconFacebook,
    github: IconGithub,
    gitlab: IconGitlab,
    google: IconGoogle,
    keycloak: IconKeycloak,
    linkedin: IconLinkedin,
    notion: IconNotion,
    slack: IconSlack,
    spotify: IconSpotify,
    twitch: IconTwitch,
    twitter: IconTwitter,
    workos: IconWorkos,
};

const error = ref("");
const isLoading = ref(false);

const authenticateWithProvider = async (provider: Provider) => {
    isLoading.value = true;
    emits("set-loading", true);
    const { error: authenticateWithProviderError } = await supabaseClient.auth.signInWithOAuth({
        provider,
        options: { redirectTo },
    });
    if (authenticateWithProviderError) {
        error.value = authenticateWithProviderError.message;
    }
    isLoading.value = false;
    emits("set-loading", false);
};
</script>

<template>
    <Container direction="vertical" gap="small">
        <Container :gap="hasVerticalLayout ? 'medium' : 'small'" :direction="socialLayout">
            <Button v-for="provider in providers" :key="provider" type="button" :loading="isLoading" variant="default" @click="authenticateWithProvider(provider)">
                <component :is="Icons[provider]"></component>
                <template v-if="hasVerticalLayout"
                    >{{ i18n[authView as "sign_in" | "sign_up"]?.social_provider_text }} {{ provider.charAt(0).toUpperCase() + provider.slice(1) }}</template
                >
            </Button>
        </Container>
        <Divider v-if="!onlyThirdPartyProviders" text="or" />
    </Container>
</template>

<style scoped></style>

