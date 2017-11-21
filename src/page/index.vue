<template>
  <div class="">
    <navBaar/>
    <div id="main">
        <div class="panel">
            <div class="header">
                 <router-link class="topic-tab" v-for="tab in tabs" :key="tab.id" v-bind:to="tab.url" >{{tab.text}}</router-link>       
            </div>
            <div class="topic">
                <ul class="topic-list">
                  <li v-for="item in lists">
                      <a class="user_avatar" v-bind:href="'/user/'+item.author.loginname">
                          <img v-bind:src="item.author.avatar_url" alt="">
                      </a>
                      <span class="reply_count">
                          <span>
                               {{item.reply_count}}
                          </span>
                          <span>
                              /
                          </span>
                          <span>
                              {{item.visit_count}}
                          </span>
                      </span>
                      <a v-bind:href="'/topic/'+item.id" v-text="item.title">
                          
                      </a>
                  </li>
                </ul>  
            </div>
        </div>
    </div>
    
  </div>  
</template>
<script>
    import axios from 'axios';
    import navBaar from './navbar';
    
    export default {
        
      data() {
        return {
            lists:[],
            tabs:[
                {   
                    id:1,
                    text:"全部",
                    url:'/?tab=all'
                },
                {
                    id:2,
                    text:"精华",
                    url:'/?tab=all'
                },
                {
                    id:3,
                    text:"分享",
                    url:'/?tab=all'
                },
                {
                    id:4,
                    text:"问答",
                    url:'/?tab=all'
                },
                {
                    id:5,
                    text:"招聘",
                    url:'/?tab=all'
                },                
                {
                    id:6,
                    text:"客户端测试",
                    url:'/?tab=all'
                }
            ]
        }
      },
      components:{
          navBaar
      },
      created () {
        // 组件创建完后获取数据
        this.get_data()
      },
      methods: {
        get_data: function(params) {
          var self = this;
          axios.get('https://cnodejs.org/api/v1/topics').then(function(r){
              self.lists = r.data.data
          })
        },
      },
    }
</script>