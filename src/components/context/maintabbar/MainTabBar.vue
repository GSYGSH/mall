<template>
  <div class="tabber">
    <main-tab-item class="item" path="/home">
      <img slot="img" src="~assets/img/tabbar/home.svg" alt="" />
      <img slot="img-active" src="~assets/img/tabbar/home_active.svg" alt="" />
      <span slot="text">首页</span>
    </main-tab-item>
    <main-tab-item class="item" path="/category">
      <img slot="img" src="~assets/img/tabbar/category.svg" alt="" />
      <img
        slot="img-active"
        src="~assets/img/tabbar/category_active.svg"
        alt=""
      />
      <span slot="text">分类</span>
    </main-tab-item>
    <main-tab-item class="item" path="/cart">
      <img slot="img" src="~assets/img/tabbar/shopcart.svg" alt="" />
      <img
        slot="img-active"
        src="~assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <span slot="text">购物</span>
    </main-tab-item>
    <main-tab-item class="item" path="/profile">
      <img slot="img" src="~assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="img-active"
        src="~assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <span slot="text">我的</span>
    </main-tab-item>
  </div>
</template>

<script>
import MainTabItem from "./MainTabItem";

export default {
  name: "MainTabBar",
  components: {
    MainTabItem,
  },
};
</script>

<style scoped>
.tabber {
  height: 49px;
  background-color: #eee;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.item {
  flex: 1;
}
img {
  width: 24px;
  height: 24px;
  position: relative;
  top: 3px;
}
</style>