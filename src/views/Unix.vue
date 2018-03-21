<template>
  <div style="padding: 20px;">
    <ul>
      <li v-for="item of formModel.gifList" :key="item.id">
        <el-badge :value="item.list.length" class="item">
          <el-button style="width: 80px;">{{item.date}}</el-button>
        </el-badge>
        <div class="sl-sign-gif-content-wrap">
          <el-card class="sl-sign-gif-content" v-for="gif of item.list" :key="gif.id">
            <div class="sl-sign-gif-top">
              {{gif.title}}<span class="sl-sign-gif-top-date"><i class="el-icon-date"></i>{{gif.start}}</span>
            </div>
            <div class="sl-sign-gif-mid">
              <img :src="gif.img">
            </div>
            <div class="sl-sign-gif-footer">
              <el-tooltip class="item" effect="light" :content="gif.url" placement="top">
                <p class="sl-sign-gif-footer-url">{{gif.url}}</p>
              </el-tooltip>
              <span class="sl-sign-gif-footer-btns">
                <el-button type="text" size="medium">编辑</el-button>
                <el-button type="text" size="medium">删除</el-button>
              </span>
            </div>
          </el-card>
        </div>
      </li>
      <li>
        <el-button  style="width: 80px;">结束</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formModel: {
        gifList: [
          {
            id: "0001",
            date: "第3天",
            list: [
              {
                id: "001",
                img: "static/img/1.jpg",
                title: "实物奖品一",
                url: "https://mall-manage.imeihao.shop/123213123/123123/123/12/3/123/12/3",
                start: "2018-03-17"
              },
              {
                id: "002",
                img: "static/img/2.jpg",
                title: "实物奖品二",
                url: "https://mall-manage.imeihao.shop/123213123/123123/123/12/3/123/12/3",
                start: "2018-03-17"
              }
            ]
          },
          {
            id: "0002",
            date: "第7天",
            list: [
              {
                id: "003",
                img: "static/img/3.jpg",
                title: "优惠券",
                url: "https://mall-manage.imeihao.shop/123213123/123123/123/12/3/123/12/3",
                start: "2018-03-17"
              },
              {
                id: "004",
                img: "static/img/4.jpg",
                title: "优惠券一",
                url: "https://mall-manage.imeihao.shop/123213123/123123/123/12/3/123/12/3",
                start: "2018-03-17"
              },
              {
                id: "005",
                img: "static/img/5.jpg",
                title: "优惠券二",
                url: "https://mall-manage.imeihao.shop/123213123/123123/123/12/3/123/12/3",
                start: "2018-03-17"
              }
            ]
          },
          {
            id: "0003",
            date: "第14天",
            list: [
              {
                id: "007",
                img: "static/img/3.jpg",
                title: "实物奖品一",
                url: "https://mall-manage.imeihao.shop/123213123/123123/123/12/3/123/12/3",
                start: "2018-03-17"
              },
              {
                id: "008",
                img: "static/img/2.jpg",
                title: "实物奖品二",
                url: "https://mall-manage.imeihao.shop/123213123/123123/123/12/3/123/12/3",
                start: "2018-03-17"
              },
              {
                id: "009",
                img: "static/img/1.jpg",
                title: "优惠券",
                url: "https://mall-manage.imeihao.shop/123213123/123123/123/12/3/123/12/3",
                start: "2018-03-17"
              },
              {
                id: "006",
                img: "static/img/6.jpg",
                title: "实物奖品",
                url: "https://mall-manage.imeihao.shop/123213123/123123/123/12/3/123/12/3",
                start: "2018-03-17"
              },
              {
                id: "010",
                img: "static/img/6.jpg",
                title: "实物奖品",
                url: "https://mall-manage.imeihao.shop/123213123/123123/123/12/3/123/12/3",
                start: "2018-03-17"
              },
            ]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
  .sl-sign-gif-content-wrap{
    padding: 40px 0 20px 100px;
    display: flex;
    flex-wrap: wrap;
  }
  .sl-sign-gif-content{
    margin-right: 20px;
    margin-bottom: 20px;
    .sl-sign-gif-top{
      display: flex;
      padding-bottom: 5px;
      border-bottom: 1px solid #e1e1e1;
      .sl-sign-gif-top-date{
        margin-left: auto;
      }
    }
    .sl-sign-gif-mid{
      padding: 15px 0;
      img{
        display: block;
        width: 278px;
        height: 84px;
      }
    }
    .sl-sign-gif-footer{
      border-top: 1px solid #e1e1e1;
      width: 278px;
      padding-top: 10px;
      display: flex;
      align-items: center;
      .sl-sign-gif-footer-url{
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .sl-sign-gif-footer-btns{
        margin-left: auto;
      }
    }
  }
  ul>li:not(:last-child) .sl-sign-gif-content-wrap{
    position: relative;
    &:after{
      content: '\200b';
      height: 100%;
      width: 1px;
      background-color: #dcdfe6;
      position: absolute;
      top:0;
      left: 40px;
    }
  }
</style>