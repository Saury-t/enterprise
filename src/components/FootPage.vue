<template>
    <footer role="contentinfo" class="bg-black pt-16 pb-4">
        <v-container>
            <v-row>
                <!-- 产品系列 -->
                <v-col cols="6" sm="4" md="3" class="mb-6">
                    <h3 class="text-h6 font-weight-bold white--text mb-4">产品系列</h3>
                    <v-list density="compact" class="bg-black pa-0">
                        <v-list-item v-for="(item, i) in products" :key="i" :title="item" class="px-0"
                            style="min-height: 32px;">
                            <template v-slot:title>
                                <span class="text-grey-lighten-1 footer-text">{{ item }}</span>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-col>

                <!-- 购物指南 -->
                <v-col cols="6" sm="4" md="3" class="mb-6">
                    <h3 class="text-h6 font-weight-bold white--text mb-4">购物指南</h3>
                    <v-list density="compact" class="bg-black pa-0">
                        <v-list-item v-for="(item, i) in shoppingGuide" :key="i" class="px-0" style="min-height: 32px;">
                            <template v-slot:title>
                                <span class="text-grey-lighten-1 footer-text">{{ item }}</span>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-col>

                <!-- 关于我们 -->
                <v-col cols="6" sm="4" md="3" class="mb-6">
                    <h3 class="text-h6 font-weight-bold white--text mb-4">关于我们</h3>
                    <v-list density="compact" class="bg-black pa-0">
                        <v-list-item v-for="(item, i) in aboutUs" :key="i" class="px-0" style="min-height: 32px;">
                            <template v-slot:title>
                                <span class="text-grey-lighten-1 footer-text">{{ item }}</span>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-col>

                <!-- 联系我们 -->
                <v-col cols="6" sm="4" md="3" class="mb-6">
                    <h3 class="text-h6 font-weight-bold white--text mb-4">联系我们</h3>
                    <div class="qr-codes">
                        <div v-for="(qr, i) in qrCodes" :key="i" class="qr-item mb-4">
                            <v-img :src="qr.img" width="100" height="100" class="mb-2"></v-img>
                            <span class="text-grey-lighten-1 footer-text">{{ qr.title }}</span>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <!-- 版权信息 -->
            <v-row class="mt-8">
                <v-col cols="12" class="text-center">
                    <v-divider class="mb-4" color="grey-darken-3"></v-divider>
                    <p class="text-caption text-grey-lighten-1">
                        © {{ new Date().getFullYear() }} 雪之妍内衣 版权所有
                    </p>
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
.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.footer-text {
    font-size: 14px;
}

/* 移动端优化 */
@media (max-width: 600px) {
    .footer-text {
        font-size: 13px;
    }

    .text-h6 {
        font-size: 1rem !important;
    }

    .v-list-item {
        min-height: 28px !important;
    }

    .qr-codes {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .qr-item {
        text-align: center;
    }
}

/* 平板端优化 */
@media (min-width: 601px) and (max-width: 960px) {
    .footer-content {
        justify-content: flex-start;
    }

    .qr-codes {
        display: flex;
        gap: 1rem;
    }
}

.v-list-item:hover .text-grey-lighten-1 {
    color: white !important;
    transition: color 0.3s ease;
}

.v-list-item {
    opacity: 0.8;
}

.v-list-item:hover {
    opacity: 1;
}
</style>