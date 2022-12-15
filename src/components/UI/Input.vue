<script setup lang="ts">
import { inject } from "vue";
import type { AuthProps } from "@/types";

defineProps<{
    name: string;
    id: string;
    type: "text" | "email" | "password";
    modelValue: string;
    placeholder: string;
}>();

defineEmits<{
    (e: "update:modelValue", value: string): void;
}>();

const { appearance } = inject("props") as AuthProps;
</script>

<template>
    <input
        :type="type"
        :name="name"
        :id="id"
        class="auth-ui__input"
        :placeholder="placeholder"
        :class="[appearance?.className?.input, appearance?.prependedClassName ? `${appearance?.prependedClassName}__input` : '']"
        :style="appearance?.style?.input"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        required
    />
</template>

