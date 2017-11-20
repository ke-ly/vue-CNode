<template>
  <div class="sbb">
    <h1 class="logo">cnodejs Api Test</h1>
    <router-link to="/content" class="a-link">go content</router-link>    
    <ul class="list">
      <li v-for="item in lists">
          <a v-bind:href="'https://cnodejs.org/topic/'+item.id" v-text="item.title"></a>
      </li>
    </ul>
  </div>  
</template>
<script>
    export default {
      data() {
        return {
          lists:[]
        }
      },
      created () {
        // 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
        this.get_data()
      },
      methods: {
        get_data: function(params) {
          var v = this
          if (!params) params = {}
          // 我们这里用全局绑定的 $api 方法来获取数据，方便吧~
          v.$api.get('topics', params, function(r) {
              console.log(r.data)
            v.lists = r.data;
          })
        },
      },
    }
</script>