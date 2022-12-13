<script setup lang="ts">
interface Props {
    text?: string;
}

defineProps<Props>();
</script>

<template>
    <div class="auth-ui__divider">
        <span :class="!!text ? 'has-spacing' : ''">{{ text }}</span>
    </div>
</template>

