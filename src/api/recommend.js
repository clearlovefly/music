import jsonp from "../assets/js/jsonp"
import {
  commonParams,
  options
} from "./config"
import axios from "axios"
export function getRecomend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: "h5",
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getSengList(){
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data=Object.assign({},commonParams,{
      singerid:944940,
      g_tk:5381,
      uin:0, 
      notice:0,
      platform:"h5page",
      needNewCode:1,
      order:"listen",
      from:"h5",
      num:15,
      begin:0,
      _:1509330283265,
  })
  
return jsonp(url,data,options)
}
