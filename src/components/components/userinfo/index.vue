<template>
	<div class="user_info"> 
		<div class="bg_info">
			<div class="function_keys">
				<span class="back"><router-link to ="/muindex/recommend"><img :src="img[0].url" alt=""></router-link></span>
				<span class="share"><img :src="img[1].url"alt=""></i></span>
			</div>
			<div class="head_portrait">
				<div class="info"></div>
				<p class="title">音沐音乐</p>
				<p class="guanzhu">关注 100 | 粉丝 10万</p>
				<p class="bianji">编辑</p>
			</div>
		</div>
		<ul class="list">
			<li><router-link  to="/music">音乐</router-link></li>
            <li><router-link  to="/dongtai">动态</router-link></li>
            <li><router-link  to="/aboutme">关于我</router-link></li>
		</ul>
		<div>
			 <router-view></router-view>
		</div>
	</div>
</template>
<script>
	 export default {
        name:"userinfo",
        data(){
            return{
				img:[{
					url:require("../../../assets/images/common/back.png")
				},{
					url:require("../../../assets/images/common/link.png")
				}]
            }
        }
    }
</script>
<style scoped  lang="less">
	@width:75rem;
	body{
		position: relative;
	}
	.user_info{
		.bg_info{
			width: 100%;
			height: 580/@width;
			background: url("../../../assets/images/usercenter/bg.png") no-repeat;
			background-size:100%;
			overflow: hidden;
			.function_keys{
				margin-top: 65/@width;
				overflow:hidden;
				span{
					float: left;
					width: 50%;
				}
				.back{
					img{
						margin-left: 35/@width;
						width: 50/@width;
					}
				}
				.share{
					img{
						float: right;
						margin-right: 35/@width;
						width: 50/@width;
					}				
				}
				
			}
			.head_portrait{
				text-align: center;
				margin-top: 30/@width;
				.info{
					width: 170/@width;
					height: 170/@width;
					border-radius: 50%;
					background: white;
					margin: 0 auto;
				}
				.title{
					font-size: 35/@width;
					color: white;
					letter-spacing: 3/@width;
					margin: 15/@width 0;
				}
				.guanzhu{
					color:white;
					font-size: 30/@width;
				}
				.bianji{
					width:160/@width;
					height:45/@width;
					line-height: 45/@width;
					font-size: 32/@width;
					color:white;
					margin: 0 auto;
					margin-top: 40/@width;
					border:2/@width solid white;	
					border-radius: 5/@width;		
				}
			}
		}
		.list{
			width:700/@width;
			margin:0 auto;
			height:70/@width;
			font-size: 35/@width;
			box-sizing: border-box;
			margin-bottom: 8/@width;
			li{
				float:left;
				width:33%;
				height:70/@width;
				line-height: 70/@width;
				text-align: center;
				a{  
                    display:inline-block; 
                    padding: 0 25/@width;
                    height: 76/@width;
                    color: #1f1e1f;
                }
				.router-link-active{
                    border-bottom: 4/@width solid #E41F6E;
                    color:#E41F7f;
                }
			}
		}
		
	}
</style>
