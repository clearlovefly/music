<template>
  <div class="geShouList">
    <ul>
      <li v-for="item in singers ">
        <p class="geShouName">{{item.title}}</p>
        <ul>
          <li v-for="ele in item.items">
            <div :id="ele.id">
              <img :src="ele.url" alt="">
              <span>{{ele.name}}</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>

</template>

<script>
  import {
    getSingerList
  } from "../../../../api/sing.js"
  import {
    getSengList
  } from "../../../../api/senglList.js"
  export default {
    name: "mu",
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
      this._getSengList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then((res) => {
          this.singers = res.data.list

          this.singers = this._normalizeSinger(res.data.list)
        })
      },
      _getSengList() {
        getSengList().then((res) => {
          console.log(res)
        })
      },
      _normalizeSinger(list) {
        let map = {
          hot: {
            title: "热门",
            items: []
          }
        }
        for (let i = 0; i < list.length; i++) {
          if (!map[list[i].Findex]) {
            map[list[i].Findex] = [{
              id: list[i].Fsinger_id,
              name: list[i].Fsinger_name,
              url: "https://y.gtimg.cn/music/photo_new/T001R150x150M000" + list[i].Fsinger_mid +
                ".jpg?max_age=2592000"
            }]
          } else {
            map[list[i].Findex].push({
              id: list[i].Fsinger_id,
              name: list[i].Fsinger_name,
              url: "https://y.gtimg.cn/music/photo_new/T001R150x150M000" + list[i].Fsinger_mid +
                ".jpg?max_age=2592000"
            })
          }
        }
        var arr = [];
        for (let key in map) {
          if (key !== "hot" && key !== "9") {
            arr.push(key)
          }
        }
        arr = arr.sort((a, b) => {
          return a.charCodeAt(0) - b.charCodeAt(0);
        })

        let mapObject = [];
        for (let i = 0; i < arr.length; i++) {
          mapObject.push({
            title: arr[i],
            items: map[arr[i]]
          })
        }
        return mapObject;
      }
    },
    computed: {

    }
  }

</script>

<style scoped lang="less">
  .geShouList {
    font-size: 18px;
    width: 100%
  }

  .geShouName {
    background: red;
  }

</style>
