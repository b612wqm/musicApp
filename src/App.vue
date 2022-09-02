<template>
  <!--啥也不写，只写个router-view的话就默认去找路由的根/-->
  <router-view/>
</template>

<style lang="less">
* {  // 通配符*，也就是设置全局的样式
  margin:0;
  padding: 0;
  //设置为怪异盒子，这样设置内边距不会撑开盒子
  box-sizing: border-box;
}
.icon {  // 这个图标是svg的，所以需要设置宽高来设置大小
  width: .5rem; // 相当于20px
  height: 20px;
}
a {
  color: black;
}
</style>
