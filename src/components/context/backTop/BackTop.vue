<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {},
};
</script>

<style scoped>
.back-top img {
  width: 45px;
  height: 45px;
}
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
  z-index: 999;
}
</style>