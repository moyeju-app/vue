<template>
    <div>
      <fieldset class="a">
        <legend>개요</legend>
        <ul>
          <li>코스피 200에서 주식 3종목을 선정하여 헷지 가능한 포트폴리오 구성(CAPM 모형 활용)</li>
          <li>국채 편입 가능</li>
          <li>포트폴리오 베타 값 추출 후 사후 검증</li>
        </ul>
      </fieldset>

      <fieldset>
        <legend>포트폴리오 구성</legend>
        <ul>
          <li>미중 무역 전쟁으로 인해 환율 리스크 관리 결정</li>
          <li>기아자동차 : 수출 비중이 높아, 환율 상승 시 주가 상승 추세</li>
          <li>LG전자 : 많은 부채로 인해서 환율 상승으로 인한 수출 이득보다 부채로 인한 손해가 더 큼. 환율 하락 시 주가 상승 추세</li>
          <li>SK텔레콤 : 최근 3년간 기아자동차, LG전자 두 주식과 음의 상관관계</li>
          <li>CAL의 기울기가 최대가 되는 구성으로 포트폴리오 구성</li>
        </ul>
      </fieldset>
      
      <fieldset class="b">
        <legend>최종 포트폴리오</legend>
        <ul>
          <li>위험 자산 : 8, 무위험 자산 : 2 </li>
          <li>위험 자산 -- LG전자 : 47%, SK텔레콤 : 27%, 기아자동차 : 26%</li>
          <li>포트폴리오 베타 : 1.7312</li>
        </ul>
      </fieldset>

      <fieldset>
        <legend>사후 검증(2주)</legend>
        <ul>
          <li>시장수익률 X 베타 : 0.3385 %</li>
          <li>포트폴리오 수익률 : 2.3565 %</li>
          <li>간과한 리스크 : 과열된 미중 무역전쟁으로 인해 환율의 변동보다 미중 무역 협상의 진행 여부가 수출액에 더 큰 영향을 미침.</li>
        </ul>
      </fieldset>
    </div>
</template>
<style>
</style>