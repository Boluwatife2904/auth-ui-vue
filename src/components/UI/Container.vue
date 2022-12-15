<script setup lang="ts">
import { inject } from "vue";
import type { AuthProps } from "@/types";

defineProps<{
    direction?: "horizontal" | "vertical";
    gap?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
}>();

const { appearance } = inject("props") as AuthProps;
</script>

<template>
    <section
        :class="[
            'auth-ui__container',
            `auth-ui__container--${direction}`,
            `auth-ui__container--gap-${gap}`,
            appearance?.className?.container,
            appearance?.prependedClassName ? `${appearance?.prependedClassName}__container` : '',
        ]"
        :style="appearance?.style?.container"
    >
        <slot></slot>
    </section>
</template>

