<template>
	 <transition name="slide-fade">
  <div class="loginres">
  	
   <div class="login">
	   <router-link to="/loginIndex/login"><button>登录</button></router-link>
	   <router-link to="/loginIndex/register"><button>注册</button></router-link>
   </div>

   <router-link to="/muindex"><span>游客登录</span></router-link>

   
    
    
    

  </div>
  	 </transition>
</template>

<script>
export default {
  name: 'loginres',
  data () {
    return {
      msg: 'Loginres'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@width:7.5vw;
.loginres{
	margin-top: 20/@width;
	font-size: 36/@width;
}
	button {
		color: #8859ef;
		font-size: 36/@width;
		width: 480/@width;
		margin-top: 20/@width;
		height: 80/@width;
		border: 2/@width solid #8859ef;
		background-color: #FFFFFF;
		margin-left:118/@width ;		
	}
	span{
		display: block;
		font-size: 30/@width;
		margin-top: 58/@width;
		color: #868686;
		text-align: center;
		position: relative;
		
	}
	span:after{
		content: "";
		display: block;
		width: 127/@width;
		height: 2/@width;
		background-color: #868686;
		position: absolute;
		top: 40/@width;
		left: 310/@width;
		
	}




	.slide-fade-enter-active{
		transition:all 1s ease;
	}

	.slide-fade-enter, .slide-fade-leave{
		transform: translateX(10px);
		opacity: 0;
	}
	
</style>