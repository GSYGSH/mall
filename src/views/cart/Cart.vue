<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <scroll class="content" ref="scroll">
      <cart-list />
    </scroll>
    <!-- 底部总结 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";

import CartBottomBar from "./childComps/CartBottomBar";
import CartList from "./childComps/CartList";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar,
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
      list: "cartList",
    }),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped lang='less'>
.nav-bar {
  height: 44px;
  background-color: tomato;
  color: #fff;
  font-weight: 600;
}
.content {
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}
</style>