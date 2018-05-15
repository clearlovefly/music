<template>
    <div class="container">
       <div class="userinfo">
            <h4>个人信息</h4>
            <p>等级:</p>
            <p>性别:</p>
            <p>年龄:</p>
            <p>地区:</p>
       </div>
       <div class="userprofile">
           <h4>个人简介</h4>
       </div>
       <button @click="outLogin">退出</button>
    </div> 
</template>
        
<script>

export default {
    name:"all",
    data(){
        return{

        }
    },
    methods:{
    	outLogin(event){
    		this.$store.commit("outLogin")
    		
    			this.$router.push({
    				path:'/muindex'
    			})
    	}
    }
}

</script>

<style scoped  lang="less">
    @width: 75rem;
	.container{
        font-size: 28/@width;
        .userinfo{
            margin: 20/@width 0 0 20/@width;
            p{
                margin-top: 10/@width;
            }
        }
        .userprofile{
            margin: 20/@width 0 0 20/@width;
        }
    }
    	button {
		
		color: #8859ef;
		font-size: 36/@width;
		width: 480/@width;
		margin-top: 20/@width;
		margin-left: 140/@width;
		height: 80/@width;
		border: 1px solid #8859ef;
		border-radius: (480-207)/2/@width;
		background-color: #FFFFFF;
	
		
	}
</style>