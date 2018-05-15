import jsonp from "../assets/js/jsonp"
import {
  commonParams,
  options
} from "./config"
export function search(searchinfo) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  const data = Object.assign({}, commonParams, {
    g_tk: 2090557760,
    uin: 0,
    platform: 'h5',
    needNewCode: 1,
    w: searchinfo,
    zhidaqu: 1,
    catZhida: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage: 20,
    n: 20,
    p: 1,
  })

  return jsonp(url, data, options)
}
export function searchHot(searchinfo) {
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
    const data = Object.assign({}, commonParams, {
        g_tk:2090557760,
        uin:0,            
        platform:'h5',
        needNewCode:1,
        _:1509528348861,
    })
  
    return jsonp(url, data, options)
  }
