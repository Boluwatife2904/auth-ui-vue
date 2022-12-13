<script setup lang="ts">
import { ref } from "vue";
import Input from "@/components/UI/Input.vue";
import Label from "@/components/UI/Label.vue";
import Button from "@/components/UI/Button.vue";
import Message from "@/components/UI/Message.vue";
import Container from "@/components/UI/Container.vue";
import Anchor from "@/components/UI/Anchor.vue";
import Divider from "@/components/UI/Divider.vue";
// import Loader from "@/components/UI/Loader.vue";

const email = ref("");
const password = ref("");

const changeView = (view: string) => {
    console.log(view);
};
</script>

<template>
    <form>
        <Container direction="vertical" gap="large">
            <!-- <Divider text="or continue using" /> -->
            <div>
                <Label label-for="email" label="Email" />
                <Input v-model="email" name="email" id="email" type="email" />
            </div>
            <div>
                <Label label-for="password" label="Password" />
                <Input v-model="password" name="password" id="password" type="password" />
            </div>
            <Button type="button" :loading="true" variant="primary">Submit</Button>
            <Message color="default">Hello World</Message>
            <Anchor href="#forgot-password" @click.prevent="changeView('forgot-password')"> Forgot your password? </Anchor>
            <Anchor href="#sign-up" @click.prevent="changeView('sign-up')"> Don't have an account? Sign up </Anchor>
            <!-- <Loader /> -->
        </Container>
    </form>
</template>

<style scoped></style>

