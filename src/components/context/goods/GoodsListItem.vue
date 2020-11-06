<template>
  <div class="goods-list-item">
    <img v-lazy="showImage" alt="" @load="imageLoad" @click="itemClick" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: Object,
    default() {
      return {};
    },
  },
  computed: {
    price() {
      return Number(this.goodsItem.price).toFixed(2);
    },
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      this.$router.push({
        path: "/detail",
        query: {
          iid: this.goodsItem.iid,
        },
      });
    },
  },
};
</script>

<style scoped>
.goods-list-item {
  font-size: var(--fontSize);
  text-align: center;
}
img {
  width: 100%;
  border-radius: 15px;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 2px 0;
}
.price {
  padding-right: 20px;
  color: rgb(255, 149, 167);
  font-weight: 600;
}
.goods-info .collect {
  position: relative;
}
.collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>