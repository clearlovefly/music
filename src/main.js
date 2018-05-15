// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import qs from "qs"
import {
	Icon


} from 'element-ui'

import store from './store'

Vue.use(Icon)

Vue.prototype.$axios=Axios;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Add a request interceptor
Axios.interceptors.request.use(function(config) {
	if (config.method === "post") {
		config.data = qs.stringify(config.data)
	}
	return config;
}, function(error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function(response) {
	// Do something with response data
	return response;
}, function(error) {
	// Do something with response error
	return Promise.reject(error);
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
