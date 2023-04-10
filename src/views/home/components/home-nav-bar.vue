<!--
 * 首页导航栏
 * @author: xmweijh
 * @since: 2023-03-02
 * home-nav-bar.vue
-->
<script setup></script>

<template>
   <div class="nav-bar">
      <div class="nav-bar__title">虾米客栈</div>
    </div>
</template>

<style scoped lang="scss">
 .nav-bar {
      display:flex;
      justify-content: center;
      align-items: center;
      height: 46px;
      width: 100%;
      background-color: #fff;
      border-bottom: 1px solid var(--primary-color);

      &__title {
        color: var(--primary-color);
        font-size: 18px;
        font-weight: 700;
      }
    }
</style>
