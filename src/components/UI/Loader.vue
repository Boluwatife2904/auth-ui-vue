<script setup lang="ts">
import { inject } from "vue";
import type { AuthProps } from "@/types";

withDefaults(
    defineProps<{
        isLoading: boolean;
    }>(),
    {
        isLoading: false,
    }
);

const { appearance } = inject("props") as AuthProps;
</script>

<template>
    <div v-if="isLoading" class="auth-ui__loader" :class="appearance?.className?.loader" :style="appearance?.style?.loader">
        <div class="auth-ui__loader__spinner"></div>
    </div>
</template>

