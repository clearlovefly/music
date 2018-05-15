<template>
	  <transition name="slide-logo">
     	
    
	<div class="login" v-show="isLogin">

		 <!--用form有bug 会影响登录跳转 验证可以用form-->
		<!--<form action="post">-->
		<div class="form">
			<input type="text" placeholder="请输入手机号" >
				<svg class="icon shouji" aria-hidden="true">
					<use xlink:href="#icon-shouji"></use>
				</svg>
			<br />
			<input type="password" placeholder="密码，不少于六位" />
				<svg class="icon suo" aria-hidden="true">
					<use xlink:href="#icon-suo"></use>
				</svg>
			<br />
			<input type="password" placeholder="确认密码" />
				<svg class="icon suoer" aria-hidden="true">
					<use xlink:href="#icon-suo"></use>
				</svg>
			<br />
		<button class="loginBtn" @click="goNickname">	下一步</button>
			
			


			
		</div>	
		<!--</form>-->

	</div>
	 </transition>
</template>

<script>
	import Icon from "../../assets/font/iconfont.js"
	export default {
		name: 'login',
		data() {
			return {
				msg: 'Login',
				isLogin:1
			}
		},
		components:{
			Icon
		},
		methods:{
			goNickname:function(){
				//if else
				this.$router.push({path:'/nickname'})
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@width:7.5vw;

	.form {
		width: 480/@width;
		height: 350/@width;
		margin: 0 auto;
		color: #8859ef;
		margin-top: 20/@width;
		position: relative;
	}
	
	input {
		width: 380/@width;
		margin-top: 20/@width;
		height: 80/@width;
		border: none;
		border-bottom: 1/@width solid #000000;
		padding-left: 100/@width;
		font-size: 36/@width;
		
	}
	.icon {
	   width: 48/@width; height: 45/@width;
	
	   fill: currentColor;
	
	   position: absolute;

	
	}
	.shouji{
		top: 40/@width;
		left: 20/@width;
	}
	.suo{
		top: 140/@width;
		left: 20/@width;
	}
	.suoer{
		top: 240/@width;
		left: 20/@width;
	}
	
	button {
		
		color: #8859ef;
		font-size: 36/@width;
		width: 480/@width;
		margin-top: 20/@width;
		height: 80/@width;
		border: 1px solid #8859ef;
		border-radius: (480-207)/2/@width;
		background-color: #FFFFFF;
	
		
	}
	.loginBtn{
		margin-top: 50/@width;
	}
	.btnunder{
		width: 420/@width;
		margin: 20/@width auto;
		text-decoration: none;
		font-size: 28/@width;
		text-decoration: none;
	}

	
	
	.res {
		float: left;
	}
	
	.forget {
		float: right;
	}
	
	
	
	
	/**/

	.slide-logo-enter-active{
		transition:all 1s ease;
	}
	
	.slide-logo-leave-active{
		transition: all 1s ease;
	}
	
	.slide-logo-enter, .slide-logo-leave{
		transform: translateX(10px);
		opacity: 0;
	}

</style>