import Vue from 'vue'
import Router from 'vue-router'
import Qidong from "../components/qidongye/qidongye.vue"
import Yindaoye from "../components/yindaoye/yindaoye.vue"
//登录界面
import LoginIndex from '@/components/login/loginIndex'
import Login from '@/components/login/login'
import Loginres from '@/components/login/loginres'
import Register from '@/components/login/register'
import Nickname from '@/components/login/nickname'
//内容区域
import Contents from "../components/components/contents.vue"
//听歌识曲
import SoundHound from "../components/components/SoundHound/index.vue"

//音沐
import AppGuide from "../components/components/appguide/index.vue"
import MuIndex from "../components/components/mu/index.vue"
import MyIndex from "../components/components/my/index.vue"
import DynamicIndex from "../components/components/dynamic/index.vue"
import UserInfo from "../components/components/userinfo/index.vue"
//歌单
import List from "../components/components/mu/muLIst/list.vue"
import Recommend from "../components/components/mu/muLIst/recommend.vue"
import SongSheet from "../components/components/mu/muLIst/songSheet.vue"
import RadioDtation from "../components/components/mu/muLIst/radioStation.vue"
//我的音乐下的二级路由
import MyLike from "../components/components/my/details/mylike.vue";
import RecentlyPlayed from "../components/components/my/details/recentlyPlayed.vue";
import All from "../components/components/my/details/all.vue";
import DownLoad from "../components/components/my/details/download.vue";
//搜索
import Sousuo from "../components/components/sousuo/sousuo.vue"
//个人中心下的二级路由
import Music from "../components/components/userinfo/userlist/music.vue"
import Dongtai from "../components/components/userinfo/userlist/dongtai.vue"
import AboutMe from "../components/components/userinfo/userlist/aboutme.vue"
//我的信息
import Myinfo from "../components/components/myinfo/myinfo.vue"
import Sixin from "../components/components/myinfo/myinfolist/sixin.vue"
import Pinlun from "../components/components/myinfo/myinfolist/pinlun.vue"
import Callmy from "../components/components/myinfo/myinfolist/callmy.vue"
import Tongzhi from "../components/components/myinfo/myinfolist/tongzhi.vue"
//我的好友
import Myfriend from "../components/components/myfriend/myfriend.vue"
import Guanzhu from "../components/components/myfriend/myfriendlist/guanzhu.vue"
import Fensi from "../components/components/myfriend/myfriendlist/fensi.vue"

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: "/qidong"
		}, {
			path: "/qidong",
			component: Qidong
		}, {
			path: "/yindaoye",
			component: Yindaoye
		}, {
			path: '/loginIndex',
			name: 'loginIndex',
			redirect: '/loginIndex/loginres',
			component: LoginIndex,
			children: [

				{
					path: 'login',
					name: 'login',
					component: Login

				}, {
					path: 'loginres',
					name: 'loginres',
					component: Loginres

				}, {
					path: 'register',
					name: 'register',
					component: Register

				},
			]

		},
		{
			path: '/nickname',
			name: 'nickname',
			component: Nickname

		},
		{
			path: "/contents",
			component: Contents
		}, {
			path: "/appGuide",
			name: "appGuide",
			component: AppGuide
		}, {
			path: '/muindex',
			name: 'muindex',
			component: MuIndex,
			redirect: "/muindex/recommend",
			children: [{
				path: "list",
				name: "list",
				component: List
			}, {
				path: "songSheet",
				name: "songSheet",
				component: SongSheet
			}, {
				path: "recommend",
				name: "recommend",
				component: Recommend
			}, {
				path: "radioDtation",
				name: "radioDtation",
				component: RadioDtation
			}]
		}, {
			path: "/myIndex",
			name: "myIndex",
			component: MyIndex,
			redirect: "/myIndex/mylike",
			children: [{
				path: "mylike",
				name: "myLike",
				component: MyLike,
			}, {
				path: "/myIndex/all",
				name: "all",
				component: All,
			}, {
				path: "/myIndex/downLoad",
				name: "downLoad",
				component: DownLoad,
			}, {
				path: "/myIndex/recentlyPlayed",
				name: "recentlyPlayed",
				component: RecentlyPlayed,
			}]
		}, {
			path: "/dynamicIndex",
			name: "dynamicIndex",
			component: DynamicIndex
		}, {
			path: "/userInfo",
			name: "userInfo",
			component: UserInfo,
			redirect: "/music",
			children: [{
				path: "/music",
				name: "music",
				component: Music,
			}, {
				path: "/dongtai",
				name: "dongtai",
				component: Dongtai,
			}, {
				path: "/aboutme",
				name: "aboutme",
				component: AboutMe,
			}]
		},
		{
			path: "/sousuo",
			name: "sousuo",
			component: Sousuo
		}, {
			path: "/soundHound",
			name: "soundHound",
			component: SoundHound
		},
		{
			path: "/myinfo",
			name: "myinfo",
			component: Myinfo,
			redirect: "/myinfo/sixin",
			children: [{
					path: "sixin",
					name: "sixin",
					component: Sixin,
				},
				{
					path: "pinlun",
					name: "pinlun",
					component: Pinlun,
				}, {
					path: "callmy",
					name: "callmy",
					component: Callmy,

				},
				{
					path: "tongzhi",
					name: "tongzhi",
					component: Tongzhi,

				}
			]
		}, {
			path: "/myfriend",
			name: "myfriend",
			component: Myfriend,
			redirect: "/myfriend/guanzhu",
			children: [{
					path: "guanzhu",
					name: "guanzhu",
					component: Guanzhu,
				},
				{
					path: "fensi",
					name: "fensi",
					component: Fensi,
				}
			]

		}

	]
})