import originJSONP from "jsonp";
//url地址
//data 拼接到url的数据
//option 回到函数
export default function jsonp(url,data,option){
   
    url+=(url.indexOf("?")<0?"?":"&")+param(data)
     /*
    resolve代表成功
    reject代表失败
    */
    return new Promise((resolve,reject)=>{
        originJSONP(url,option,(err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}

function param(data){
    let url="";
    for(var k in data){
        let value=data[k]!==undefined?data[k]:"";
        url+=`&${k}=${encodeURIComponent(value)}`
    }
    return url?url.substring(1):"";
}