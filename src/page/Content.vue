<template>
    <section class="container">
         <main class="page-wrap">
             <h1 class="page-title">
                 {{title}}
             </h1>
             <div class="flex dashboard-row">
                <div class="flex-item card">
                    <div class="card-hd">
                        <h2>
                            标题
                        </h2>
                    </div>    
                    <div class="card-bd">

                    </div>
                </div>
                <div class="flex-item card">
                    <div class="card-hd">
                        <h2>
                            标题
                        </h2>
                    </div>    
                    <div class="card-bd">

                    </div>
                </div>
                <div class="flex-item card">
                    <div class="card-hd">
                        <h2>
                            标题
                        </h2>
                    </div>    
                    <div class="card-bd">

                    </div>
                </div>
             </div>
             
             <div v-for="title in list" class="flex dashboard-row">
                <div class="flex-item card">
                    <div class="card-hd">
                        <h2>
                            {{title}}
                        </h2>
                    </div>    
                    <div class="card-bd">

                    </div>
                </div>                       
             </div>
             
         </main>    
     </section> 
</template>
<script>
    import Data1 from '../assets/data/data.json'
    
    export default {
        "name":"content",
        data(){
            return {
                'title':'控制台',
                'list':Data1.like
            }
        }
    }    
</script>