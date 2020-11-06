<template>
  <div class="shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="top">
      <img :src="shop.logo" alt="" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="middle">
      <div class="middle-l">
        <div class="count-l">
          <p>{{ shop.sells | fixNumber }}</p>
          <span>总销量</span>
        </div>
        <div class="count-r">
          <p>{{ shop.goodsCount }}</p>
          <span>全部宝贝</span>
        </div>
      </div>
      <span class="middle-c"></span>
      <div class="middle-r">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td class="item-name">{{ item.name }}</td>
            <td :style="highScore(item.score)">{{ item.score }}</td>
            <td :style="highScore(item.score)">
              {{ item.score >= 5 ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bottom">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    fixNumber(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
  computed: {},
  methods: {
    highScore(score) {
      return score >= 5 ? { color: "red" } : { color: "green" };
    },
    better(better) {
      return score >= 5 ? { color: "red" } : { color: "green" };
    },
  },
};
</script>

<style scoped lang="less">
.shop-info {
  border-bottom: 2px solid #eee;
  padding: 10px 10px 20px 10px;
  .top {
    img {
      width: 35px;
      height: 35px;
      vertical-align: middle;
      border-radius: 50%;
      border: 2px solid rgb(189, 189, 189);
      margin-right: 10px;
    }
    .title {
      font-size: 15px;
    }
  }
  .middle {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    padding-top: 15px;
    .middle-l {
      display: flex;
      text-align: center;
      .count-l {
        margin-right: 20px;
      }
      [class^="count"] p {
        font-size: 18px;
        margin-bottom: 5px;
        margin-top: 0;
      }
    }
    .middle-c {
      width: 2px;
      height: 50px;
      background-color: #eee;
    }
    .middle-r {
      table {
        position: relative;
        top: 2px;
        td {
          padding-right: 8px;
        }
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    text-align: center;
    line-height: 35px;
    div {
      width: 140px;
      height: 35px;
      background-color: #ececec;
      border-radius: 15px;
      font-size: 14px;
    }
  }
}
</style>