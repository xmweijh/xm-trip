<!--
 * 搜索
 * @author: xmweijh
 * @since: 2023-03-07
 * home-search-box.vue
-->
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const cityClick = ()=> {
    router.push("/city")
}

const getPosition = ()=> {
    navigator.geolocation.getCurrentPosition(res=>{
    console.log(res)
})
}

</script>

<template>
     <div class="location">
    <div class="location__city" @click="cityClick">重庆</div>
    <div class="location__position" @click="getPosition">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </div>
   </div>
</template>

<style scoped lang="scss">
.location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    
    &__city {
      padding-left: 10px;
      font-weight: 700;
      font-size: 14px;
    }

    &__position {
      width: 84px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      img {
        margin-left: 10px;
        width: 18px;
        height: 18px;
      }
    }
  }
</style>
