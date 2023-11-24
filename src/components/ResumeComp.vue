<template>
  <div>
    <router-link class="link2" to="/resume/resume"> 이력서 </router-link>
     <br /> <br />
    <router-view /> 
  </div>
</template>
<style>
    #resume{
      margin-left: 150px;
    }
    em{
      font-size: 1.5em;
      padding: 70px 20px;
    }
    table{
      width: 90%;
      border: 1px solid black;
      border-collapse: collapse;
      text-align: center;
      font-size: 1.5 em;
    }
    td,th{
      width: 15%;
      border: 1px solid black;
    }
    tr{
      height: 30;
    }
    table.a{
      width: 65%;
    }
    table.aa{
      width: 50%;
    }
    img {
      height: 80%;
      width: 100%;
      object-fit: contain;
    }
</style>