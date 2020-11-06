<template>
  <div ref="wrapper" class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click: true,
      pullUpLoad: true,
      observeDOM: true,
    });
    /* 监听滚动,创建后就开始监听 */
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    /* 监听上拉加载事件 */
    this.scroll.on("pullingUp", () => {
      this.$emit("loadMore");
    });
  },
  methods: {
    /* 返回顶部 */
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    /* 上拉加载更多 */
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    /* 刷新解决Bug */
    refresh() {
      this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>