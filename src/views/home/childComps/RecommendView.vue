<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  font-size: var(--fontSize);
  padding: 5px 0 20px;
  border-bottom: 10px solid #eee;
}
img {
  width: 70px;
  height: 70px;
}
</style>