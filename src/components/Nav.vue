<template>
    <!-- 导航栏 -->
    <header role="banner">
        <v-app-bar app :elevation="0">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer">
            </v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <nav aria-label="主导航菜单" class="d-none d-sm-block">
                <v-tabs v-model="tab" v-if="!drawer">
                    <v-tab value="one" :to="{ name: 'home' }">{{ $t('messages.Home') }}</v-tab>
                    <v-tab value="two" :to="{ name: 'about' }">{{ $t('messages.About') }}</v-tab>
                    <v-tab value="three" :to="{ name: 'product' }">{{ $t('messages.Product') }}</v-tab>
                    <v-tab value="four" :to="{ name: 'contact' }">{{ $t('messages.Contact') }}</v-tab>
                    <zh-en style="width: 120px;" />
                </v-tabs>
            </nav>
        </v-app-bar>

        <!-- 侧边栏 -->
        <nav aria-label="移动端导航菜单">
            <v-navigation-drawer v-model="drawer" app clipped>
                <!-- 主要导航内容 -->
                <div class="drawer-content">
                    <v-list>
                        <v-list-item v-for="item in items" :key="item.title" :value="item.value" :to="item.route">
                            <v-list-item-title>{{ $t(item.i18nKey) }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </div>

                <!-- 底部语言切换 -->
                <div class="language-switch">
                    <v-divider></v-divider>
                    <div class="pa-4">
                        <zh-en />
                    </div>
                </div>
            </v-navigation-drawer>
        </nav>
    </header>
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
            {
                title: '首页',
                value: 'one',
                route: '/',
                i18nKey: 'messages.Home'
            },
            {
                title: '关于我们',
                value: 'two',
                route: 'about',
                i18nKey: 'messages.About'
            },
            {
                title: '产品详情',
                value: 'three',
                route: 'product',
                i18nKey: 'messages.Product'
            },
            {
                title: '联系我们',
                value: 'four',
                route: 'contact',
                i18nKey: 'messages.Contact'
            }
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
