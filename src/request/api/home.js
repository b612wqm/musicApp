import service from "@/request";

// 获取首页轮播图数据
export function getBanner() {
    return service({
        method:"GET",
        url: "/banner?type=2",  // 这个会和baseURL接起来
    })
}
export function getMusicList() {
    return service({
        method:"GET",
        url: "/personalized?limit=10",  // 这个会和baseURL接起来
    })
}



