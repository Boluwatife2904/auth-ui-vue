<script setup lang="ts">
interface Props {
    direction?: "horizontal" | "vertical";
    gap?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
}

defineProps<Props>();
</script>

<template>
    <section :class="['auth-ui__container', `auth-ui__container--${direction}`, `auth-ui__container--gap-${gap}`]">
        <slot></slot>
    </section>
</template>

