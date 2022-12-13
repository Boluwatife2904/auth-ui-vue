<script setup lang="ts">
interface Props {
    variant: "default" | "primary";
    type: "button" | "submit";
    loading: boolean;
}

defineProps<Props>();
</script>

<template>
    <button :type="type" :class="['auth-ui__button', `auth-ui__button--${variant}`]" :disabled="false"><slot></slot></button>
</template>

