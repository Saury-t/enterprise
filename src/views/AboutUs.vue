<template>
    <v-app>
        <nav-manager />
        <v-layout>
            <v-container>
                <v-row no-gutters>
                    <v-col cols="12" md="6" align-self="center">
                        <v-img max-height="800" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            lazy-src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                        </v-img>
                    </v-col>
                    <v-col cols="12" md="6" align-self="center">
                        <div class="pa-lg-16 pa-md-10 px-4 py-16">
                            <h2 class="text-h3 text-center font-weight-black">Our Vision</h2>
                            <h3 class="text-h5 text-uppercase font-weight-thin text-center my-8">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium. Doloremque laudantium, totam rem aperiam.
                            </p>
                        </div>
                    </v-col>
                </v-row>
                <v-row no-gutters class="flex-row-reverse">
                    <v-col cols="12" md="6" align-self="center">
                        <v-img max-height="800" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            lazy-src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                        </v-img>
                    </v-col>
                    <v-col cols="12" md="6" align-self="center">
                        <div class="pa-lg-16 pa-md-10 px-4 py-16">
                            <h2 class="text-h3 text-center font-weight-black">Our Mission</h2>
                            <h3 class="text-h5 text-uppercase font-weight-thin text-center my-8">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                            </h3>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum. Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium. Doloremque laudantium, totam rem
                                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. emo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                quia consequuntur magni dolores eos
                            </p>
                        </div>
                    </v-col>
                </v-row>
                <TimeLine />
            </v-container>
        </v-layout>
        <foot-page />
    </v-app>
</template>

<script>
import NavManager from '@/components/Nav.vue'
import FootPage from '@/components/FootPage.vue'
import TimeLine from '@/components/TimeLine.vue';

export default {
    name: 'AboutUs',
    components: {
        NavManager,
        FootPage,
        TimeLine
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>

<style>
.v-container {
    padding-top: 100px;
}

.v-layout {
    display: flex;
    flex-direction: column;
    /* 垂直排列 */
}

.v-img {
    max-width: 100%;
    /* 确保图片不会超出列宽 */
    height: auto;
    /* 保持图片比例 */
}

.v-card-variant-elevated {
    box-shadow: none;
}
</style>