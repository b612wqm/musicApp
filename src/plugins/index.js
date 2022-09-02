import {Button, Swipe, SwipeItem} from 'vant';
// 把引入的组件放入数组中
let plugins = [
    Swipe, SwipeItem, Button
]

export default function getVant(app) {
    plugins.forEach((item) => {
        return app.use(item)  // 循环注册每个封装
    })
}