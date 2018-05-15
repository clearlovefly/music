import jsonp from "../assets/js/jsonp"
import {commonParams,options} from "./config"
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