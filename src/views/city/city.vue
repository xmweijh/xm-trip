<!--
 * city页面
 * @author: xmweijh
 * @since: 2023-03-07
 * city.vue
-->
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getCityAll } from "@/service"

const router = useRouter()

// 搜索框功能
const searchValue = ref("")
const cancelClick = () => {
    router.back()
}

// tab的切换
const tabActive = ref(0);
/**
 * 这个位置发送网络请求有两个缺点:
 *   1.如果网络请求太多, 那么页面组件中就包含大量的对于网络请求和数据的处理逻辑
 *   2.如果页面封装了很多的子组件, 子组件需要这些数据, 我们必须一步步将数据传递过去(props)
 */
// 网络请求: 请求城市的数据
const allCity = ref({})
getCityAll().then(res => {
    allCity.value = res.data
})

</script>

<template>
    <div class="city top-page">
        <div class="top">
            <!-- 1.搜索框 -->
            <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick" />

            <!-- 2.tab的切换 -->
            <!-- tabActive默认索引 -->
            <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
                <template v-for="(value, key, index) in allCity" :key="key">
                    <van-tab :title="value.title" :name="key"></van-tab>
                </template>
            </van-tabs>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
