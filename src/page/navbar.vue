<template>
    <div class="navbar">
        <div class="navbar-inner">
              <div class="container">
                  <router-link to="/" class="" v-bind:class="c">
                      <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="">
                  </router-link> 
                  <ul class="nav pull-right" >
                      <li v-for="nav in navs">
                          <router-link v-bind:to="nav.url" >{{nav.text}}</router-link>     
                      </li>
                  </ul>
              </div>  
        </div>
    </div>
</template>
<script>
    export default{
        name:"navBar",
        data(){
            return {
                navs:[
                    {
                        text:"首页",
                        url:'/'
                    },
                    {
                        text:"新手入门",
                        url:'/getstart'
                    },
                    {
                        text:"API",
                        url:'/api'
                    },
                     {
                        text:"关于",
                        url:'/about'
                    },
                ],
                c:'brand'
            }
        }
    }
</script>