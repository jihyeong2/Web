### :pencil: CSSOM

> 브라우저에서 Document Object Model을 만들면 정의된 CSS를 병합해서 CSSOM을 만들게 된다. inline으로나 CSS 파일로나 직접 CSS를 작성하지 않아도 브라우저상에서 기본적으로 갖고 있는 스타일이 있기 때문에 CSS와 DOM을 병합한 CSS Object Model을 따로 만들게 된다.

- Render Tree

  - 브라우저가 HTML 파일을 읽게 되면 제일 처음 Document Object Model 트리를 만든다.
  - 그 다음 CSS 파일을 읽고 **Cascading rule**을 적용한 후, CSS 스타일 트리를 만든다.
  - DOM과 CSSOM을 합해서 최종적으로 브라우저에 표기될 것들만 Render Tree에 선별되어 표기된다.
  - Render Tree에는 실제 사용자들의 눈에 보여지는 것들만 담긴다. 즉, body요소가 아닌 head요소나 display가 none인 tag element들은 Render Tree에 실리지 않는다. (단, visibility가 hidden이면 투명도가 낮은 것일뿐 보이는 것으로 판단되어 Render Tree에 포함된다.)
    <br/>

### :pencil: Critical rendering path

- 브라우저에서 URL을 입력하게 되면 다음과 같은 순서로 진행된다.
  1. 브라우저가 서버에 HTML파일을 요청한다. (Request, Response)
  2. HTML을 파일을 받아서 Loading한다. (Loading)
  3. DOM요소와 CSS요소를 CSSDOM으로 변환한다.(Scripting)
  4. 브라우저 window에 표기를 하기 위해 Rendering Tree를 만든다. (Rendering)
  5. 각각의 요소들이 어떤 위치에 얼마나 크게 표기될지 계산한다. (Layout)
  6. 브라우저에 표기한다. (Painting)
- Construction (DOM, CSSOM, RenderTree) / Operation(Layout, Paint, Composition)
