# MOTION

### html, css, typescript

### 프레임워크/ 라이브러리 없이 구현

<br/>

## **요구사항**

- image, video, note, todo 버튼
- 버튼 클릭 시 title, url 과 같이 각 기능에 해당하는 내용을 넣을 수 있는 dialog 생성
- youtube, img 링크 입력 시 해당 내용 가져오기
- dialog에서 add 버튼 클릭 시 page에 순차적으로 내용 추가
- x 버튼 클릭 시 해당 page-item 삭제
- page-item drag and drop 시 위치 이동
  <br/><br/>
- 사용자가 버튼을 클릭하면 dialog 생성
  <br/>사용자가 입력한 데이터를 이용해 그에 맞는 component(image, note, video, todo)를 생성
  <br/>그 component를 pageComponent에 추가

---

### _AppComponent_

header, document, footer

### _PageItemComponent_

- app 안에서 동적으로 데이터를 보관하는 document 부분
- 동적으로 추가된 데이터를 component로 묶음

### _PageComponent_

#### _ImageComponent_

#### _NoteComponent_

#### _VideoComponent_

#### _TodoComponent_

### [Drag and Drop](https://developer.mozilla.org/ko/docs/Web/API/HTML_Drag_and_Drop_API)

#### [드림코딩](https://academy.dream-coding.com/) - 타입스크립트 + 객체지향 프로그래밍 마스터
