<template>
    <aside class="nav">
        <ul class="main-menu">
            <li class="active">
                <a href="dash/index">
                    <i class="iconfont icon-shouyeshouye"></i>
                    <span>
                        首页
                    </span>
                </a>
            </li>
            <li class="">
                <a href="layout/index">
                    <i class="iconfont icon-buju"></i>
                    <span>
                        flex布局
                    </span>
                </a>
            </li>
            <li class="">
                <a href="">
                    <i class="iconfont icon-ui1"></i>
                    <span>
                        UI元素
                    </span>
                    <i class="iconfont nav-arrow">
                       &#xe608;
                    </i>
                </a>
                <ul class="sub-menu">
                    <li class="">
                        <a href="Uikit/color">
                          颜色
                        </a>
                    </li>
                    <li class="">
                        <a href="Uikit/table">
                          表格
                        </a>
                    </li>
                    <li class="">
                        <a href="Uikit/card">
                          卡片
                        </a>
                    </li>
                    <li class="">
                        <a href="Uikit/loading">
                          Loading
                        </a>
                    </li>
                    <li class="">
                        <a href="Uikit/hover">
                          hover
                        </a>
                    </li>
                </ul>
            </li>
            <li class="">
                <a href="">
                    <i class="iconfont icon-icon1"></i>
                    <span>
                        表单
                    </span>
                    <i class="iconfont nav-arrow">
                      &#xe608;
                    </i>
                </a>
                <ul class="sub-menu">
                    <li class="">
                        <a href="Form/radio">
                          Radio
                        </a>
                    </li>
                    <li class="">
                        <a href="Form/checkbox">
                          Checkbox
                        </a>
                    </li>
                    <li class="">
                        <a href="Form/input">
                            input
                        </a>
                    </li>
                    <li class="">
                        <a href="Form/input_number">
                            计数器
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="">
                    <i class="iconfont icon-kongzhitai"></i>
                    <span>
                        菜单4
                    </span>
                    <i class="iconfont nav-arrow">
                       &#xe608;
                    </i>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a href="">
                          菜单4-1
                        </a>
                    </li>
                    <li>
                        <a href="">
                          菜单4-2
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="nav-foot">
            <a href="javascript:" class="trigger">
                <i class="iconfont">
                    &#xe691;
                </i>
            </a>
        </div>
    </aside>
</template>
<script>
    export default {
        name:"leftNav",
        data(){
            return {
                
            }
        }
    }
</script>
<style>

</style>