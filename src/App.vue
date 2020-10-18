<template>
  <div class="mb-4 mx-auto max-w-md text-center">
    <StyledInput
      v-model:value="phrase"
      label="Phrase"
      type="password"
      placeholder="Your meta password..."
    />
    <StyledInput
      v-model:value="service"
      label="Service"
      placeholder="e.g. Google"
    />
    <button
      class="mx-2 px-4 py-2 text-sm rounded text-white bg-blue-500 focus:outline-none hover:bg-blue-400"
      @click="generate"
    >
      Generate!
    </button>
    <div
      class="bg-orange-lightest border-l-4 border-orange text-orange-dark p-4"
      role="alert"
    >
      <p>{{ password }}</p>
    </div>
  </div>
</template>

<script>
import StyledInput from '@/components/StyledInput'

export default {
  components: { StyledInput }
}
</script>

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

<style lang="postcss">
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
