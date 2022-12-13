<script setup lang="ts">
import { inject } from "vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";
import IconApple from "@/components/icons/IconApple.vue";
import IconAzure from "@/components/icons/IconAzure.vue";
import IconBitBucket from "@/components/icons/IconBitBucket.vue";
import IconDiscord from "@/components/icons/IconDiscord.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconGitlab from "@/components/icons/IconGitlab.vue";
import IconKeycloak from "@/components/icons/IconKeycloak.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconNotion from "@/components/icons/IconNotion.vue";
import IconSlack from "@/components/icons/IconSlack.vue";
import IconSpotify from "@/components/icons/IconSpotify.vue";
import IconTwitch from "@/components/icons/IconTwitch.vue";
import IconTwitter from "@/components/icons/IconTwitter.vue";
import IconWorkos from "@/components/icons/IconWorkos.vue";

const { authView, socialLayout, onlyThirdPartyProviders, providers } = inject("props");
console.log("providers from social auth component", providers, socialLayout);

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
</script>

<template>
    <Container direction="vertical" gap="small">
        <Container :gap="hasVerticalLayout ? 'medium' : 'small'" :direction="socialLayout">
            <Button v-for="provider in providers" :key="provider" type="button" :loading="false" variant="default">
                <component :is="Icons[provider]"></component>
                <template v-if="hasVerticalLayout">{{ authView === "sign_in" ? "Sign in" : "Sign up" }} with {{ provider.charAt(0).toUpperCase() + provider.slice(1) }}</template>
            </Button>
        </Container>
        <template v-if="!onlyThirdPartyProviders">
            <Divider text="or continue using" />
        </template>
    </Container>
</template>

<style scoped></style>

