<template>
    <footer role="contentinfo" class="bg-black pt-16 pb-4">
        <v-container>
            <v-row>
                <!-- 产品系列 -->
                <v-col cols="12" md="3">
                    <h3 class="text-h6 font-weight-bold white--text mb-4">产品系列</h3>
                    <v-list density="compact" class="bg-black pa-0">
                        <v-list-item 
                            v-for="(item, i) in products" 
                            :key="i"
                            :title="item"
                            class="px-0"
                            style="min-height: 35px;"
                        >
                            <template v-slot:title>
                                <span class="text-grey-lighten-1">{{ item }}</span>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-col>

                <!-- 购物指南 -->
                <v-col cols="12" md="3">
                    <h3 class="text-h6 font-weight-bold white--text mb-4">购物指南</h3>
                    <v-list density="compact" class="bg-black pa-0">
                        <v-list-item 
                            v-for="(item, i) in shoppingGuide" 
                            :key="i"
                            class="px-0"
                            style="min-height: 35px;"
                        >
                            <template v-slot:title>
                                <span class="text-grey-lighten-1">{{ item }}</span>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-col>

                <!-- 关于我们 -->
                <v-col cols="12" md="3">
                    <h3 class="text-h6 font-weight-bold white--text mb-4">关于我们</h3>
                    <v-list density="compact" class="bg-black pa-0">
                        <v-list-item 
                            v-for="(item, i) in aboutUs" 
                            :key="i"
                            :title="item"
                            class="px-0"
                            style="min-height: 35px;"
                        >
                            <template v-slot:title>
                                <span class="text-grey-lighten-1">{{ item }}</span>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-col>

                <!-- 联系我们 -->
                <v-col cols="12" md="3">
                    <h3 class="text-h6 font-weight-bold white--text mb-4">联系我们</h3>
                    <p class="text-h5 font-weight-bold white--text mb-6">400-888-8888</p>
                    <div class="d-flex gap-4 mb-4">
                        <div v-for="(qr, i) in qrCodes" :key="i" class="text-center">
                            <v-img :src="qr.img" width="100" height="100" class="mb-2"></v-img>
                            <span class="text-caption text-grey-lighten-1">{{ qr.title }}</span>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <!-- 版权信息 -->
            <v-row class="mt-8">
                <v-col cols="12" class="text-center">
                    <v-divider class="mb-4" color="grey-darken-3"></v-divider>
                    <p class="text-caption text-grey-lighten-1 mb-2">版权所有 © {{ new Date().getFullYear() }} 雪之妍 保留所有权利</p>
                    <p class="text-caption text-grey-lighten-1">浙ICP备案号：浙ICP备XXXXXXXX号</p>
                </v-col>
            </v-row>
        </v-container>
    </footer>
</template>

<script>
export default {
    name: 'FootPage',
    data: () => ({
        products: [
            '文胸系列',
            '内裤系列',
            '家居服系列',
            '睡衣系列',
            '塑身系列'
        ],
        shoppingGuide: [
            '尺码对照表',
            '洗涤说明',
            '订购指南',
            '支付方式',
            '配送说明'
        ],
        aboutUs: [
            '品牌故事',
            '实体店铺',
            '加盟合作',
            '招聘信息',
            '联系我们'
        ],
        qrCodes: [
            { img: '/qr-code1.png', title: '官方微信' },
            { img: '/qr-code2.png', title: '天猫旗舰店' }
        ]
    })
}
</script>

<style scoped>
.v-footer {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.v-list-item {
    cursor: pointer;
}

.v-list-item:hover .text-grey-lighten-1 {
    color: white !important;
    transition: color 0.3s ease;
}

/* 确保链接可点击 */
.v-list-item {
    opacity: 0.8;
}

.v-list-item:hover {
    opacity: 1;
}
</style>