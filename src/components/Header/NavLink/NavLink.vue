<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
  },
  isExactActive: {
    type: Boolean,
  },
  href: {
    type: String,
  },
});

const emits = defineEmits({
  navigate: {
    require: true,
  },
});

const handleNavigate = (e) => {
  e.preventDefault();
  emits('navigate');
};
</script>

<template>
  <li
    :class="[
      props.isActive && 'active',
      props.isExactActive && 'router-link-exact-active',
      'nav-item',
    ]"
  >
    <a :href="props.href" @click="handleNavigate">
      <slot> </slot>
    </a>
  </li>
</template>

<style scoped lang="scss">
.nav-item {
  text-decoration: none;
  margin: 0 10px;
  a {
    text-decoration: none;
  }
}

.active {
  a {
    color: var(--color-active);
  }
}
</style>
