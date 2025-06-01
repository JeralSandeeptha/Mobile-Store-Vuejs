<script lang="ts" setup>
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../../config/firebase.ts';
import { ref } from 'vue';

const email = ref<string>();
const password = ref<string>();

const registerUser = async () => {
    console.log('Registered');
    try {
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                // ✅ Send email verification
                sendEmailVerification(user)
                .then(() => {
                    console.log("Verification email sent!");
                });
            })
            .catch((error) => {
                console.error(error.message);
            });
    } catch (error) {
        console.log(error);
    }
}

</script>

<template>
    <h1>Register</h1>
    <input type="text" v-model="email">
    <input type="text" v-model="password">
    <button @click="registerUser">Register</button>
</template>

<style scoped>
/* Optional styles */
</style>
