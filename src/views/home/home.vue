<!--
 * 首页
 * @author: xmweijh
 * @since: 2023-03-02
 * home.vue
-->
<script setup>
import useHomeStore from "@/store/modules/home"
import HomeNavBar from "./components/home-nav-bar.vue"
import HomeSearch from "./components/home-search-box.vue"
import HomeCategories from './components/home-categories.vue'
import HomeContent from "./components/home-content.vue"

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()

const moreBtnClick = () => {
  homeStore.fetchHouselistData()
  console.log("more Data")
}
</script>
<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearch></HomeSearch>
    <HomeCategories></HomeCategories>
    <HomeContent></HomeContent>
    <button @click="moreBtnClick">加载更多模拟按钮</button>
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
    overflow: hidden;
  }
}
</style>
