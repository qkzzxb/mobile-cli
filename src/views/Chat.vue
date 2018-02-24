<template>
  <div>
    <ul v-if="chatList.length > 0">
      <li v-for="item of chatList" :key="item.title">
      <p>
        <span>{{item.role == 'xps' ? '本机' : '系统'}}</span>
        {{item.title}}
      </p>
      </li>
    </ul>
    <el-input v-model="input"></el-input>
    <el-button @click.native="send">发送</el-button>
  </div>
</template>

<script>
  import io from 'socket.io-client';
  const socket = io('http://localhost:8676');
  export default {
    data() {
      return {
        chatList:[],
        input:''
      }
    },
    created(){
      this.init();
    },
    methods: {
      init(){
        let self = this;
        socket.on('link', function (data) {
          console.log('接受消息',data);
          self.chatList.push(...data);
        });
      },
      send(){
        let self = this;
        socket.emit('chat', { role: 'xps', title: self.input });
        this.input = '';
      }
    },
  }
</script>