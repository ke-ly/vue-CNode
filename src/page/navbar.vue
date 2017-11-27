<template>
    <div class="navbar">
        <div class="navbar-inner">
              <div class="container">
                  <router-link to="/" class="" v-bind:class="c">
                      <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="">
                  </router-link> 
                  <ul class="nav pull-right" >
                      <li>
                          <router-link to="/" >首页</router-link>  
                      </li>
                      <li>
                          <router-link to="/getstart" >新手入门</router-link> 
                      </li>
                      <li>
                          <router-link to="/api" >API</router-link>   
                      </li>
                      <li>
                          <router-link to="/about" >关于</router-link>  
                      </li>
                      <template v-if="isLogin">
                          <li >
                               <router-link to="/setting" >设置</router-link>     
                          </li>
                          <li>
                               <a href="javascript:" @click="signout">退出</a>     
                          </li>
                      </template>     
                      <template v-else="isLogin">
                          <li >
                               <router-link to="/signup" >注册</router-link>     
                          </li>
                          <li>
                               <router-link to="/signin" >登录</router-link>     
                          </li>
                      </template> 
                  </ul>
              </div>  
        </div>
    </div>
</template>
<script>
    import Store from '../config/store';
    
    export default{
        name:"navBar",
        data(){
            return {
                c:'brand',
                isLogin:true
            }
        },
        created(){
            this.get_at();    
        },
        methods:{
            get_at(){                
                if(Store.fetch() == null){
                    this.isLogin = false;
                }else{
                    this.isLogin = true
                }  
            },
            signout(){
                Store.clear();
                this.get_at()
            }
        }
    }
</script>