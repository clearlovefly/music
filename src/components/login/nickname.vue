<template>
	<div>
		<div class="container">
			<div class="usericon">
				<input type="file"  @change="iconSubmit"/>
				<img src="" alt="" id="preview"/>
			</div>
			<p>取一个昵称，让大家记不住你</p>
		<input type="text" placeholder="昵称" class="nickname"/>
		<br />
		<button @click="goLogin">开始音沐之旅</button>
		</div>

	</div>

</template>

<script>
export default {
  name: 'nickname',
  data () {
    return {
      msg: 'nickname'
    }
  },
  methods:{
  	goLogin:function(){

		this.$router.push({path:'/loginIndex/login'})
  	},

  	}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@width:7.5vw;
.container{

	margin-top: 100/@width;

}
.usericon{
	width: 200/@width;
	height: 200/@width;
	border: 1px solid black;
	border-radius: 50%;
	margin-left:280/@width;
}
p{	
	font-size: 36/@width;
	text-align: center;
		margin-top: 100/@width;
}
	.nickname,button{
		margin-top: 100/@width;
		margin-left: 150/@width;
	}
	input {
		width: 380/@width;
	
		height: 80/@width;
		border: none;
		border-bottom: 1/@width solid #000000;
		padding-left: 100/@width;
		font-size: 30/@width;
		
	}
	button {
		
		color: #8859ef;
		font-size: 36/@width;
		width: 480/@width;
		display: inline-block;

		height: 80/@width;
		border: 1px solid #8859ef;
		border-radius: (480-207)/2/@width;
		background-color: #FFFFFF;
		
	
		
	}
				img {
				width: 200px;
				height: 200px;
				background: yellow;
				border-radius: 50%;
			}
</style>