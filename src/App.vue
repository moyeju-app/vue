<template>
    <div id ="index" >
      <header>
        박수현의 PORTFOLIO
      </header>
    
      <div id="container">
        <div id ="nav">
          <router-link class="link1" to="/resume"> 이력서 </router-link>
          <router-link class="link1" to="/introduce"> 자기소개서 </router-link>
          <router-link class="link1" to="/project"> 프로젝트 </router-link>
          <router-link class="link1" to="/career"> 기타 경력 </router-link>
        </div>
       
        <div id = "main"> 
          <router-view /> 
        </div>
      </div>  
    <footer>
      <i>
        연락처 : 010-9979-XXXX
        <br />
        이메일 : qwerty@naver.com
      </i>
    </footer>
  </div>  
</template>
<style src="./App.css"> </style>
