<script setup lang="ts">
import { inject } from "vue";
import type { AuthProps } from "@/types";

defineProps<{
    text?: string;
}>();

const { appearance } = inject("props") as AuthProps;
</script>

<template>
    <div class="auth-ui__divider" :class="[appearance?.className?.divider, appearance?.prependedClassName ? `${appearance?.prependedClassName}__divider` : '']" :style="appearance?.style?.divider">
        <span :class="!!text ? 'has-spacing' : ''">{{ text }}</span>
    </div>
</template>

