<style>
    header{
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        border-bottom: 1px solid #ddd;
    }
</style>
<template>
    <header class="header">
         <div class="head-content">
             <ul class="clearfix">
                 <li class="pull-left clearfix">
                     <div class="head-logo">
                         <a href="/">
                             Material UI
                         </a>
                     </div>
                 </li>
                 <li class="pull-right">
                     <a href="help" class="top-opts" title="皮肤">
                          <i class="iconfont icon-theme"></i>
                     </a>
                     <a href="message" class="top-opts" title="消息中心">
                          <i class="iconfont icon-xiaoxi1"></i>
                          <span class="badge bgc-red">
                            5
                          </span>
                     </a>
                     <div class="top-user dropdown">
                         <div class="user-account">
                              <img src="https://console.163yun.com/res/images/avatar/avatar00.png" alt="" class="account-avator">
                              <span>kker****@126.com</span>
                              <i class="iconfont icon-down drop-arrow"></i>
                         </div>
                         <div class="user-list">
                            <ul>
                                <li>
                                    <a href="">
                                        <i class="iconfont icon-iconfontwode1"></i>
                                        <span>
                                            个人信息
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="iconfont icon-zhanghuanquan"></i>
                                        <span>
                                            账户安全
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="{ssd=:U('Index/signin')}">
                                        <i class="iconfont icon-tuichudenglu"></i>
                                        <span>
                                            退出登录
                                        </span>
                                    </a>
                                </li>
                            </ul>
                         </div>
                     </div>
                 </li>
             </ul>
         </div>
    </header>

</template>
<script>
    export default {
        name:'Header',
        data(){
            return {
                msg:'head-模板'
            };
        }
    }
</script>