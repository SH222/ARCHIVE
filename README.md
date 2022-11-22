# ARCHIVE

### html, css, typescript, javascript

### 프레임워크 / 라이브러리 없이 구현

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

- header, document, footer
- 가장 메인이 되는 컴포넌트
- 최종적으로 PageItemComponent에서 값을 가져와 화면에 넣어줌

### _PageItemComponent_

- app 안에서 동적으로 데이터를 보관하는 document 부분
- 동적으로 추가된 데이터를 component로 묶음
- 각 기능별, 페이지별로 나눠놓은 컴포넌트들을 묶음

### _ImageComponent, NoteComponent, VideoComponent, TodoComponent_

- dialog를 이용해 입력한 값을 출력하는 html과 변수가 들어있는 컴포넌트
- 출력할 이미지 경로와 타이틀, 텍스트 등을 각각 저장하는 변수 생성
- 각 Component는 BaseComponent로부터 <HTMLElement>를 상속받아서
  생성자의 파라미터로 각 input값에 해당하는 태그 속성 class의 이름을 받음.
  super()의 html 코드를 이용해 적용함
- 각 변수에 해당하는 값은 querySelector(.클래스명)를 이용해 넣음
- video url을 가져오는 과정에서 url 형식을 맞추기 위해 정규표현식 Regex 사용

### Dialog

- 이미지와 동영상의 Media, 노트와 todo의 Text 두 가지로 나누어 각각의 컴포넌트 파일 생성
- 용도에 따라 만든 컴포넌트를 interface로 분류(interface MediaData, interface TextData )하여 만들어놓은 dialog\_\_body에 넣음

### [Drag and Drop](https://developer.mozilla.org/ko/docs/Web/API/HTML_Drag_and_Drop_API)

#### [드림코딩](https://academy.dream-coding.com/) - 타입스크립트 + 객체지향 프로그래밍 마스터
