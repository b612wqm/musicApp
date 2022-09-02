<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <!--发现好歌单模块-->
    <div class="musicContent">
      <van-swipe :loop="false" :width="150" class="my-swpie" :show-indicators="false">
        <!--<van-swipe-item>1</van-swipe-item>-->
        <!--<van-swipe-item>2</van-swipe-item>-->
        <!--<van-swipe-item>3</van-swipe-item>-->
        <!--<van-swipe-item>4</van-swipe-item>-->
        <!--循环取每个元素-->
        <van-swipe-item v-for="item in state.musicList" :key="item">
          <router-link :to="{path:'/itemMusic', query:{id:item.id}}">
          <!--歌单的背景图-->
          <img :src="item.picUrl" alt=""/>
          <!--播放量小模块-->
          <span class="playCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-24gl-play"></use>
            </svg>
            {{ changCount(item.playCount) }}
          </span>
          <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>

      </van-swipe>
    </div>
  </div>
</template>

<script>
import {getMusicList} from "@/request/api/home";
import {onMounted, reactive} from "vue";

export default {
  // data() {
  //   return {
  //     musicList: []
  //   }
  // },
  // methods: {
  //   async getGnedan() {
  //     let res = await getMusicList();
  //     // 这个res数据我们是拿到了，要考虑怎么把我们要的内容渲染到页面中
  //     console.log(res);
  //     this.musicList = res.data.result
  //   },
  //   changCount:function (num) {
  //     if (num>=100000000) return (num/100000000).toFixed(1) + "亿"
  //     else if (num>=10000) return (num/10000).toFixed(1) + "万"
  //   }
  // },
  // mounted() {
  //   this.getGnedan()
  // }
  setup() {
    const state = reactive({
      musicList: [],
    });

    function changCount(num) {
      if (num >= 100000000) return (num / 100000000).toFixed(1) + "亿";
      else if (num >= 10000) return (num / 10000).toFixed(1) + "万";
    };
    onMounted(async () => {
      let res = await getMusicList();
      console.log(res);
      state.musicList = res.data.result
    });
    return {state, changCount}
  }
}
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;

  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;

    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }

    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }

  .musicContent {
    width: 100%;
    height: 3.6rem;

    .van-swipe-item {
      //   margin-right: 0.14rem;
      padding-right: 0.2rem;
      position: relative;
      height: 3.8rem;

      img {
        width: 100%;
        height: 2.4rem;
        border-radius: 0.2rem;
        //   position: absolute;
      }

      .playCount {
        position: absolute;
        z-index: 100;
        right: 0.3rem;
        color: white;
        margin-top: 0.06rem;

        .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
      }

      .name {
        //   position: absolute;
        bottom: 0px;
      }
    }
  }
}
</style>