<template>
  <div class="mb-4 mx-auto max-w-md text-center">
    <h2 class="text-2xl text-bold my-3">
      PassGen
    </h2>
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

    <div class="w-full flex my-3">
      <div class="bg-yellow-300 flex items-center px-4 py-2 border border-r-0 rounded-l text-sm font-medium text-gray-800 select-none">
        Password
      </div>
      <div class="flex-1">
        <input
          class="w-full border px-4 py-2 outline-none"
          placeholder="Generated Password"
          type="password"
          :value="password"
          readonly
        >
      </div>
      <button
        class="px-4 py-2 text-sm rounded-r text-white focus:outline-none"
        :class="[
          copied ? 'bg-green-500' : 'bg-teal-500',
          copied ? 'hover:bg-green-400' : 'hover:bg-teal-400'
        ]"
        @click="copy"
      >
        {{ copied ? 'Copied!' : 'Copy!' }}
      </button>
    </div>
    <button
      class="mx-2 px-4 py-2 text-sm rounded text-white bg-blue-500 focus:outline-none hover:bg-blue-400"
      @click="generate"
    >
      Generate!
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
export const copied = ref(false)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const generate = () => {
  password.value = new Vault({ phrase: phrase.value }).generate(service.value)
}

export const copy = async () => {
  await navigator.clipboard.writeText(password.value)
  copied.value = true
  await sleep(3000)
  copied.value = false
}
</script>

<style lang="postcss">
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
