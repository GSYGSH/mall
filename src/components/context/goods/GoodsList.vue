<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goodsItem="item"
      class="goods-list-item"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    goods: Array,
    default() {
      return [];
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-flow: wrap row;
  justify-content: space-evenly;
  width: 100vw;
  padding-top: 10px;
}
.goods-list-item {
  width: 48%;
}
</style>