<!--
 * 首页
 * @author: xmweijh
 * @since: 2023-03-02
 * home.vue
-->
<script setup>
  import HomeNavBar from "./components/home-nav-bar.vue"
  import HomeSearch from "./components/home-search-box.vue"
</script>
<template>
  <div class="home">
   <HomeNavBar></HomeNavBar>
   <div class="banner">
    <img src="@/assets/img/home/banner.webp" alt="">
   </div>
   <HomeSearch></HomeSearch>
  </div>
</template>


<style lang="scss" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}
.banner {
  img {
    width: 100%;
  }
}

</style>
