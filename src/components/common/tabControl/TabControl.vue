<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      :key="index"
      class="tab-control-item"
      @click="itemClick(index)"
      :class="{ active: currentIndex === index }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: Array,
    default() {
      return [];
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabControl", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-between;
  text-align: center;
  background: #eee;
  height: 40px;
  line-height: 40px;
  border-radius: 45px;
}
.tab-control-item {
  flex: 1;
}
.active span {
  color: tomato;
  border-bottom: 2px solid tomato;
}
</style>