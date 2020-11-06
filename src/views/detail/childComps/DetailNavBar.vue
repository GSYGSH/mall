<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div class="back" slot="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div class="title" slot="center">
        <div
          v-for="(item, index) in title"
          :key="index"
          class="title-item"
          @click="activeItem(index)"
          :class="{ active: currentIndex === index }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    activeItem(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: var(--fontSize);
}
.title-item {
  flex: 1;
}
.back {
  position: relative;
  top: 7px;
}
.back img {
  margin-left: 10px;
}
.active {
  color: rgb(255, 99, 125);
}
</style>