<template>
    <div>
        <div class="container">
         歌单
        </div> 
        <div class="music_top">
            <div class="top_img">
                <img src="" alt="">
            </div>
            <div class="top_info">
                <h4>听歌排行</h4>
                <p>累计听歌300首</p> 
            </div>
            
        </div>
        <div class="music_like">
            <div class="like_img">
                <img src="" alt="">
            </div>
            <div class="like_info">
                <h4>喜欢的音乐</h4>
                <p>30首,播放60次</p> 
            </div>
        </div>
     </div> 
</template>
        
<script>
export default {
    name:"music",
    data(){
        return{

        }
    }
}

</script>

<style scoped  lang="less">
    @width: 75rem;
	.container{
        font-size: 32/@width;
        width: 100%;
        height:55/@width;
        background: #F7F7F7;
        line-height: 55/@width;
        padding-left: 15/@width;
    }
    .music_top{
            width: 100%;
            height: 130/@width;
            border-bottom:2/@width solid #E6E6E6;
            .top_img{
                width:110/@width;
                height:110/@width;
                background: rgba(0,0,0,.2);
                margin:12/@width 0 0 12/@width;
                float: left;
            }
            .top_info{
                float:left;
                margin-top: 30/@width;
                margin-left: 20/@width;
                h4{
                    font-size: 30/@width;
                }
                p{
                    font-size:26/@width;
                }
            }
        }
        .music_like{
            width: 100%;
            height: 130/@width;
            .like_img{
                width:110/@width;
                height:110/@width;
                background: rgba(0,0,0,.2);
                margin:12/@width 0 0 12/@width;
                float: left;
            }
            .like_info{
                float:left;
                margin-top: 30/@width;
                margin-left: 20/@width;
                h4{
                    font-size: 30/@width;
                }
                p{
                    font-size:26/@width;
                }
            }
        }
</style>