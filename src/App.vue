<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue";
import { useRoute } from "vue-router";

const route = useRoute()
</script>

<template>
  <router-view />
  <tab-bar v-show="!route.meta.hideTabBar"></tab-bar>

</template>

<style scoped></style>
