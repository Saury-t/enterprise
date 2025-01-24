<template>
    <v-app>
        <nav-manager />
        <v-main>
            <v-container class="py-16">
                <!-- 页面标题 -->
                <v-row justify="center" class="mb-12">
                    <v-col cols="12" class="text-center">
                        <h1 class="text-h3 font-weight-bold mb-3">联系我们</h1>
                        <p class="text-subtitle-1">如果您有任何问题，请随时与我们联系</p>
                    </v-col>
                </v-row>

                <!-- 联系信息卡片 -->
                <v-row justify="center">
                    <v-col cols="12" md="8">
                        <v-card elevation="3" rounded="lg">
                            <v-container>
                                <v-row>
                                    <!-- 左侧联系信息 -->
                                    <v-col cols="12" md="6" class="py-6">
                                        <div class="px-4">
                                            <h2 class="text-h5 font-weight-bold mb-6">联系方式</h2>

                                            <div class="mb-6">
                                                <h3 class="text-subtitle-1 font-weight-bold mb-2">
                                                    <v-icon start color="primary" class="me-2">mdi-phone</v-icon>
                                                    客服热线
                                                </h3>
                                                <p class="text-body-1 ml-9">400-888-8888</p>
                                            </div>

                                            <div class="mb-6">
                                                <h3 class="text-subtitle-1 font-weight-bold mb-2">
                                                    <v-icon start color="primary"
                                                        class="me-2">mdi-clock-outline</v-icon>
                                                    服务时间
                                                </h3>
                                                <p class="text-body-1 ml-9">周一至周日 9:00-21:00</p>
                                            </div>

                                            <div class="mb-6">
                                                <h3 class="text-subtitle-1 font-weight-bold mb-2">
                                                    <v-icon start color="primary"
                                                        class="me-2">mdi-email-outline</v-icon>
                                                    客服邮箱
                                                </h3>
                                                <p class="text-body-1 ml-9">service@example.com</p>
                                            </div>

                                            <div class="mb-6">
                                                <h3 class="text-subtitle-1 font-weight-bold mb-2">
                                                    <v-icon start color="primary" class="me-2">mdi-map-marker</v-icon>
                                                    公司地址
                                                </h3>
                                                <p class="text-body-1 ml-9">浙江省杭州市西湖区文三路XXX号</p>
                                            </div>
                                        </div>
                                    </v-col>

                                    <!-- 右侧二维码 -->
                                    <v-col cols="12" md="6" class="py-6 grey lighten-4">
                                        <div class="px-4 text-center">
                                            <h2 class="text-h5 font-weight-bold mb-6">关注我们</h2>
                                            <v-img src="@/assets/WeChat.png" max-width="200"
                                                class="mx-auto mb-4"></v-img>
                                            <p class="text-body-1">扫描二维码关注公众号</p>
                                            <p class="text-caption">获取更多产品信息和优惠资讯</p>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- 地图区域 -->
                <!-- <v-row justify="center" class="mt-12">
                    <v-col cols="12" md="8">
                        <v-card elevation="3" rounded="lg">
                            <div class="pa-4">
                                <h2 class="text-h5 font-weight-bold mb-4">门店地址</h2>
                                <v-img src="@/assets/map-placeholder.jpg" height="300" cover></v-img>
                            </div>
                        </v-card>
                    </v-col>
                </v-row> -->
            </v-container>
        </v-main>
        <foot-page />
    </v-app>
</template>

<script setup>
import { onMounted } from 'vue'
import NavManager from '@/components/Nav.vue'
import FootPage from '@/components/FootPage.vue'

onMounted(() => {
    window.scrollTo(0, 0)
})
</script>

<style scoped>
.v-card {
    transition: transform 0.3s;
}

.v-card:hover {
    transform: translateY(-5px);
}
</style>