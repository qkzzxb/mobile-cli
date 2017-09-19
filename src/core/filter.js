import Vue from 'vue'
import moment from 'moment'
moment.locale('zh-cn');

Vue.filter('showtime', function(value) {
    return (moment(Number(value)).format('ll'))
})
Vue.filter('statusOut', function(status) {
    switch(status){
        case 1:
          return '进行中'
        break;
        case 2:
          return '已结束'
        break;
        case 3:
          return '报名中'
        break;
    }
})