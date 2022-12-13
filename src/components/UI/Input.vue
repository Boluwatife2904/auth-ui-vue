<script setup lang="ts">
interface Props {
    name: string;
    id: string;
    type: "text" | "email" | "password";
    modelValue: string;
}

defineProps<Props>();

interface Emits {
    (e: "update:modelValue", value: string): void;
}

defineEmits<Emits>();
</script>

<template>
    <input :type="type" :name="name" :id="id" class="auth-ui__input" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>

