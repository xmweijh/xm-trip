<!--
 * categories
 * @author: xmweijh
 * @since: 2023-04-04
 * home-categories.vue
-->
<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore);
</script>

<template>
    <div class="categories">
      <template v-for="(item, index) in categories" :key="item.id">
        <div class="item">
          <img :src="item.pictureUrl" alt="">
          <div class="text">{{ item.title }}</div>
        </div>
      </template>
    </div>
  </template>

<style scoped lang="scss">
.categories {
    display: flex;
    overflow-x: auto;
    height: 80px;
    padding: 0 10px;
    margin-top: 8px;

    &::-webkit-scrollbar {
        display: none;
    }

    .item {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 70px;
        text-align: center;

        img {
            width: 32px;
            height: 32px;
        }

        .text {
            font-size: 12px;
            margin-top: 8px;
        }
    }
}
</style>
