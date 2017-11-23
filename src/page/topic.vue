<template>
  <div class="">
    <navBaar/>
    <div id="main">
        <div class="panel">
            <div class="header topic-header">
                <span class="topic_full_title">
                    <span class="put_top" v-if="content.isShow">
                        {{content.label}}
                    </span>
                    {{content.title}}
                </span> 
                <div class="changes">
                    <span>
                        发布于 {{content.create_at | timeAgo}}
                    </span>
                    <span>
                        作者：
                        <router-link :to="`/user/${content.loginname}`">{{content.loginname}}</router-link>
                    </span>
                    <span>
                        {{content.visit_count}} 次浏览
                    </span>
                    <span>
                        最后一次回复是 {{content.last_reply_at | timeAgo}}
                    </span>
                    <span>
                        来自 {{tabFormat(content.tab)}}
                    </span>
                </div>          
            </div>
            
            <div class="topic_content" v-html="content.content1"></div>
        </div>
        <div class="panel" v-if="replies.length > 0">
            <div class="header">
                <span class="col_fade">
                    {{replies.length}} 条回复
                </span>                
            </div>
            <div class="replies">
                <ul>
                    <li :class="[item.ups.length >= 6?'reply_highlight':'','reply_item']" v-for="(item,i) in replies" :key="item.id">
                        <div class="author_content">
                            <router-link :to="`/user/${item.author.loginname}`" class="user_avatar">
                                <img :src="item.author.avatar_url" alt="">
                            </router-link>
                            <div class="user_info">
                                <router-link :to="`/user/${item.author.loginname}`" class="reply_author">
                                    {{item.author.loginname}}
                                </router-link>
                                <a href="#" class="reply_time">
                                    {{i+1}}楼 • {{item.create_at | timeAgo}}
                                </a>                                    
                            </div>
                            <div class="user_action" v-if="item.ups.length > 0">
                                <span>
                                    <i class="fa" title="喜欢">赞</i>
                                </span>
                                <span class="up-count" >
                                    {{item.ups.length}}
                                </span>
                            </div>
                        </div>
                        <div class="reply_content" v-html="item.content"></div>
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
            content:{},
            replies:[]
        }
      },
      components:{
          navBaar
      },
      created () {
        this.getTopic();   
      },
      methods: {          
          getTopic(){     
              var self = this;
              let r = this.$route.params.id;
              axios.get(`https://cnodejs.org/api/v1/topic/${r}`).then(res=>{
                  let d = res.data.data;
                  
                  console.log(d.replies)
                  self.content = {
                      title:d.title, 
                      content1:d.content,
                      create_at:d.create_at,
                      loginname:d.author.loginname,
                      visit_count:d.visit_count,
                      last_reply_at:d.last_reply_at,
                      tab:d.tab
                  }
                  
                  self.replies = d.replies;
                  
                  if(d.top || d.good){
                        self.content.isShow = true;    
                  }
                                   
                  if(d.good){
                    self.content.label = '精华';        
                  }
                  
                  if(d.top){
                    self.content.label = '置顶';    
                  }
              })
              
          },          
          tabFormat(tab){           
            switch(tab){
                case 'ask':
                    return '问答'
                case 'job':
                    return '招聘'
                case 'share':
                    return '分享'
            }
        },
      },
    }
</script>