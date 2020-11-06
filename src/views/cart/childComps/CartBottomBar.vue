<template>
  <div class="bottom">
    <div class="check-content">
      <check-button
        class="checked"
        :is-checked="selectorAll"
        @click.native="allClick"
      />
      <span>全选</span>
    </div>
    <div class="price">总计:{{ price }}</div>
    <div class="calc-number">去计算:{{ length }}</div>
  </div>
</template>

<script>
import CheckButton from "components/context/checkButton/CheckButton";
import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
      list: "cartList",
    }),
    price() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.check;
          })
          .reduce((pre, item) => {
            return pre + item.count * item.price;
          }, 0)
          .toFixed(2)
      );
    },
    /* 全选判断 */
    selectorAll() {
      if (this.list.length == 0) return false;
      return !this.list.find((item) => {
        return !item.check;
      });
    },
  },
  methods: {
    /* 是否全选 */
    allClick() {
      if (this.selectorAll) {
        this.list.forEach((item) => {
          item.check = false;
        });
      } else {
        this.list.forEach((item) => {
          item.check = true;
        });
      }
    },
  },
};
</script>

<style scoped lang='less'>
.bottom {
  background-color: rgb(255, 238, 225);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .check-content {
    display: flex;
    align-items: center;
    margin-left: 5px;
    .checked {
      width: 20px;
      height: 20px;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .price {
    margin-left: 10px;
  }
  .calc-number {
    height: 100%;
    width: 100px;
    background-color: red;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
}
</style>