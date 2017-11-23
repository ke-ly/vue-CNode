<template>
    <div class="">
        <navBaar/>
        <div id="main">
             <div class="panel">
                 <div class="header">
                    <ul class="breadcrumb">
                        <li>
                            <router-link to="/">
                                 主页    
                             </router-link> 
                             <span class="divider">
                                 /
                             </span>   
                        </li>
                    </ul>                     
                 </div>
                 <div class="inner userinfo">
                      <div class="user_big_avatar">
                          <img :src="user.avatar_url" alt="">
                      </div>   
                      <a href="javascript:" class="dark">
                          {{user.name}}
                      </a>
                      <div class="user_profile">
                          <ul class="unstyled">
                              <li>
                                  <span>{{user.score}} 积分</span>
                              </li>                              
                              <li>
                                  <label for="">主页：</label>
                                  <a :href="`http://${user.name}.com`" class="dark" target="_blank">
                                      http://{{user.name}}.com
                                  </a>
                              </li>                              
                              <li>
                                  <label for="">github：</label>
                                  <a :href="`https://github.com/${user.name}`" class="dark" target="_blank">
                                      @{{user.name}}
                                  </a>
                              </li>
                              <li>
                                  <label for="">微博：</label>
                                  <a href="javascript:" class="dark" target="_blank">
                                       {{user.name}}的微博  
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <p class="col_fade">
                          注册时间 {{user.create_at | timeAgo}}
                      </p>
                 </div>
             </div>
                  
            <div class="panel">
                <div class="header">
                    最近创建的话题
                </div>
                <div class="topic">
                    <ul class="topic-list">
                      <li v-for="item in recent_topics">
                          <router-link class="user_avatar pull-left" :to="`/user/${item.author.loginname}`">
                              <img v-bind:src="item.author.avatar_url" alt="">
                          </router-link >                      
                          <div class="pull-left">                          
                              <router-link :to="`/topic/${item.id}`" class="topic_title">
                                  {{item.title}}
                              </router-link>
                          </div>

                          <router-link :to="`/topic/${item.id}`" class="pull-right">
                              <span class="last_active_time">
                                  {{item.last_reply_at | timeAgo}}
                              </span>
                          </router-link>
                      </li>
                    </ul>  
                </div>
            </div> 
            
            <div class="panel">
                <div class="header">
                    最近参与的话题
                </div>
                <div class="topic">
                    <ul class="topic-list">
                      <li v-for="item in recent_replies">
                          <router-link class="user_avatar pull-left" :to="`/user/${item.author.loginname}`">
                              <img v-bind:src="item.author.avatar_url" alt="">
                          </router-link >                      
                          <div class="pull-left">                          
                              <router-link :to="`/topic/${item.id}`" class="topic_title">
                                  {{item.title}}
                              </router-link>
                          </div>

                          <router-link :to="`/topic/${item.id}`" class="pull-right">
                              <span class="last_active_time">
                                  {{item.last_reply_at | timeAgo}}
                              </span>
                          </router-link>
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
        data(){
            return{
                user:{},
                recent_topics:[],
                recent_replies: []
            }
        },
        created(){
            this.getUser()
        },
        components:{
            navBaar     
        },
        methods:{
            getUser(){
                var self = this;
                let r = this.$route.params.id;
                axios.get(`https://cnodejs.org/api/v1/user/${r}`).then(res=>{
                    
                    let d = res.data.data;
                    this.recent_topics = d.recent_topics;
                    this.recent_replies = d.recent_replies;
                    this.user = {
                        name:d.loginname,
                        avatar_url:d.avatar_url,
                        create_at:d.create_at,
                        github:d.githubUsername,
                        score:d.score
                    } 
                })
                
            }
        }
    }
</script>