<script lang="ts" setup>
import { ref } from 'vue';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const auth = getAuth();

const password = ref<string>();
const email = ref<string>();

const passwordResetHandler = () => {
    console.log('Clicked');
    sendPasswordResetEmail(auth, email.value)
      .then(() => {
        console.log('Reset Email Sent');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}
</script>

<template>
  <div>
    <h1>Send Password Change Email</h1>
    <input type="text" v-model="email">
    <button @click="passwordResetHandler">Send Reset Email</button>

    <br>
    <h1>Forgot Password</h1>
    <input type="text" v-model="password">
    <button>Change Password</button>
  </div>
</template>

<style scoped>
/* Optional styles */
</style>
