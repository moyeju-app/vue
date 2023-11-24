<template>
    <div>
      <fieldset class="a">
        <legend>개요</legend>
        <ul>
          <li>재무지표와 모멘트 지표를 활용하여 주식종목을 추천해주는 프로그램 개발</li>
        </ul>
      </fieldset>

      <fieldset class="a">
        <legend>구성</legend>
        <ul>
          <li>안정성 지표 : 부채비율,  성장성 지표 : 매출액증가율</li>
          <li>수익성 지표 : ROE, 영업이익율,  모멘트 지표 : 베타</li>
          <li>지표마다 구간을 정해서 점수 부여</li>
          <li>합산점수 순위표 출력(베타 1.5이상 그룹과 1.5이하 그룹 분류)</li>
          <li>재무상태가 좋은 주식들 중 변동이 큰 주식과 낮은 주식 추출</li>
        </ul>
      </fieldset>
      <fieldset class="a">
        <legend>포트폴리오 구성</legend>
        <ul>
          <li>점수 순위표에 따라 투자자가 베타값이 큰 주식과 낮은 주식 선택</li>
          <li>CAPM 모형을 기반으로 두 종목의 최적 투자비율 추천</li>
        </ul>
      </fieldset>
    </div>
</template>
<style>
</style>