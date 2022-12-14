<script setup lang="ts">
import { inject } from "vue";
import type { AuthProps } from "@/types";

defineProps<{
    labelFor: string;
    label: string;
}>();

const { appearance } = inject("props") as AuthProps;
</script>

<template>
    <label :for="labelFor" class="auth-ui__label" :class="appearance?.className?.label" :style="appearance?.style?.label">{{ label }}</label>
</template>

