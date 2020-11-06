<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll" @scroll="scroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" ref="param" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goods="recommends" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <toast :strInfo="toastStr" v-show="toastShow" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import GoodsList from "components/context/goods/GoodsList";
import BackTop from "components/context/backTop/BackTop";

import Scroll from "components/common/scroll/Scroll";
import toast from "components/common/toast/toast";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/Detail.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      isShowBackTop: false,
      scrollY: [0],
      currentIndex: 0,
      toastStr: "",
      toastShow: false,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    BackTop,
    toast,
  },
  created() {
    this.iid = this.$route.query.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result;
      /* 获取轮播图图片 */
      this.topImages = data.itemInfo.topImages;
      /* 获取商品信息 */
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      /* 获取商家信息 */
      this.shop = new Shop(data.shopInfo);
      /* 保存商品详情数据 */
      this.detailInfo = data.detailInfo;
      /* 保存商品参数尺码信息 */
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      /* 保存评论信息 */
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    /* 请求推荐图片 */
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  updated() {
    let navY = this.$refs.nav.$el.offsetHeight;
    this.scrollY = [];
    this.scrollY.push(0);
    this.scrollY.push(this.$refs.param.$el.offsetTop);
    this.scrollY.push(this.$refs.comment.$el.offsetTop);
    this.scrollY.push(this.$refs.recommend.$el.offsetTop);
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.scrollY[index], 500);
    },
    scroll(position) {
      let y = Math.abs(position.y);

      if (y >= Math.abs(this.$refs.recommend.$el.offsetTop)) {
        this.$refs.nav.currentIndex = this.currentIndex = 3;
      } else if (y >= Math.abs(this.$refs.comment.$el.offsetTop)) {
        this.$refs.nav.currentIndex = this.currentIndex = 2;
      } else if (y >= Math.abs(this.$refs.param.$el.offsetTop)) {
        this.$refs.nav.currentIndex = this.currentIndex = 1;
      } else if (y >= 0) {
        this.$refs.nav.currentIndex = this.currentIndex = 0;
      }
      this.isShowBackTop = y > 1000 ? true : false;
    },
    /* 获取购物车所需要展示的信息 */
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      /* 将商品添加到购物车里 */
      this.$store.dispatch("addToCart", product).then((res) => {
        this.toastStr = res;
        if (timer) {
          clearTimeout(timer);
          this.toastShow = false;
        }
        this.toastShow = true;
        let timer = setTimeout(() => {
          this.toastShow = false;
        }, 1000);
      });
    },
  },
};
</script>

<style scoped>
.detail-nav {
  position: relative;
  z-index: 999;
  background-color: #fff;
}
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>