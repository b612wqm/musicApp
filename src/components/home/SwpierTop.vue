<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from 'axios';
import {getBanner} from "@/request/api/home";
import {reactive, onMounted} from "vue";  // 引入生命周期钩子函数

export default {
  setup() {
    const state = reactive({
      images: [
        'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
        'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
      ]
    });
    onMounted(async () =>{
      // axios.get('http://localhost:3000/banner?type=2')
      // .then((res) => {  // 请求成功
      //   console.log(res);
      //   state.images = res.data.banners;
      //   console.log(state.images)
      // })
      // .catch((res) => {  // 请求失败
      // })
      let res = await getBanner()
      state.images = res.data.banners
      console.log(res)
    });
    return {state};
  },
};

</script>

<style lang="less">
#swiperTop {
  //需要在上面自己添加一个id
  .van-swipe {
    width: 100%;
    height: 3rem;

    .van-swipe-item {
      padding: 0 0.2rem;

      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }

    .van-swipe__indicator--active { // 和scoped有冲突
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>