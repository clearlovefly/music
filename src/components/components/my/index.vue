<template>
    <div>
        <HeaderNav/>
        <div class="container">
            <ul>
                <li><router-link  to="/myIndex/mylike">我喜欢</router-link></li>
                <li><router-link  to="/myIndex/all">全部</router-link></li>
                <li><router-link  to="/myIndex/recentlyPlayed">最近下载</router-link></li>
                <li><router-link  to="/myIndex/downLoad">最近播放</router-link></li>
            </ul> 
        </div> 
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
        
<script>
    import HeaderNav from "../com/headerNav.vue"
    export default {
        name:"my",
        data(){
            return{

            }
        },
        components:{
            HeaderNav
        }
    }

</script>

<style scoped  lang="less">
    @width:75rem;
    .container{
        width: 750/@width;
        height: 80/@width;
        box-sizing: border-box;
        ul{
            width: 100%;
            overflow: hidden;     
            li{
                float: left;
                width:25%;
                height:80/@width;
                line-height: 80/@width;
                font-size: 28/@width;
                font-family: "微软雅黑";
                text-align: center;
                border-bottom: 2/@width solid #DFDFE0;
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