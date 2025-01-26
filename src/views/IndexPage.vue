<template>
  <v-app>
    <nav-manager />

    <v-main>
      <!-- 大型首页轮播图 -->
      <header class="banner">
        <h1 class="visually-hidden" style="display: none;">雪之妍内衣官方网站</h1>
        <v-carousel cycle :show-arrows="hover" hide-delimiter-background height="calc(100vh - 100px)">
          <v-carousel-item v-for="(slide, i) in carouselSlides" :key="i" :src="slide.src" cover>
            <v-container class="fill-height">
              <v-row align="center">
                <v-col cols="12" md="6">
                  <div class="carousel-content pa-4" style="color: white !important;">
                    <h1 class="text-h3 font-weight-bold white--text mb-4">{{ slide.title }}</h1>
                    <p class="text-h6 white--text mb-6">{{ slide.description }}</p>
                    <v-btn color="primary" size="large" rounded @click="navigateToCollection">
                      探索系列
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </header>

      <!-- 产品特点展示 -->
      <section aria-label="产品特点" class="py-16">
        <h2 class="text-h4 text-center mb-8" style="display: none;">产品特点</h2>
        <v-container class="py-12">
          <v-row justify="center" class="mb-8">
            <v-col cols="12" class="text-center">
              <h2 class="text-h4 font-weight-bold mb-3">匠心品质，只为极致舒适</h2>
              <p class="text-subtitle-1">用心打造每一件作品，让您尽享优雅与自在</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col v-for="(feature, index) in features" :key="index" cols="12" md="4">
              <v-card class="mx-auto" elevation="2" height="100%">
                <v-img :src="feature.image" height="250" cover></v-img>
                <v-card-text class="text-center">
                  <h3 class="text-h6 font-weight-bold mb-2">{{ feature.title }}</h3>
                  <p>{{ feature.description }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- 热销产品展示 -->
      <v-container class="py-12">
        <v-row justify="center" class="mb-8">
          <v-col cols="12" class="text-center">
            <h2 class="text-h4 font-weight-bold mb-3">热销单品</h2>
            <p class="text-subtitle-1">精选优质单品，为您的优雅加分</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col v-for="product in hotProducts" :key="product.id" cols="12" sm="6" md="3">
            <v-hover v-slot="{ isHovering, props }">
              <v-card v-bind="props" :elevation="isHovering ? 12 : 2" class="mx-auto product-card">
                <v-img :src="product.image" height="300" cover class="align-end">
                  <v-card-title v-if="isHovering" class="text-white bg-black-opacity">
                    {{ product.name }}
                  </v-card-title>
                </v-img>
                <v-card-text class="text-center">
                  <div class="text-h6 font-weight-bold mb-2">{{ product.name }}</div>
                  <div class="text-subtitle-1 mb-2">¥{{ product.price }}</div>
                  <!-- <v-btn color="primary" variant="outlined" block>
                    查看详情
                  </v-btn> -->
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>

      <!-- 用户评价轮播 -->
      <v-container fluid class="grey lighten-4 py-12">
        <v-row justify="center" class="mb-8">
          <v-col cols="12" class="text-center">
            <h2 class="text-h4 font-weight-bold mb-3">顾客好评</h2>
            <p class="text-subtitle-1">听听她们怎么说</p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-carousel cycle :show-arrows="false" height="300" hide-delimiter-background delimiter-icon="mdi-minus"
              class="testimonial-carousel">
              <v-carousel-item v-for="(review, index) in customerReviews" :key="index">
                <v-row class="fill-height" align="center" justify="center">
                  <v-col cols="12" md="8" class="text-center">
                    <v-avatar size="80" class="mb-4">
                      <v-img :src="review.avatar" cover></v-img>
                    </v-avatar>
                    <p class="text-h6 font-italic mb-4">"{{ review.comment }}"</p>
                    <p class="text-subtitle-1 font-weight-bold">{{ review.name }}</p>
                    <div class="d-flex justify-center">
                      <v-rating :model-value="review.rating" color="amber" density="compact" readonly></v-rating>
                    </div>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>

      <!-- 新品预览 -->
      <v-container class="py-12">
        <v-row justify="center" class="mb-8">
          <v-col cols="12" md="6" class="text-center">
            <h2 class="text-h4 font-weight-bold mb-3">新品预览</h2>
            <p class="text-subtitle-1">发现更多惊喜</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-hover v-slot="{ isHovering, props }">
              <v-card v-bind="props" :class="{ 'on-hover': isHovering }" height="400">
                <v-img src="@/assets/5.png" cover height="100%">
                  <v-overlay :model-value="isHovering" contained class="align-center justify-center">
                    <v-btn color="white" variant="outlined" size="large">
                      即将上市
                    </v-btn>
                  </v-overlay>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="6">
            <v-row>
              <v-col v-for="n in 4" :key="n" cols="6">
                <v-hover v-slot="{ isHovering, props }">
                  <v-card v-bind="props" :class="{ 'on-hover': isHovering }" height="190">
                    <v-img src="@/assets/6.png" cover height="100%">
                      <v-overlay :model-value="isHovering" contained class="align-center justify-center">
                        <v-btn color="white" variant="outlined">
                          即将上市
                        </v-btn>
                      </v-overlay>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- 品牌故事 -->
      <v-parallax
        src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
        height="500">
        <v-container class="fill-height">
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" class="text-center">
              <div class="bg-overlay pa-8" style="color: white !important;">
                <h2 class="text-h4 font-weight-bold white--text mb-4">我们的品牌故事</h2>
                <p class="text-h6 white--text">
                  始于2024，我们致力于为每位女性打造独特的贴身体验。
                  采用优质面料，结合传统工艺与现代科技，
                  为您带来舒适自然的穿着体验。
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </v-main>

    <foot-page />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import NavManager from '@/components/Nav.vue'
import FootPage from '@/components/FootPage.vue'

const hover = ref(false)

// 轮播图数据
const carouselSlides = ref([
  {
    src: require('@/assets/2.jpg'),
    title: '2024春季新品系列',
    description: '轻柔如羽，贴合如初。展现优雅知性的东方美学。'
  },
  {
    src: require('@/assets/5.png'),
    title: '舒适系列',
    description: '采用天然材质，让肌肤呼吸，尽享舒适体验。'
  },
  {
    src: require('@/assets/4.jpg'),
    title: '经典系列',
    description: '传承匠心工艺，演绎永恒优雅。'
  }
])

// 产品特点数据
const features = ref([
  {
    title: '精选面料',
    image: require('@/assets/1.jpg'),
    description: '精选优质天然面料，亲肤透气，给您极致舒适体验'
  },
  {
    title: '匠心工艺',
    image: require('@/assets/2.jpg'),
    description: '专业制衣团队，严谨工艺，保证每件产品的品质'
  },
  {
    title: '贴心设计',
    image: require('@/assets/3.jpg'),
    description: '符合人体工学的设计，让您穿着舒适自在'
  }
])

// 热销产品数据
const hotProducts = ref([
  {
    id: 1,
    name: '轻奢蕾丝内衣套装',
    price: 399,
    image: require('@/assets/1.jpg')
  },
  {
    id: 2,
    name: '舒适棉质家居服',
    price: 299,
    image: require('@/assets/2.jpg')
  },
  {
    id: 3,
    name: '真丝睡衣套装',
    price: 599,
    image: require('@/assets/3.jpg')
  },
  {
    id: 4,
    name: '优雅蕾丝睡裙',
    price: 459,
    image: require('@/assets/4.jpg')
  }
])

// 用户评价数据
const customerReviews = ref([
  {
    name: '张女士',
    avatar: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    comment: '面料非常舒服，穿着特别贴身，完全没有束缚感，是我用过最舒服的内衣。',
    rating: 5
  },
  {
    name: '李女士',
    avatar: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    comment: '设计很优雅，做工非常精致，穿着很有质感，而且客服服务特别好。',
    rating: 5
  },
  {
    name: '王女士',
    avatar: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    comment: '已经是第三次购买了，质量一如既往的好，很适合送给妈妈。',
    rating: 5
  }
])

const navigateToCollection = () => {
  // 跳转到产品系列页面
  console.log('Navigate to collection page')
}
</script>

<style scoped>
.carousel-content {
  border-radius: 8px;
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.5);
}

.bg-overlay {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
}

.v-card {
  transition: transform 0.3s;
}

.v-card:hover {
  transform: translateY(-5px);
}

.product-card {
  transition: all 0.3s ease;
}

.bg-black-opacity {
  background: rgba(0, 0, 0, 0.7);
}

.testimonial-carousel {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.on-hover {
  transform: scale(1.02);
  transition: all 0.3s ease;
}
</style>