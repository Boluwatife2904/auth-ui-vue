<script setup lang="ts">
interface Props {
    isLoading: boolean;
}

withDefaults(defineProps<Props>(), {
    isLoading: false,
});
</script>

<template>
    <div v-if="isLoading" class="auth-ui__loader">
        <div class="auth-ui__loader__spinner"></div>
    </div>
</template>

