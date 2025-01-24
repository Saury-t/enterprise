<template>
    <v-app>
        <nav-manager />
        <v-layout>
            <v-container class="containerProduct">
                <!-- 分割线 -->
                <!-- <v-divider :thickness="3" class="border-opacity-25"></v-divider> -->
                <v-row no-gutters>
                    <v-col class="ma-4">
                        <v-card class="mx-auto pa-2 ma-2" max-width="400" hover>
                            <v-img class="align-end text-white" height="200"
                                src="@/assets/1.jpg" cover>
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4">
                                Number 10
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Whitehaven Beach</div>

                                <div>
                                    每一刻都在展示着宇宙的奇迹。</div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col class="ma-4">
                        <v-card class="mx-auto pa-2 ma-2" max-width="400" hover>
                            <v-img class="align-end text-white" height="200"
                                src="@/assets/2.jpg" cover>
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4">
                                Number 10
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Whitehaven Beach</div>

                                <div>Whitsunday Island, Whitsunday Islands</div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col class="ma-4">
                        <v-card class="mx-auto pa-2 ma-2" max-width="400" hover>
                            <v-img class="align-end text-white" height="200"
                                src="@/assets/3.jpg" cover>
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4">
                                Number 10
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Whitehaven Beach</div>

                                <div>Whitsunday Island, Whitsunday Islands</div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row no-gutters>
                    <v-col class="ma-4">
                        <v-card class="mx-auto pa-2 ma-2" max-width="400" hover>
                            <v-img class="align-end text-white" height="200"
                                src="@/assets/4.jpg" cover>
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4">
                                Number 10
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Whitehaven Beach</div>

                                <div>
                                    {{ $t('messages.Home') }}</div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col class="ma-4">
                        <v-card class="mx-auto pa-2 ma-2" max-width="400" hover>
                            <v-img class="align-end text-white" height="200"
                                src="@/assets/5.png" cover>
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4">
                                Number 10
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Whitehaven Beach</div>

                                <div>Whitsunday Island, Whitsunday Islands</div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col class="ma-4">
                        <v-card class="mx-auto pa-2 ma-2" max-width="400" hover>
                            <v-img class="align-end text-white" height="200"
                                src="@/assets/6.png" cover>
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4">
                                Number 10
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Whitehaven Beach</div>

                                <div>Whitsunday Island, Whitsunday Islands</div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-layout>
        <foot-page />
    </v-app>
</template>

<script>
import NavManager from '@/components/Nav.vue'
import FootPage from '@/components/FootPage.vue'

export default {
    name: 'ProductDetail',
    components: {
        NavManager,
        FootPage,
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>

<style>
.containerProduct {
    padding-top: 100px;
}
</style>