# HODU 소개 웹사이트!

<div align="center">
  
<img src="/project/hodu_img/head_in_box.png" width = 200px height = 300px>
<p><strong>고양이 호두를 소개하는 간단한 웹사이트 입니다!</strong></p>

[호두페이지 구경하기](https://dragon0622.github.io/html_practice/project/mini_project)
</div>

## 프로젝트 유형
<p>개인 프로젝트 (Front-End)</p> 

<br>

## 사용 기술 스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">


<br>
<br>

## 구현 기능

### 1. 카카오 map api 사용 지도 출력
<p> 카카오 개발자 모드의 map api를 사용하여 사이트 내에서 사용자가 시각적으로 주소를 알 수 있습니다.</p>

<hr>

<img src="/project/hodu_img/map_test.png" alt="">

<hr>

<br>

### 2-1. 무한 스크롤 구현
<p> 6장의 사진 아래 'Show More' 버튼을 클릭하여 ~~와 연결된 사진들을 스크롤을 통해 계속해서 볼 수 있습니다. </p>
<p> 무한스크롤은 사용자의 계속적인 <strong>사이트 탐색을 방해</strong> 할 수 있으므로 'Show More'버튼 클릭 시 활성되는 'Show End' 버튼을 화면에 고정했습니다.</p>

<img src="/project/hodu_img/showMoreBtn_test.png" alt="">

<br>

#### 2-2. Throttling
<p>무한 스크롤 js 내부 throttling을 추가하여 사용자가 입력한 스크롤을 조절해 과도한 사진이 업로드되는 것을 방지합니다.</p>

<br>

### 3. 구독 모달 창
<p>구독 input 박스에 이메일을 입력하고 'subscribe' 버튼을 클릭하면 화면에 고정되는 모달 창을 표시합니다. </p>
<p>모달 내부 'Ok! I Love Hodu' 버튼을 클릭하면 모달 창을 나올 수 있습니다.</p>

<img src="/project/hodu_img/modal_test.png" alt="">

<br>
<br>

## 프로젝트 중 문제점
<p> map.js와 카카오 api 를 적용하던 중 스크립트 파일이 저장되고 실행되는 속도로 인해 오류가 간헐적으로 발생 </p>
<p>-> html 태그 내부에 script 위치의 중요성, script 종류 중 defer, async의 용도를 알게 됨</p>
