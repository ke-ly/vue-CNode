<template>
    
    <div class="create-area">
        <nnn/>
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
                             <span>
                                 发布话题
                             </span>  
                        </li>
                    </ul> 
                </div>
                <div class="inner">
                    <form action="" class="signin_form form-horizontal">
                        <div class="control-group">
                            <label for="" class="control-label">
                                选择版块:
                            </label>
                            <div class="controls">
                                <select name="" id="" v-model='tab'>
                                    <option value="">请选择</option>
                                    <option value="">分享</option>
                                    <option value="">问答</option>
                                    <option value="">招聘</option>
                                    <option value="dev">客户端测试</option>
                                </select>
                            </div>
                        </div>
                        <div class="control-group">
                            <label for="" class="control-label">
                                标题:
                            </label>
                            <div class="controls">
                                <input type="text" placeholder="标题字数 10 字以上" v-model="title">
                            </div>
                        </div>
                        <div class="control-group">
                            <label for="" class="control-label">
                                内容:
                            </label>
                            <div class="controls">
                                <textarea name="" id="" v-model="content"></textarea>
                            </div>
                        </div>
                        <div class="control-group">
                            <label for="" class="control-label">
                                
                            </label>
                            <div class="controls">
                                <button type="button" class="btn" @click='create'>
                                    立即发布
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>  
    </div>  
</template>
<script>
    import nnn from './navbar';
    import axios from 'axios';
    import store from '../config/store';
    
    export default {
        data(){
            return {
                title:'',
                tab:'dev',
                content:''
            }
        },
        components:{
            nnn   
        },
        methods:{
            create(){
                axios.post('https://cnodejs.org/api/v1/topics',{
                    accesstoken: store.fetch(),
                    title:this.title,
                    tab:this.tab,
                    content:this.content  
                }).then(res=>{
                    console.log(res)
                    alert('发布成功！！');
                    this.$router.push({path:`/topic/${res.data.data.topic_id}`})
                })    
            }
        }
    }
</script>
<style lang="scss">    
     .form-horizontal .btn{
        padding: 5px 25px;
        border-radius: 3px;
        background-color: #08c;
    }         
</style>