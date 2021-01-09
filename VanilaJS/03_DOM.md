### :pencil: DOM

> HTML 파일 내의 Tag는 웹 브라우저에서 JavaScript Node로 해석된다. Node의 오브젝트는 EventTarget 오브젝트를 상속한다. 즉, 모든 Node는 이벤트가 발생할 수 있다. Document, Element, Text 모두 Node로 해석되고 Node는 EventTarget이기 때문에 모든 요소에서 이벤트가 발생한다.

- 브라우저가 HTML 파일을 해석하면서 **DOM Tree**로 변환한다.
- **HTML(HTMLHtmlElement)**의 가장 상위 요소가 있고, 그 아래로 **head(HTMLHeadElement)**, **body(HTMLBodyElement)**요소가 있다. 이렇게 **모든 HTML Tag는 그에 상응하는 DOM 트리 요소가 존재한다.**
- TextContent를 포함하는 h1,span과 같은 Tag들은 **TextContent와 상응하는 TextNode가 존재한다.**
- addEventListener(), removeEventListener()와 같은 Methods는 EventTarget이 지원하는 Methods이다.
