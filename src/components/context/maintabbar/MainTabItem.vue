<template>
  <div class="item" @click="itemClick">
    <div v-if="!isActive"><slot name="img"></slot></div>
    <div v-else><slot name="img-active"></slot></div>
    <div :style="activeText"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "MainTabItem",
  props: {
    path: String,
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch((err) => {
        error;
      });
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeText() {
      return this.isActive ? { color: "pink" } : {};
    },
  },
};
</script>

<style>
</style>