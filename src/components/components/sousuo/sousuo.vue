<template>
  <div class="search">
    <div class="search_input">
      <input type="text" @blur="getSearch" ref="searchValue" :value="searchinfo" placeholder="搜索歌曲、歌单、专辑">
    </div>
    <div class="search_content">
      <div class="search_box" v-if="searchShowHide">
        <p>热门搜索</p>
        <ul>
            <li class="search_hot" @click="getSearchHotList">{{searchHotInfo.special_key}}</li>
            <li v-for="item in searchHotInfo.hotkey"  @click="getSearchHotList" >{{item.k}}</li>
        </ul>
      </div>
      <div v-else>
            <ul>
                <li v-for="item in searchSongLise">
                    {{item.songname}}
                </li>
            </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    search,
    searchHot
  } from "../../../api/search.js"
  export default {
    data() {
      return {
        searchinfo: "",
        searchHotInfo:"",
        searchShowHide:true,
        searchSongLise:""

      }
    },
    created() {
      this._searchHot();
    },
    methods: {
      _search(searchinfo) {
        search(searchinfo).then((res) => {
          this.searchSongLise=res.data.song;
         
          if(res){
            this.searchSongLise=this.searchSongLise.list;
          }
          console.log(this.searchSongLise)
        })
      },
      _searchHot() {
        searchHot().then((res) => {
          this.searchHotInfo=res.data;
        })
      },
      getSearch() {
        this.searchinfo = this.$refs.searchValue.value;
        this._search(this.searchinfo)
        console.log(this._search(this.searchinfo))
      },
      getSearchHotList(event){
        this.searchinfo=event.target.innerHTML;
        console.log(event.target.innerHTML)
        if(event.target.innerHTML=="中国新歌声第二季"){
            window.open("https://y.qq.com/m/act/singchina2/index.html?ADTAG=myqq")
        }else{
            this.$refs.searchValue.value=event.target.innerHTML;
            this._search(event.target.innerHTML);
            this.searchShowHide=false;

            
        }
        
        
      
      }
    }
  }

</script>
<style scoped>
  .search_input {
    background: #f4f4f4;
    padding: 20px;
    line-height: 24px;
  }

  .search_input input {
    width: 100%;
    height: 80px;
    vertical-align: super;
    text-indent: 20px;
    font-size: 24px;
    border: 1px solid #f1f1f1;
    border-radius: 10px;
  }

  .search_content {
      padding: 20px;
  }
.search_content .search_box p{
    font-size: 36px;
}
.search_content .search_box ul li{
    font-size: 36px;
    float: left;
    padding: 5px 10px;
    border-radius: 20px;
    border: 1px solid #ccc;
    margin-right: 20px;
    margin-top: 20px;
}
.search_content .search_box ul .search_hot{
    
    border: 1px solid red;
    color:red;

}
</style>
