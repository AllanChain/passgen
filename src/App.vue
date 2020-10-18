<template>
  <div class="mb-4 px-2 w-full">
    <StyledInput
      label="Phrase"
      placeholder="Your meta password..."
    />
    <StyledInput
      label="Service"
      placeholder="e.g. Google"
    />
    <button class="mx-2 px-4 py-2 text-sm rounded text-white bg-blue-500 focus:outline-none hover:bg-blue-400">
      Primary
    </button>
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
