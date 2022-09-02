<template>
  <!--把播放列表数据传给子组件-->
  <ItemMusicTop :playlist="state.playlist"/>
  <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
</template>

<script>
import {useRoute} from 'vue-router'
import {onMounted, reactive} from "vue";
import {getItemList, getMusicItemList} from "@/request/api/item";
import ItemMusicTop from "@/components/item/ItemMusicTop";    //引入子组件
import ItemMusicList from "@/components/item/ItemMusicList";  //引入子组件

export default {
  components: {ItemMusicTop, ItemMusicList},
  setup() {
    const state = reactive({   // 这里收到的数据都响应式的传给dom了
      playlist: {},   // 歌单的详情页的数据
      itemList: []    // 歌单的歌曲
    });
    onMounted(async () => {  // 这里获取的数组都传给上面的state了
      let id = useRoute().query.id
      console.log(id)
      // 获取歌单详情
      let res = await getMusicItemList(id)
      console.log(res)
      state.playlist = res.data.playlist
      // 获取歌单的歌曲(这里id是实参，api的item.js中的data是形参来接收实参id)
      let result = await getItemList(id)
      console.log(result)
      state.itemList = result.data.songs
      // 防止页面刷新，数据丢失，将数据保存到sessionStorage
      // 把整个state都保存到sessionStorage
      sessionStorage.setItem('itemDetail', JSON.stringify(state))
    });
    return {state}
  }
}
</script>

<style scoped>

</style>