<script setup lang="ts">
import { inject, ref, defineAsyncComponent } from "vue";
import type { I18nVariables, AuthProps, AuthEmits, ViewProps } from "@/types";
import type { Provider } from "@supabase/supabase-js";

import Container from "@/components/UI/Container.vue";
import Button from  "@/components/UI/Button.vue";
import Divider from "@/components/UI/Divider.vue";

const IconApple = defineAsyncComponent(() => import("@/components/icons/IconApple.vue"));
const IconAzure = defineAsyncComponent(() => import("@/components/icons/IconAzure.vue"));
const IconBitBucket = defineAsyncComponent(() => import("@/components/icons/IconBitBucket.vue"));
const IconDiscord = defineAsyncComponent(() => import("@/components/icons/IconDiscord.vue"));
const IconFacebook = defineAsyncComponent(() => import("@/components/icons/IconFacebook.vue"));
const IconGithub = defineAsyncComponent(() => import("@/components/icons/IconGithub.vue"));
const IconGitlab = defineAsyncComponent(() => import("@/components/icons/IconGitlab.vue"));
const IconGoogle = defineAsyncComponent(() => import("@/components/icons/IconGoogle.vue"));
const IconKeycloak = defineAsyncComponent(() => import("@/components/icons/IconKeycloak.vue"));
const IconLinkedin = defineAsyncComponent(() => import("@/components/icons/IconLinkedin.vue"));
const IconNotion = defineAsyncComponent(() => import("@/components/icons/IconNotion.vue"));
const IconSlack = defineAsyncComponent(() => import("@/components/icons/IconSlack.vue"));
const IconSpotify = defineAsyncComponent(() => import("@/components/icons/IconSpotify.vue"));
const IconTwitch = defineAsyncComponent(() => import("@/components/icons/IconTwitch.vue"));
const IconTwitter = defineAsyncComponent(() => import("@/components/icons/IconTwitter.vue"));
const IconWorkos = defineAsyncComponent(() => import("@/components/icons/IconWorkos.vue"));

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

