<script setup lang="ts">
import { inject } from "vue";
import type { AuthProps } from "@/types";

defineProps<{
    variant: "default" | "primary";
    type: "button" | "submit";
    loading: boolean;
}>();

const { appearance } = inject("props") as AuthProps;
</script>

<template>
    <button
        :type="type"
        :class="[
            'auth-ui__button',
            `auth-ui__button--${variant}`,
            appearance?.className?.button,
            appearance?.prependedClassName ? `${appearance?.prependedClassName}__button` : '',
        ]"
        :style="appearance?.style?.button"
        :disabled="loading"
    >
        <slot></slot>
    </button>
</template>

