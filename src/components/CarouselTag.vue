<template>
  <div class="carousel">
    <div class="carousel-images">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['carousel-image', { active: currentIndex === index }]"
        @click="selectImage(index)"
      >
        <img :src="image" alt="Carousel Image" />
      </div>
    </div>
    <div class="carousel-indicators">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="['indicator', { active: currentIndex === index }]"
        @click="selectImage(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'CarouselComponent', // 确保组件名是多词的
  setup() {
    const images = ref([
      '../assets/6.png',
      // 添加更多图片路径
    ]);
    const currentIndex = ref(0);

    const selectImage = (index) => {
      currentIndex.value = index;
    };

    const nextImage = () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
    };

    let interval = null;
    onMounted(() => {
      interval = setInterval(nextImage, 3000); // 每3秒切换一张图片
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    return {
      images,
      currentIndex,
      selectImage,
    };
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 600px;
  overflow: hidden;
}

.carousel-images {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-image {
  flex: 0 0 auto;
  width: 600px;
  cursor: pointer;
}

.carousel-image img {
  width: 100%;
  display: block;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.indicator {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.indicator.active {
  background-color: #333;
}
</style>