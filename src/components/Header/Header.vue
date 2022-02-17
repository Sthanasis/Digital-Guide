<script setup>
import NavLink from './NavLink/NavLink.vue';
import { routes } from '../../router';
</script>

<template>
  <ul class="navbar">
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      custom
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <NavLink
        :href="href"
        @navigate="navigate"
        :isActive="isActive"
        :isExactActive="isExactActive"
        >{{ route.name.toUpperCase() }}</NavLink
      >
    </router-link>
  </ul>
</template>

<style lang="scss" scoped>
.navbar {
  height: 65px;
  z-index: 10;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
}

ul {
  list-style-type: none;
}
</style>
