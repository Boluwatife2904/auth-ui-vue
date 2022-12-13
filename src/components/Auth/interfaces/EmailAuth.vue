<script setup lang="ts">
import { ref, inject } from "vue";
import SocialAuth from "./SocialAuth.vue";
// import Loader from "@/components/UI/Loader.vue";
import type { I18nVariables } from "@/types";

defineProps<{
    i18n: I18nVariables;
}>();

const email = ref("");
const password = ref("");

const { showLinks, onlyThirdPartyProviders, providers, magicLink } = inject("props");
const { authView, changeView } = inject("view");

</script>

<template>
    <form>
        <SocialAuth :i18n="i18n" v-if="providers && providers.length > 0" />
        <Container v-if="!onlyThirdPartyProviders" direction="vertical" gap="large">
            <div>
                <Label label-for="email" :label="i18n[authView]?.email_label" />
                <Input v-model="email" name="email" id="email" type="email" :placeholder="i18n[authView]?.email_input_placeholder" />
            </div>
            <div>
                <Label label-for="password" :label="i18n[authView]?.password_label" />
                <Input v-model="password" name="password" id="password" type="password" :placeholder="i18n[authView]?.password_input_placeholder" />
            </div>
            <Button type="button" :loading="false" variant="primary">{{ i18n[authView]?.button_label }}</Button>
            <template v-if="showLinks">
                <Anchor v-if="magicLink && authView === 'sign_in'" href="#auth-magic-link" @click.prevent="changeView('magic_link')"> {{ i18n["magic_link"]?.link_text }} </Anchor>
                <Anchor v-if="authView === 'sign_in'" href="#auth-forgot-password" @click.prevent="changeView('forgotten_password')"
                    >{{ i18n["forgotten_password"]?.link_text }}
                </Anchor>
                <Anchor v-if="authView === 'sign_in'" href="#auth-sign-up" @click.prevent="changeView('sign_up')"> {{ i18n["sign_up"]?.link_text }} </Anchor>
                <Anchor v-else-if="authView === 'sign_up'" href="#auth-sign-in" @click.prevent="changeView('sign_in')"> {{ i18n["sign_in"]?.link_text }} </Anchor>
            </template>
            <!-- <Loader /> -->
        </Container>
    </form>
</template>

<style scoped></style>

