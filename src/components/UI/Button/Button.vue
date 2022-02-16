<script setup>
import { reactive } from 'vue';

const props = defineProps({
  title: String,
  btnType: String,
});

const state = reactive({
  classlist: ['btn'],
});

const emit = defineEmits({
  clicked: {
    require: true,
  },
});

if (props.btnType) {
  state.classlist.push(props.btnType);
}

function handleClick() {
  emit('clicked');
}
</script>

<template>
  <button :class="state.classlist.join(' ')" @click="handleClick">
    {{ title && title }}
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 8px 15px;
}

.danger {
  background-color: var(--color-danger);
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    box-shadow: 0px 0px 2px 4px rgba(211, 123, 123, 0.5),
      0px 0px 2px 4px rgba(163, 91, 91, 0.5);
  }
}
</style>
