<script setup lang="ts">
import { inject } from "vue";
import type { AuthProps } from "@/types";

defineProps<{
    color: "default" | "danger";
}>();

const { appearance } = inject("props") as AuthProps;
</script>

<template>
    <span :class="['auth-ui__message', `auth-ui__message--${color}`, appearance?.className?.message]" :style="appearance?.style?.message"><slot></slot></span>
</template>

