<template>
   <div class="zujian">
      <my_div :msg='title' :erzi='val'>
          <div slot="title">实名插槽的title</div>
          <div slot="color"><input type="color" value="实名插槽的color" id=""></div>
      </my_div>  
      <my_btn @total="allConunter"></my_btn>     
      <my_btn @total="allConunter"></my_btn>     
      <my_btn @total="allConunter"></my_btn>     
      <my_btn @total="allConunter"></my_btn>     
      <my_btn @total="allConunter"></my_btn>     
      <my_btn @total="allConunter"></my_btn> 
      
      <p>所有按钮一共点击了{{totalCounter}}次</p>    
   </div>
</template>
<script>
    import my_div from './mydiv';
    import my_btn from './myBtn';
    export default{
        data(){
            return {
                title:'组件的通信(多次组件嵌套要用动态绑定)',
                val:"15756386245",
                totalCounter:0
            }
        },
        components:{
            my_div,my_btn
        },
        methods:{
            allConunter(){
                this.totalCounter++;
            }
        }
    }
</script>
<style lang="scss">
    .zujian{
        padding: 100px;
    }
    p{
        margin-top: 20px;
    }
</style>