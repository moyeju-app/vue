<template>
  <div>
    <router-link class="link2" to="/project/project1"> 프로젝트1 </router-link>
    <router-link class="link2" to="/project/project2"> 프로젝트1 사후검증 </router-link>
    <router-link class="link2" to="/project/project3"> 프로젝트2 </router-link>
    <router-view /> 
  </div>
</template>
<style>
    #project{
      margin-left: 150px;
    }
    fieldset {
      width: 72%;
      margin-left: 50px;
      font-size: 1em;
      line-height : 2.5em;
    }
    fieldset.a{
      width: 50%;
    }
    fieldset.b{
      width: 40%;
    }
    img.portfolio {
      height: 70%;
      width: 60%;
      object-fit: contain;
    }
</style>
    