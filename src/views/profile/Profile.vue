<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div class="center" slot="center">我的档案</div>
    </nav-bar>
    <div class="background">
      <div class="box">
        <div class="myInfo">
          <div class="photo">
            <img src="~assets/img/profile/avatar.svg" alt="" />
          </div>
          <div class="info">
            <div class="login">登陆/注册</div>
            <div class="phone">暂无绑定手机号</div>
          </div>
        </div>
        <div class="next">
          <img src="~assets/img/common/arrow-left.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="info-number">
      <div class="number">
        <p class="money">0.00</p>
        <span>我的余额</span>
      </div>
      <div class="number">
        <p class="discount">0</p>
        <span>我的优惠</span>
      </div>
      <div class="number">
        <p class="point">0</p>
        <span>我的积分</span>
      </div>
    </div>
    <div class="my-message">
      <div class="message">我的消息</div>
      <div class="pointshop">积分商城</div>
      <div class="vip">会员卡</div>
    </div>
    <div class="my-message my-shopping">
      <div class="shopping" @click="myShop">我的购物车</div>
      <div class="download">下载APP</div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Profile",
  data() {
    return {};
  },
  components: {
    NavBar,
  },
  methods: {
    myShop() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.profile {
  height: 100vh;
}
.profile-nav {
  background-color: tomato;
  text-align: center;
  color: #fff;
}
.background {
  height: 15%;
  background-color: rgb(224, 79, 53);
  overflow: hidden;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  flex: 1;
  height: 100%;
  margin-top: 10px;
  position: relative;
}
.myInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}
.photo {
  width: 60px;
  height: 60px;
}
.photo img {
  width: 100%;
  height: 100%;
}
.phone::before {
  content: "";
  display: inline-block;
  background: url("~assets/img/profile/phone.svg") 0px 1px no-repeat;
  width: 20px;
  height: 20px;
  background-size: 20px;
  position: relative;
  top: 3px;
}
.next img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.info-number {
  height: 15%;
  background-color: #fff;
  display: flex;
  border-bottom: 20px solid #eee;
}
.number {
  flex: 1;
  height: 100%;
  text-align: center;
}
.number p {
  color: red;
  font-size: 30px;
  margin-bottom: 5px;
}
.number p::after {
  content: "";
  font-size: var(--fontSize);
  color: var(--color-fontColor);
}
.number p[class="money"]::after {
  content: "元";
}
.number p[class="discount"]::after {
  content: "个";
}
.number p[class="point"]::after {
  content: "分";
}
.info-number .number:nth-of-type(2) {
  border-left: 2px solid #eee;
  border-right: 2px solid #eee;
}
.my-message {
  width: 100%;
  height: 20%;
  background-color: #fff;
  display: flex;
  flex-flow: nowrap column;
  border-bottom: 20px solid #eee;
}
.my-message div {
  box-sizing: border-box;
  height: calc(100% / 3);
  line-height: 50px;
  padding-left: 20px;
}
.pointshop {
  border-top: 2px solid #eee;
  border-bottom: 2px solid #eee;
}
.message::before {
  content: "";
  display: inline-block;
  background: url("~assets/img/profile/message.svg") no-repeat 0 0;
  width: 20px;
  height: 20px;
  background-size: 20px;
  position: relative;
  top: 3px;
  margin-right: 5px;
}
.pointshop::before {
  content: "";
  display: inline-block;
  background: url("~assets/img/profile/pointer.svg") no-repeat 0 0;
  width: 20px;
  height: 20px;
  background-size: 20px;
  position: relative;
  top: 3px;
  margin-right: 5px;
}
.vip::before {
  content: "";
  display: inline-block;
  background: url("~assets/img/profile/vip.svg") no-repeat 0 0;
  width: 20px;
  height: 20px;
  background-size: 20px;
  position: relative;
  top: 3px;
  margin-right: 5px;
}
.shopping::before {
  content: "";
  display: inline-block;
  background: url("~assets/img/profile/cart.svg") no-repeat 0 0;
  width: 20px;
  height: 20px;
  background-size: 20px;
  position: relative;
  top: 3px;
  margin-right: 5px;
}
.download::before {
  content: "";
  display: inline-block;
  background: url("~assets/img/profile/shopping.svg") no-repeat 0 0;
  width: 20px;
  height: 20px;
  background-size: 20px;
  position: relative;
  top: 3px;
  margin-right: 5px;
}
.download {
  border-top: 2px solid #eee;
}
.my-shopping {
  border: 0;
}
</style>