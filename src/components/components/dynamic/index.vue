<template>
  <div>
    <HeaderNav/>
    <div class="dynamic">

      <div v-for="(user,index) in userdata" class="template" :key="index" >

        <!--头像-->
        <div class="user">
          <img :src="user.usericon" alt="" class="usericon" />
          <span class="username">{{user.username}}</span>
          <br />
          <span class="timer">{{user.timer}}</span>
			
          <span class="follow"  @click="design(index)"  ></span>
       
        </div>

        <!--正文-->
        <div class="main">
          <p>{{user.content}}</p>
          <p class="title">{{user.title}}</p>

          <div @click="fullHandle" v-if="show">查看</div>
          <div v-else="show">
            <p>剩下的文章</p>
            <div @click="partHandle">收起全文</div>
          </div>
        </div>





        <!--配图-->
        <div class="illustration">
          <div v-for=" img in user.userImg">
            <img :src="img" alt="" />


          </div>

        </div>







        <!--互动-->
        <div class="interact" >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dianzan"></use>
          </svg>
          <span class="infont">{{user.dianzan}}</span>

          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon-test">226</use>
          </svg>
          <span class="infont">{{user.pinglun}}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Rectangle">350</use>
          </svg>
          <span class="infont">{{user.fenxiang}}</span>
        </div>
        <div v-if="index%2 == 0" class="hr"></div>
      </div>



      <!--template分割线-------------------------------------------->


    </div>
  </div>

</template>

<script>
  import Icon from "../../../assets/font/iconfont.js"
  import HeaderNav from "../com/headerNav.vue"
  export default {
    name: "dynamic",
    data() {
      return {
        show: true,
        count:1,
      
        userdata: [{
            usericon: require("../../../assets/images/dongtai/usericon-1.png"),
            username: "音乐总局",
            timer: "昨天 19:14",
            content: "【Raaz and Nina】所有失去的，都会以另一种方式归来，成熟的人，不问过去，聪明的人，不问现在，豁达的人，不问未来",
            userImg: [require("../../../assets/images/dongtai/beautiful_1.png"), require(
              "../../../assets/images/dongtai/beautiful_3.png")],
            dianzan: 702,
            pinglun: 226,
            fenxiang: 350,
            follow:"已关注"


          },
          {
            usericon: require("../../../assets/images/dongtai/usericon-2.png"),
            username: "音乐总局",
            timer: "昨天 19:14",
            content: '"只要活着，就不算悲剧，我们尚在途中，今后仍要继续"',
            title: "——《火花》",

            userImg: [require("../../../assets/images/dongtai/beauty01.png"), require(
              "../../../assets/images/dongtai/beauty02.png")],
            dianzan: 102,
            pinglun: 360,
            fenxiang: 652,
            follow:"+关注"

          }
        ]

      }
    },
    components: {
      Icon,
      HeaderNav
    },
    computed:{
    	
    },
    methods: {
      //点击查看全文


      fullHandle(event) {
        this.show = false
        console.log(this.userdata)


      },
      //关注
      design(index){
			let follow=this.userdata[index].follow
			this.userdata[index].dianzan+1
			if(follow="已关注"){
				follow="+关注";
			}else{
				follow="已关注";
			}
   
         
      	
    
      
      },
      //点击收起全文
      partHandle() {
        this.show = true
      },
      cutContent: function (contentPre) {

      },
      
    //点赞
      like(){
      	this.count
      }

    }


  }

</script>

<style  scoped lang="less">
@width:7.5vw;
/*75rem=屏宽  @width=@font*/
@font:75rem;
/*置顶层*/

	.dynamic{
		position: absolute;
		top:80/@font;
		bottom:80/@font;
		width: 100%;
		overflow-y:auto ;
	
	
	}

	*{
		font-family: "苹方";
		font-size: 28/@font;
		color: #1f1e1f;

	}

	.template{
		margin-top:39/@width;
		padding-bottom:20/@width;
		padding-left: 48/@width;
		position: relative;
		
		
	}



	
	.user{
		width: 702/@width;
		height:100/@width;
		position: relative;
	
	}
	.usericon{
		width: 80/@width;
		height: 80/@width;
		 float: left; 
		 border-radius: 50%;
	}
		 .username{
		 	float: left;
		 	margin-left: 18/@width;
		 }
		 .timer{
		 	float: left;
		 	font-size: 24/@font;
		 	margin-left: 18/@width;
			color: #333333;
		 }
		  .follow{ 
		  	
		  	width: 180/@width;
		  	height: 31/@width;
		  	font-size: 33/@width;
		  	top: 9/@width;
		  	left: 500/@width;
		  	position: absolute;
		  
		 
		  	color: red;
		  	float: right;
		  	 } 
		 
		 .main{
		 	width:  550/@width;
		 	height: 150/@width;
		 	margin-left: 98/@width;
		
		 }
		.title{
			float: right;
		
			
		}
	  .illustration {
	  	width:  604/@width;
	  	height: 265/@width;
	  	margin-left: 98/@width;
	
	  }
	 .illustration img{
	 	margin-right: 9/@width;
	 	width: 261/@width;
	 	height: 262/@width;
	 	float: left;
	 }
	 
	 /*互动*/
	 /*//点赞*/
	.interact{
		width:300/@width;
		height: 50/@width;
		
		margin:30/@width 0  30/@width  330/@width;
	
	}
	.infont{
		font-size: 24/@width;

	}
	.icon { 
	
		width: 32/@width; 
		height: 33/@width; 
		margin-left: 10/@width;
		vertical-align: -8/@width;
		 fill: currentColor; 
		 overflow: hidden;
		  }
		.hr{
			
		
			width: 100%;
			height: 2/@width;
			position: absolute;
			background-color: #8859ef;
			left: 0/@width;
	
			bottom: 0;
		}

</style>
