<template>
    <div class="container">
      <div class="title">
        <router-link to="/muindex/recommend"><i class="iconfont icon-fanhui"></i></router-link>
          <p>听歌识曲</p>
      </div>
      <div class="shibie">
          <h4>正在识别</h4>
          <p>小沐正在努力识别,请稍后</p>
      </div>
      <div class="sb_bg">
          
      </div>
      <div class="footer">
          
      </div>
    </div> 
</template>
        
<script>
export default {
    name:"SoundHound",
    data(){
        return{

        }
    }
}

</script>

<style scoped  lang="less">
    @width: 75rem;
	.container{
        width:100%;
        .title{
            width:100%;
            height:88/@width;
            background: url("../../../assets/images/tinggeshiqu/title_bg.png") no-repeat;
            background-size: 100%;
            .iconfont{
                float: left;
                font-size: 38/@width;
                color:#F3EDFC;
                margin-left:38/@width;
                margin-top: 20/@width;

            }
            p{
                color: #fff;
                float: left;
                font-size: 38/@width;
                letter-spacing: 5/@width;
                margin-top: 18/@width;
                margin-left: 20/@width;

            }
        }
        .shibie{
            font-size: 36/@width;
            width: 100%;
            text-align: center;
            h4{
                margin-top: 80/@width;
                color: #4F4F4F;
            }
            p{
                margin-top: 40/@width;
                color:rgba(0,0,0,.6);
            }
        }
        .sb_bg{
            width:100%;
            height:795/@width;
            background: url("../../../assets/images/tinggeshiqu/sq_bg.png");
            background-size: 100%;
        }
        .footer{
            height:215/@width;
            width: 100%;
            background: url("../../../assets/images/tinggeshiqu/foot_bg.png") no-repeat center;
        }

    }
</style>