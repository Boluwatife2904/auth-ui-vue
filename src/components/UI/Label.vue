<script setup lang="ts">
interface Props {
    labelFor: string;
    label: string;
}

defineProps<Props>();
</script>

<template>
    <label :for="labelFor" class="auth-ui__label">{{ label }}</label>
</template>


