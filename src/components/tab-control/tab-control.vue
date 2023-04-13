<!--
 * tab跳转
 * @author: xmweijh
 * @since: 2023-04-12
 * tab-control.vue
-->
<script setup>
import { ref } from 'vue'
defineProps({
    titles: {
        type: Array,
        default: () => []
    }
})

let currentIndex = ref(0)

let emit = defineEmits(["tabItemClick"])

function itemClick(index) {
    currentIndex.value = index
    emit("tabItemClick", index)
}
function setCurrentIndex(index) {
    currentIndex.value = index
};
defineExpose({currentIndex, setCurrentIndex});
</script>

<template>
    <div class="tab-control">
        <template v-for="(item, index) in titles" :key="item">
            <div class="tab-control-item" :class="{ active: index === currentIndex }" @click="itemClick(index)">
                <span>{{ item }}</span>
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
.tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #fff;
}

.tab-control-item {
    flex: 1;
}

.tab-control-item.active {
    color: var(--primary-color);
    font-weight: 700;
}

.tab-control-item.active span {
    border-bottom: 3px solid var(--primary-color);
    padding: 8px;
}
</style>
