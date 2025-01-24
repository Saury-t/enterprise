<template>
    <!-- 导航栏 -->
    <v-app-bar app :elevation="0">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-toolbar-title>雪之妍</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tabs v-model="tab" v-if="!drawer" class="d-none d-sm-block">
            <v-tab value="one" :to="{ name: 'home' }">{{ $t('messages.Home') }}</v-tab>
            <v-tab value="two" :to="{ name: 'about' }">关于我们</v-tab>
            <v-tab value="three" :to="{ name: 'product' }">产品详情</v-tab>
            <v-tab value="four" :to="{ name: 'contact' }">联系我们</v-tab>
            <zh-en style="width: 120px;" />
        </v-tabs>

    </v-app-bar>

    <!-- 侧边栏 -->
    <v-navigation-drawer v-model="drawer" app clipped>
        <v-list>
            <v-list-item v-for="item in items" :key="item.title" :value="item.value" :to="item.route">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
        <div class="language-switch">
            <v-divider></v-divider>
            <div class="pa-4">
                <zh-en />
            </div>
        </div>
    </v-navigation-drawer>
</template>

<script>
import ZhEn from './ZhEn.vue';

export default {
    name: 'IndexPage',
    components: {
        ZhEn
    },
    data: () => ({
        tab: null,
        drawer: false,
        items: [
            { title: '首页', value: 'one', route: '/' },
            { title: '关于我们', value: 'two', route: 'about' },
            { title: '产品详情', value: 'three', route: 'product' },
            { title: '联系我们', value: 'four', route: 'contact' }
        ]
    })
}
</script>

<style>
.drawer-content {
    height: calc(100% - 64px);
    /* 减去语言切换区域的高度 */
    overflow-y: auto;
}

.language-switch {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
}

/* 确保分割线显示正确 */
.v-divider {
    margin: 0;
}
</style>
