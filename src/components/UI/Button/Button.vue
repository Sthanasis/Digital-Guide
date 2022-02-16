<script setup>
defineProps({
  title: String,
});
const emit = defineEmits({
  clicked: {
    require: true,
  },
});

function handleClick() {
  emit('clicked');
}
</script>

<template>
  <button @click="handleClick">
    {{ title && title }}
    <slot name="children" />
  </button>
</template>
