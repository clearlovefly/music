<template>
	<transition name="slide-top">
  <div class="loginIndex">
  	<!--下面这个是logo-->
 			 <img src="../../assets/images/common/logo.png" class="logo">

    
  
     	<router-view/>
 
     
     
     
     
     
     	<div class="otherApi">
				<p class="other"> 其他登录方式</p>
				<div class="otherImg">
					<img src="../../assets/images/common/qq.png" alt="" />
					<img src="../../assets/images/common/weixin.png" alt="" />
					<img src="../../assets/images/common/weibo.png" alt="" />
				
				</div>
				
			</div>

   
    
    

  </div>
  	 </transition>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      msg: 'LoginIndex'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@width:7.5vw;
.logo{
	width: 250/@width;
	height: 200/@width;
	margin: 0 auto;
	margin-top: 210/@width;
	margin-bottom: 110/@width;
}
.otherApi{
	width: 100%;
	height: 270/@width;
	position: absolute;
	top: 1000/@width;
	bottom: 50/@width;
	left: 0;
	text-align: center;
	color: darkgray;	
	font-size: 36/@width;
}
	.other {
		position: relative;
		margin-top: 20/@width;
	}
	
	.other::before {
		content: "";
		display: block;
		width: 213/@width;
		height: 1/@width;
		position: absolute;
		left: 50/@width;
		top: 25/@width;
		background: #e0e0e0;
	}
	
	.other::after {
		content: "";
		display: block;
		width: 213/@width;
		height: 1/@width;
		position: absolute;
		right: 50/@width;
		top: 25/@width;
		background: #e0e0e0;
	}
	.otherImg{
	
		margin:66/@width 0 ;
	}
	.otherImg img{
		width: 81/@width;
		height: 115/@width;
		float: left;
		margin-left: 120/@width;
	}
		.slide-top-enter-active{
		transition:all 1s ease;
	}
	
	.slide-top-leave-active{
		transition: all 1s ease;
	}
	 .slide-top-leave-to{
		transform: translateY(-1800/@width);
		opacity: 0;
	}

</style>
