<template>
  <div :class="[data ? 'sideBar' : 'sideBar sideBarShowhied']">
    <div class="headerImg">
      <div @click="changeLogin" >
        <img :src="headerImg" alt="" v-if="getisLogin">
        <div class="noLogin" v-else> <span>未登录</span></div>
      </div>
      <p class="sideBarGrade">LV.10</p>
      <p>音沐音乐</p>
    </div>
    <ul>
      <li>
        <router-link to="/myinfo">
          <i class="icon iconfont icon-yonghu"></i>
          <span>我的消息</span>
        </router-link>

      </li>
      <li>
        <i class="icon iconfont icon-huiyuanzhongxin"></i>
        <span>会员中心</span>
      </li>
      <li>
        <i class="icon iconfont icon-shangcheng"></i>
        <span>商城</span>
      </li>
      <li>
        <router-link to="/myfriend">
          <i class="icon iconfont icon-wodehaoyou"></i>
          <span>我的好友</span>
        </router-link>
      </li>
      <li>
        <i class="icon iconfont icon-fujin"></i>
        <span>附近的人</span>
      </li>
      <li>
        <i class="icon iconfont icon-pifu"></i>
        <span>个性皮肤</span>
      </li>
      <li>
        <router-link to="/soundHound">
          <i class="icon iconfont icon-tinggeshiqu"></i>
          <span>听歌识曲</span>
        </router-link>
      </li>
      <li>
        <i class="icon iconfont icon-lishi"></i>
        <span>定时播放</span>
      </li>
      <li>
        <i class="icon iconfont icon-yejianmoshi"></i>
        <span>夜间模式</span>
      </li>
      <li>
        <i class="icon iconfont icon-shezhi"></i>
        <span>设置</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "sideBar",
    data() {
      return {
        headerImg: require("../../../assets/images/Crunchies/banner1.jpg")

      }
    },
    methods:{
    	changeLogin(event){
    		console.log(this.$store.state.isLogin)
    		if(this.$store.state.isLogin){
    			this.$router.push({
					path:'/music'
				})
    		}else{
    			this.$router.push({
					path:'/loginIndex/login'
				})
    		}
    	}
    },
    computed:{
    	getisLogin(){
    		return this.$store.state.isLogin
    	}
    },
    props: ["data"],
  }

</script>
<style scoped lang="less">
  @width: 75rem;
   a{
    color: #686868;
  }

  .sideBar {
    width: 260/@width;
    overflow: hidden;
    background: #ffffff;
    border: 1px solid red;
    position: absolute;
    z-index: 9999;
    font-size: 26/@width;
    transition: 1s;
    margin-left: -262/@width;
    bottom: 0px;
    top: 0px;
    .headerImg {
      height: 250/@width;
      border: 1px solid red;
      background: linear-gradient(to bottom left, #7b59af, #be439d);
      .noLogin{
      	width: 100/@width;
      	height: 100/@width;
      	background: white;
      	vertical-align: middle;
      	border-radius: 50%;
      	margin-left: 80/@width;
      	margin-top: 50/@width;
      	
      }
    }
    ul {
      li {
        height: 108/@width;
        line-height: 108/@width;
        position: relative;
        span {

          padding-left: 86/@width;
        }
        i {
          font-size: 38/@width;
          position: absolute;
          left: 34/@width;
        }
      }
    }
  }

  .sideBarShowhied {

    margin-left: 0;
    color: #686868;
    background: #ffffff;
  }

  .headerImg {
    text-align: center;
    img {
      width: 110/@width;
      height: 110/@width;
      border-radius: 50%;
      margin: 25/@width auto;
    }
    .sideBarGrade {
      width: 70/@width;
      height: 18/@width;
      border-radius: 9/@width;
      font-size: 14/@width;
      margin: 18/@width auto;
    }
    p {
      font-size: 24/@width;
    }
  }

</style>
