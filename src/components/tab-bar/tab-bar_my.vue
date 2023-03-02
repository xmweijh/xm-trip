<!--
 * 底部tabbar
 * @author: xmweijh
 * @since: 2023-03-02
 * tab-bar.vue
-->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import tabbarData from "@/assets/data/tabbar.js"
import { getAssetURL } from "@/utils/load_assets.js"

const router = useRouter()
const currentIndex = ref(0);
const itemClick = (path, index) => {
    currentIndex.value = index
    router.push(path)
}


</script>

<template>
    <div class="tab-bar">
        <template v-for="(item, index) in tabbarData" :key="index">
            <div class="tab-bar__item" :class="currentIndex === index && 'is-activate'" @click="itemClick(item.path, index)">
                <img v-if="currentIndex === index" :src="getAssetURL(item.imageActive)" alt="">
                <img v-else :src="getAssetURL(item.image)" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template>
    </div>
</template>


<style scoped lang="scss">
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #f3f3f3;

    &__item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.is-activate {
            color: var(--primary-color);
        }

        .text {
            margin-top: 5px;
            font-size: 12px;
        }

        img {
            width: 32px;
        }
    }
}
</style>
