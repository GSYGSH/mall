<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: true,
    };
  },
  methods: {
    imageLoad() {
      /*  if (this.isLoad)*/ {
        /* 只发送一次就可以了 */
        this.$emit("swiperImageLoad");
        /* this.isLoad = false; */
      }
    },
  },
};
</script>

<style>
</style>