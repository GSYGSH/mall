<template>
  <div class="paramInfo" v-if="Object.keys(paramInfo).length !== 0">
    <table class="param-info">
      <tr v-for="(tr, index) in paramInfo.sizes[0]" :key="index">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="goods-info">
      <tr v-for="(tr, index) in paramInfo.infos" :key="index">
        <td class="param-key">{{ tr.key }}</td>
        <td class="param-value">{{ tr.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "paramInfo",
  props: {
    paramInfo: Object,
    default() {
      return {};
    },
  },
};
</script>

<style scoped lang='less'>
.paramInfo {
  padding: 10px;
  .param-info {
    width: 100%;
    font-size: 14px;
    line-height: 25px;
    tr {
      display: flex;
      padding-bottom: 25px;
      td {
        flex: 1;
        border-bottom: 1px solid #eee;
      }
    }
    tr:last-of-type td {
      border-bottom: 1px solid rgb(224, 224, 224);
    }
  }
  .goods-info {
    width: 100%;
    font-size: 14px;
    line-height: 25px;
    tr {
      display: flex;
      padding-bottom: 25px;
      td {
        flex: 1;
        border-bottom: 1px solid #eee;
      }
      .param-value {
        flex: 3;
        color: rgb(226, 74, 100);
      }
    }
  }
}
</style>