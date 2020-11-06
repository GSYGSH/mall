<template>
  <div class="toast">
    {{ strInfo }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    strInfo: String,
  },
};
</script>

<style scoped>
.toast {
  width: 150px;
  height: 60px;
  background-color: #333;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8;
  text-align: center;
  line-height: 60px;
  font-size: 18px;
  color: #fff;
  border-radius: 20px;
}
</style>