<script setup lang="ts">
import { inject } from "vue";
import type { AuthProps } from "@/types";
const { appearance } = inject("props") as AuthProps;
</script>

<template>
    <a class="auth-ui__anchor" :class="appearance?.className?.anchor" :style="appearance?.style?.anchor">
        <slot></slot>
    </a>
</template>

