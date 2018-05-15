<template>
    <div class="songSheet_container">
       <div class="gedan">
           <i class="iconfont icon-arrow-down"></i>自建歌单
       </div>
       <div class="show_gedan">
        <div class="gedan_info" v-for="(item,index) in imgs" >
          <img :src="item.url" alt="">
              <p>{{item.name}}</p>
        </div>
            
       </div>
    </div> 
</template>
        
<script>
export default {
    name:"songSheet",
    data(){
        return{
            imgs:[{
              id:1,
              url:require("../../../../../assets/images/gaibian/beau_1.png"),
              name:"Quietness"
            },{
              id:2,
              url:require("../../../../../assets/images/gaibian/beau_2.png"),
              name:"Folk Song"
            },{
              id:3,
              url:require("../../../../../assets/images/gaibian/beau_3.png"),
              name:"Love Song"
            },{
              id:4,
              url:require("../../../../../assets/images/gaibian/beau_4.png"),
              name:"Pop Song"
            }]
        }
    }
}

</script>

<style scoped  lang="less">

    @width: 75rem;
  .songSheet_container{
        margin-top: 15/@width;
        .gedan{
            background: #F9F9F9;
            font-size: 28/@width;
            height: 52/@width;
            padding: 0 48/@width;
            line-height: 52/@width;
            color:#1f1e1f;
            .icon-arrow-down{
                font-size: 28/@width;
                padding-right: 5/@width;
            }
        }
        .show_gedan{
            width:750/@width;
            height: 750/@width;
            overflow: hidden;
            .gedan_info{
              position: relative;
              float:left;
              padding:10/@width;
              border-radius: 15/@width;
              img{
                width:355/@width;
               
              }
              p{
                font-size: 24/@width;
                font-family: "san francisro";
                text-align: center;
                height:50/@width;
                line-height: 50/@width;
                position: absolute;
                bottom: 10/@width;  
                right: 10/@width;
                background:url(../../../../../assets/images/gaibian/purple.png);
                color:white;
              }
            }
            
            
        }
    }
</style>