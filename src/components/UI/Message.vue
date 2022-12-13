<script setup lang="ts">
interface Props {
    color: "default" | "danger";
}

defineProps<Props>();
</script>

<template>
    <span :class="['auth-ui__message', `auth-ui__message--${color}`]"><slot></slot></span>
</template>

