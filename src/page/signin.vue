<template>
     <div>
         <headNav/>  
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
                                 登录
                             </span>   
                        </li>
                    </ul>  
                </div>
                <div class="inner">
                    <form action="" class="signin_form form-horizontal">
                        <div class="control-group">
                            <label for="" class="control-label">
                                AccessToken:
                            </label>
                            <div class="controls">
                                <input type="text" v-model='AccessToken'>
                            </div>
                        </div>
                        <div class="control-group">
                            <label for="" class="control-label">
                                
                            </label>
                            <div class="controls">
                                <button type="button" class="btn" @click='login'>
                                    登录
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
    import headNav from './navbar';
    import Store from '../config/store';
    import axios from 'axios';
    
    export default{
        data(){
            return{
                AccessToken:''    
            }   
        },
        components:{
            headNav    
        },
        methods:{
            login(){
                var self = this;  
                axios.post('https://cnodejs.org/api/v1/accesstoken',{
                    accesstoken:self.AccessToken
                }).then((res)=>{
                    let d = res.data;                    
                    if(d.success){
                        Store.save(self.AccessToken);
                        alert('登录成功！！');
                        this.$router.push({name:"index",path:"/"})
                    }
                }).catch(err=>{
//                    alert('错误的accessToken');
                })           
            }
        }
    }
</script>
<style lang="scss">
    .inner{
        padding: 15px;
    }    
    .form-horizontal .btn{
        padding: 5px 25px;
        border-radius: 3px;
        background-color: #08c;
    }
</style>