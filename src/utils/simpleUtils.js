const fn={
  last_time(time) {
    if (time <= 0) {
        return false
    } else {
        let days = parseInt(time / 1000 / 60 / 60 / 24, 10); //天数
        let hours = parseInt(time / 1000 / 60 / 60 % 24, 10); //时 
        let minutes = parseInt(time / 1000 / 60 % 60, 10); //分钟 
        let seconds = parseInt(time / 1000 % 60, 10); //秒数
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
  format(val) {
      val = Number(val);
      return (val < 10 ? '0' + val : val)
  },
  is_num(val) {
      let reg = new RegExp('^[0-9]*[1-9][0-9]*$');
  },
  date(val) {
      let date = new Date(val);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      m = this.format(m);
      d = this.format(d);
      return `${y}-${m}-${d} 00:00:00`;
  }
}
export default fn;