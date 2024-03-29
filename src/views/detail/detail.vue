<!--
 * 详情页
 * @author: xmweijh
 * @since: 2023-04-10
 * detail.vue
-->
<script setup>
import { ref, computed, watch } from "vue"
import { useRouter, useRoute } from 'vue-router';
import { getDetailInfos } from '@/service'
import DetailSwipe from './components/detail-swipe.vue'
import DetailInfos from './components/detail-infos.vue'
import DetailFacility from './components/detail-facility.vue'
import DetailLandlord from './components/detail-landlord.vue'
import DetailComment from './components/detail-comment.vue'
import DetailNotice from './components/detail-notice.vue'
import DetailMap from './components/detail-map.vue'
import DetailIntro from './components/detail-intro.vue'
import useScroll from '@/hooks/useScroll'
import TabControl from "@/components/tab-control/tab-control.vue"

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

// tabControl相关的操作
const detailRef = ref()
const { clientHeight, scrollHeight, scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
    return scrollTop.value >= 300
})

const MaxScroll = computed(() => {
    return scrollHeight.value - clientHeight.value
})

const sectionEls = ref({})
const names = computed(() => {
    return Object.keys(sectionEls.value)
})
const getSectionRef = (value) => {
    if (!value) return
    const name = value.$el.getAttribute("name")
    sectionEls.value[name] = value.$el
}

let isClick = false
let currentDistance = -1
const tabClick = (index) => {
    const key = Object.keys(sectionEls.value)[index]
    const el = sectionEls.value[key]
    let distance = el.offsetTop > MaxScroll.value ? MaxScroll.value : el.offsetTop
    if (index !== 0) {
        distance = distance - 44
    }

    isClick = true
    currentDistance = distance

    detailRef.value.scrollTo({
        top: distance,
        behavior: "smooth"
    })
}

// 页面滚动, 滚动时匹配对应的tabControll的index
// 1.获取所有的区域的offsetTops
const values = computed(() => {
    const els = Object.values(sectionEls.value)
    return els.map(el => el.offsetTop)
})
const tabControlRef = ref()
watch(scrollTop, (newValue) => {
    if (newValue === currentDistance) {
        isClick = false
    }
    if (isClick) return

    // 2.根据newValue去匹配想要索引
    let index = values.value.length - 1
    for (let i = 0; i < values.value.length; i++) {
        if (newValue + 44 < values.value[i]) {
            index = i - 1
            break
        }
    }
    if (index !== tabControlRef.value?.currentIndex)
        tabControlRef.value?.setCurrentIndex(index)
});
</script>

<template>
    <div class="detail" ref="detailRef">
        <tab-control v-if="showTabControl" class="tabs" :titles="names" @tabItemClick="tabClick" ref="tabControlRef" />
        <van-nav-bar title="房屋详情" left-text="客栈" left-arrow @click-left="onClickLeft" />
        <div class="main" v-if="mainPart" v-memo="[mainPart]">
            <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
            <detail-infos name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule" />
            <detail-facility name="设施" :ref="getSectionRef"
                :house-facility="mainPart.dynamicModule.facilityModule.houseFacility" />
            <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule" />
            <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule" />
            <detail-notice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
            <detail-map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule" />
            <detail-intro :price-intro="mainPart.introductionModule" />
        </div>
        <div class="footer">
            <img src="@/assets/img/detail/icon_ensure.png" alt="">
            <div class="text">弘源旅途, 永无止境!</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.detail {
    --van-nav-bar-title-text-color: var(--primary-color);
    position: relative;
    z-index: 1;
    height: 100vh;
    background-color: #fff;
    overflow-y: auto;
}

.tabs {
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    top: 0;
}

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
        width: 123px;
    }

    .text {
        margin-top: 12px;
        font-size: 12px;
        color: #7688a7;
    }
}
</style>
 