<!--
 * 首页
 * @author: xmweijh
 * @since: 2023-03-02
 * home.vue
-->
<script setup>
import { onActivated, ref, watch, computed } from 'vue'
import useHomeStore from "@/store/modules/home"
import HomeNavBar from "./components/home-nav-bar.vue"
import HomeSearch from "./components/home-search-box.vue"
import HomeCategories from './components/home-categories.vue'
import HomeContent from "./components/home-content.vue"
import SearchBar from '@/components/search-bar/search-bar.vue'
import useScroll from "@/hooks/useScroll"

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()

// 监听滚动到底部
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框显示的控制
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
});
</script>

<template>
  <div class="home" ref="homeRef">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearch></HomeSearch>
    <HomeCategories></HomeCategories>
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :start-date="'09.19'" :end-date="'09.20'" />
    </div>
    <HomeContent></HomeContent>
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
