<template>
  <div class="home">
    <nav-bar class="nav-bar"><span slot="center">购物街</span></nav-bar>
    <tab-control
      :title="['流行', '新款', '精选']"
      @tabControl="tabControl"
      ref="tabControl2"
      v-show="isTabControlShow"
      class="home-tab-control"
    />
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      @loadMore="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad.once="swiperImageLoad" />
      <recommend-view :recommend="recommend" />
      <feature-view />
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabControl="tabControl"
        ref="tabControl1"
      />
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/common/tabControl/TabControl";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/context/backTop/BackTop";

import GoodsList from "components/context/goods/GoodsList";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: null,
      isTabControlShow: false,
    };
  },
  created() {
    /* 请求轮播图数据 */
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    /* 接收bus */
    this.$nextTick(() => {
      const load = this.debounce(this.$refs.scroll.refresh, 20);
      this.$bus.$on("itemImageLoad", () => {
        load();
      });
    });
  },
  mounted() {},
  methods: {
    /* 获取tabControl offsetTop值 */
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop;
    },
    /* 防抖函数 */
    debounce(fn, delay = 20) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, args); //this指向组件
          console.log("防抖");
        }, delay);
      };
    },
    /* 再次调用加载更多 */
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    /* BackTop显示隐藏 */
    contentScroll(position) {
      this.isShowBackTop = Math.abs(position.y) > 1000;
      this.isTabControlShow = Math.abs(position.y) > this.tabOffsetTop;
    },
    /* 返回顶部 */
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    /* tab栏点击选择,保持currentIndex一致 */
    tabControl(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index; //取tabControl的currentIndex
      this.$refs.tabControl2.currentIndex = index;
    },
    /* 请求详细列表页数据 */
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  overflow: hidden;
}
.nav-bar {
  background-color: tomato;
  color: #fff;
  font-weight: 600;
}
.content {
  height: calc(100vh - 93px);
  overflow: hidden;
}
.home-tab-control {
  position: fixed;
  top: 44px;
  right: 0;
  left: 0;
  z-index: 9;
}
</style>  
