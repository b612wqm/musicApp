<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
    <div class="topContent">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>

</template>

<script>
export default {
  name: "TopNav"
}
</script>

<style lang="less" scoped>
.topNav {
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;  //flex布局
  justify-content: space-between;  // 内容居中
  align-items: center;   // 垂直居中
  .topContent {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;   // 垂直居中
    font-size: 18px;
    .active {
      font-weight: 900;
    }
  }
}
</style>