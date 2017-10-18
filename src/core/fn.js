import Vue from 'vue'
import moment from 'moment'
const GlobaFn = {
  last_time: function (time) {
    if (time <= 0) {
      return false
    } else {
      let days = parseInt(time / 1000 / 60 / 60 / 24, 10); //天数
      let hours = parseInt(time / 1000 / 60 / 60 % 24, 10); //时 
      let minutes = parseInt(time / 1000 / 60 % 60, 10);//分钟 
      let seconds = parseInt(time / 1000 % 60, 10);//秒数
      let result = '';
      if (days > 0) {
        result += `${days}天`;
      }
      hours = this.format(hours);
      minutes = this.format(minutes);
      seconds = this.format(seconds);
      result += `${hours}:${minutes}:${seconds}`;
      return result
    }
  },
  format: function (val) {
    val = Number(val);
    return (val < 10 ? '0' + val : val)
  },
  is_num: function (val) {
    let reg = new RegExp('^[0-9]*[1-9][0-9]*$');
  },
  is_phone: function (val) {
    let reg = /^1[34578]\d{9}$/;
    return reg.test(val)
  },
  is_psw: function (val) {
    let reg = /^(?=.*[0-9].*)(?=.*[a-zA-Z].*).{6,12}$/;
    return reg.test(val)
  },
  now: function () {
    let date = new Date();
    const o = {
      yyyy: date.getFullYear(),
      m: this.format((date.getMonth() + 1)),
      dd: this.format(date.getDate()),
      hh: this.format(date.getHours()),
      mm: this.format(date.getMinutes()),
      ss: this.format(date.getSeconds()),
      S: date.getMilliseconds()
    }
    return (`${o.yyyy}-${o.m}-${o.dd} ${o.hh}:${o.mm}:${o.ss}.${o.S}`);
  }
}
Vue.prototype.$fn = GlobaFn;