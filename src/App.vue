<template>
  <input type="password" v-model="phrase" />
  <input v-model="service" />
  <button @click="generate">Go</button>
  <div>{{ password }}</div>
</template>

<script setup>
import { ref } from 'vue'
import Vault from 'vault'

export const phrase = ref('')
export const service = ref('')
export const password = ref('')

export const generate = () => {
  password.value = new Vault({ phrase: phrase.value }).generate(service.value)
}
</script>
