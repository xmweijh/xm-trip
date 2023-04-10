<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue";
import Loading from "@/components/loading/loading.vue";
import { useRoute } from "vue-router";

const route = useRoute()
</script>

<template>
  <router-view />
  <tab-bar v-show="!route.meta.hideTabBar"></tab-bar>
  <loading></loading>

</template>

<style scoped></style>
