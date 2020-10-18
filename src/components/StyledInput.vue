<template>
  <div class="w-full flex my-3">
    <div class="bg-gray-100 flex items-center px-4 py-2 border border-r-0 rounded-l text-sm font-medium text-gray-800 select-none">
      {{ label }}
    </div>
    <div class="flex-1">
      <input
        class="w-full border px-4 py-2 rounded-r focus:border-blue-500 focus:shadow-outline outline-none"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  emits: [
    'update:value'
  ]
}
</script>

<style>

</style>
