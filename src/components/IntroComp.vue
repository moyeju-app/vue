<template>
  <div>
      <router-link class="link2" to="/introduce/introduce1"> 동기 </router-link>
      <router-link class="link2" to="/introduce/introduce2"> 장점 </router-link>
      <router-link class="link2" to="/introduce/introduce3"> 단점 </router-link>
      <router-view /> 
  </div>
</template>
<style>
    #introduce{
      margin-left: 150px;
    }
    img{
      width:1200px;
      height:800px;
    }
    
    fieldset {
      width: 72%;
      margin-left: 50px;
      font-size: 1em;
      line-height : 2.5em;
    } 
    legend{
      font-size: 1.5em;
    }
</style>
    