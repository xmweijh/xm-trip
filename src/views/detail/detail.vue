<!--
 * 详情页
 * @author: xmweijh
 * @since: 2023-04-10
 * detail.vue
-->
<script setup>
import { ref, computed } from "vue"
import { useRouter, useRoute } from 'vue-router';
import { getDetailInfos } from '@/service'
import DetailSwipe from './components/detail-swipe.vue'

const router = useRouter()
const route = useRoute()
const houseId = route.params.id

// 发送网络请求获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})

// 监听返回按钮的点击
const onClickLeft = () => {
    router.back()
};
</script>

<template>
    <div class="detail">
        <van-nav-bar title="房屋详情" left-text="客栈" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="main" v-if="mainPart">
        <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>    
    </div>
</template>

<style scoped lang="scss">
.detail {
    --van-nav-bar-title-text-color: var(--primary-color);
}
</style>
 