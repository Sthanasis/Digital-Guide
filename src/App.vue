<script setup>
import './assets/base.scss';
import Header from './components/Header/Header.vue';
import Layout from './components/Layout/Layout.vue';
</script>

<template>
  <Header />
  <Layout>
    <router-view />
  </Layout>
</template>

<style></style>
