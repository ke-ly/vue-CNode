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
                    <template v-if='isLogin'>
                         <button type="button" v-if="isCollect"  class="btn" @click="collect(1)">收藏</button>    
                         <button type="button" v-else="isCollect"  class="btn qx" @click="collect(-1)">取消收藏</button>    
                    </template>
                   
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
                                    {{i+1}}楼 · {{item.create_at | timeAgo}}
                                </a>                                    
                            </div>
                            <div class="user_action">
                                <label for="" v-if="item.ups.length > 0">
                                    <span>
                                        <i class="" title="喜欢">赞</i>
                                    </span>
                                    <span class="up-count">
                                        {{item.ups.length}}
                                    </span>
                                </label>
                                <label for="">
                                    <a href="" class="a-link"  @click.prevent="reply_up(item.id)">
                                        点赞
                                    </a>
                                </label>
                                <label for="">
                                    <a href="" class="a-link"  @click.prevent="hf(item.id,item.author.loginname)">
                                        回复
                                    </a>
                                </label>
                            </div>
                        </div>
                        <div class="reply_content" v-html="item.content"></div>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="panel">
            <div class="header">
                <span class="col_fade">
                    添加回复
                </span>                
            </div>
            <div class="inner">
                 <textarea name="" id="" cols="30" rows="10" v-model="topic_reply" placeholder="请输入回复内容"></textarea>  
                 <button type="button" class="btn" @click="huifu()">
                    回复
                 </button>   
            </div>
        </div>
    </div>
    
  </div>  
</template>
<script>
    import axios from 'axios';
    import navBaar from './navbar';  
    import Store from '../config/store';
    
    export default {
        
      data() {
        return {
            content:{},
            replies:[],
            isLogin:false,
            isCollect:false,
            topic_reply:'',
            reply_id:''
        }
      },
      components:{
          navBaar
      },
      created () {
        this.getTopic();   
        this.get_at();
        this.myCollect()
      },
      methods: {     
          get_at(){  
                
                if(Store.fetch() == null){
                    this.isLogin = false;
                }else{
                    this.isLogin = true;
                }  
          },
          myCollect(){              
              let arr = [];
              let yourLoginName = 'kkerwin';
              axios.get(`https://cnodejs.org/api/v1/topic_collect/${yourLoginName}`).then(res=>{
                  res.data.data.forEach((v)=>{
                      arr.push(v.id)                      
                  })
                  arr.includes(this.$route.params.id) ? this.isCollect = false : this.isCollect = true;
              })  
          },
          getTopic(){     
              var self = this;
              let r = this.$route.params.id;
              axios.get(`https://cnodejs.org/api/v1/topic/${r}`).then(res=>{
                  let d = res.data.data;
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
        collect(i){
            if(i>0){
                axios.post('https://cnodejs.org/api/v1/topic_collect/collect',{
                    accesstoken:Store.fetch(),
                    topic_id:this.$route.params.id
                }).then(res=>{
                    alert('收藏成功！！');
                    this.isCollect = false;
                })     
            }else{
                axios.post('https://cnodejs.org/api/v1/topic_collect/de_collect',{
                    accesstoken:Store.fetch(),
                    topic_id:this.$route.params.id
                }).then(res=>{
                    alert('取消成功！！');
                    this.isCollect = true;
                })       
            }               
        },
        hf(id,name){
            this.reply_id = id;            
            this.topic_reply = `@${name}`   
        },
        huifu(){            
            
            if(this.topic_reply == ''){
                alert('回复的内容不能为空！！');
                return;
            }
            
            axios.post(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}/replies`,{
                accesstoken:Store.fetch(),
                content:this.topic_reply,
                reply_id:this.reply_id
            }).then(res=>{
                alert('回复成功！');
                this.topic_reply = '';
                this.getTopic();
            })    
        },
        reply_up(i){
            axios.post(`https://cnodejs.org/api/v1/reply/${i}/ups`,{
                accesstoken:Store.fetch(),
            }).then(res=>{
                this.getTopic();
            })     
        }
      },
    }
</script>
<style lang="scss">
    .changes .btn{
        float: right;
    }
    .btn:not(.qx){        
        border-radius: 3px;
        background-color: #80bd01;   
    }
    textarea{
        display: block;
        width: 100%;
        min-height: 150px;
        outline: none;
        border: none;
        padding: 15px 10px;
        font-size: 16px;
        resize: none;
    }
    .reply_time{
        color: #08c!important;
    }
    textarea+.btn:not(.qx){
        margin: 20px;
        color: #fff;
        background-color: #08c;
    }
    
    .user_action{
        i{
            font-style: normal;
        }
    }
    .a-link{
        margin-left: 10px;
    }

</style>