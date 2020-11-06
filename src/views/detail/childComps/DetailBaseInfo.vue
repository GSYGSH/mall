<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <div class="base-info">
      <div class="title">{{ goods.title }}</div>
      <div class="price">
        <span class="n-price">{{ goods.newPrice }}</span>
        <span class="o-price">{{ goods.oldPrice }}</span>
        <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
      </div>
      <div class="other-info">
        <span>{{ goods.columns[0] }}</span>
        <span>{{ goods.columns[1] }}</span>
        <span>{{ goods.services[goods.services.length - 1].name }}</span>
      </div>
      <div class="service-info">
        <span
          class="service-item"
          v-for="index in goods.services.length - 1"
          :key="index"
        >
          <img :src="goods.services[index - 1].icon" alt="" />
          <span>{{ goods.services[index - 1].name }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scpoed lang='less'>
@border:2px solid #eee;
@margin: 10px;
@color: rgb(189, 189, 189);

.base-info {
  .title {
    font-weight: 600;
    font-size: 16px;
    padding: 10px;
  }
  .price {
    margin-top: @margin;
    padding: 10px;
    .n-price {
      font-size: 30px;
      margin-right: @margin;
      color: rgb(255, 126, 147);
    }
    .o-price {
      font-size: 14px;
      margin-right: @margin;
      color: @color;
      text-decoration: line-through;
    }
    .discount {
      display: inline-block;
      width: 60px;
      height: 20px;
      background-color: rgb(255, 126, 147);
      font-size: 12px;
      text-align: center;
      line-height: 20px;
      color: #fff;
      border-radius: 15px;
      position: relative;
      top: -10px;
    }
  }
  .other-info {
    display: flex;
    justify-content: space-between;
    margin-top: @margin;
    font-size: 14px;
    color: @color;
    font-weight: 600;
    padding: 5px 10px;
  }
  .service-info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    border-top: @border;
    border-bottom: @border;
    .service-item {
      font-size: 14px;
      font-weight: 600;
      img {
        width: 14px;
        height: 14px;
      }
    }
  }
}
</style>