<template>
    <div id="app">
       <div class="content">
          <g_head/>  
          <g_content/> 
          <g_aside/>   
       </div>           
    </div>
</template>

<script>
    import g_head from './components/Header'
    import g_aside from './components/Left-nav'
    import g_content from './page/Content'
    export default {
      name: 'app',
      components: {
        g_head,
        g_aside,
        g_content
      }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
    }
</style>
