<script setup>
import NavLink from './NavLink/NavLink.vue';
import { routes } from '../../router';
</script>

<template>
  <ul class="navbar">
    <NavLink v-for="route in routes" :key="route.name" :route="route">{{
      route.name.toUpperCase()
    }}</NavLink>
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
