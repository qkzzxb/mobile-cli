let template_lis =  [{
    "template_id": "iPk5sOIt5X_flOVKn5GrTFpncEYTojx6ddbt8WYoV5s",
    "title": "购买成功通知",
    "primary_industry": "IT科技",
    "deputy_industry": "互联网|电子商务",
    "content": "{ {first} }\n商品名称:{ {keynote1} }\n消费金额:{ {keynote2} }\n购买时间:{ {keynote3} }\n{ {remark} }"
}]
let msg = {
  "touser":"OPENID",
  "template_id":"iPk5sOIt5X_flOVKn5GrTFpncEYTojx6ddbt8WYoV5s",
  "url":"http://weixin.qq.com/download",  
  "miniprogram":{
    "appid":"xiaochengxuappid12345",
    "pagepath":"index?foo=bar"
  },          
  "data":{
          "first": {
              "value":"恭喜你购买成功！",
              "color":"#173177"
          },
          "keynote1":{
              "value":"巧克力",
              "color":"#173177"
          },
          "keynote2": {
              "value":"39.8元",
              "color":"#173177"
          },
          "keynote3": {
              "value":"2014年9月22日",
              "color":"#173177"
          },
          "remark":{
              "value":"欢迎再次购买！",
              "color":"#173177"
          }
  }
}