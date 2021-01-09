### :pencil: Window size

- Window Screen : 모니터 크기
- Window OuterSize : 텍스트와 주소창 등 전체 웹 브라우저의 크기
- Window innerSize : 주소창과 Bookmark 아래에 있는 html 크기(스크롤 포함)
- Document Size : html 크기(스크롤 포함하지 않음)

```html
// 실습 코드
<body>
  <div class="tag">Window Size</div>
  <script>
    const tag = document.querySelector(".tag");

    function updateTag() {
      tag.innerHTML = `window.screen: ${window.screen.width}, ${window.screen.height} <br/>
      window.screen: ${window.innerWidth}, ${window.innerHeight} <br/>
      window.screen: ${window.outerWidth}, ${window.outerHeight} <br/>
      documentElement.client: ${document.documentElement.clientWidth},${document.documentElement.clientHeight} <br/>
      `;
    }
    window.addEventListener("resize", () => {
      updateTag();
    });
    updateTag();
  </script>
</body>
```

<br />
### :pencil: Window coordinates

- getBoundingClientRect() : 특정 아이템의 크기, 위치를 반환해주는 메서드
- click event : click event가 발생했을 때 현재 화면에서 보여지는 좌표와 html 문서 상에서의 좌표가 다르다. event.pageX, event.pageY는 html 문서 상에서의 좌표를 말하고, event.clientX, event.clientY는 현재 화면을 기준으로 한 좌표이다.
- ScrollTo : 원하는 위치로 ScrollBar를 이동시켜주는 API. x좌표와 y좌표를 매갭변수로 주고 단순히 이동시킬 수도 있고, options를 주어 이동시킬 좌표와 scroll의 behavior를 조작할 수도 있다.
- ScrollBy : 현재 좌표로부터 특정 값만큼 Scroll을 이동시킨다.
- ScrollInitoView : 특정 아이템의 위치로 Scroll을 이동시킨다.

```html
// 실습 코드
<body>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="special"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <aside>
    <button id="by">Scroll by 100px(y)</button>
    <button id="to">Scroll to 100px(y)</button>
    <button id="toSpecial">Scroll into special</button>
  </aside>
  <script>
    const special = document.querySelector(".special");
    const bBy = document.querySelector("#by");
    const bTo = document.querySelector("#to");
    const bToSpecial = document.querySelector("#toSpecial");
    special.addEventListener("click", (event) => {
      const rect = special.getBoundingClientRect();
      console.log(rect);
      console.log(`page : ${event.pageX},${event.pageY}`);
      console.log(`client ${event.clientX}, ${event.clientY}`);
    });
    bBy.addEventListener("click", (event) => {
      window.scrollBy({ top: 100, left: 0, behavior: "smooth" });
    });
    bTo.addEventListener("click", (event) => {
      window.scrollTo(0, 100);
    });
    bToSpecial.addEventListener("click", (event) => {
      special.scrollIntoView();
    });
  </script>
</body>
```

<br/>
### :pencil: Window load

- DOMContentLoaded : html 내의 태그들, 즉 DOMContent가 모두 Load되었을 때를 의미한다.
- load : css,images를 포함한 모든 resource들이 Load되었을 때를 의미한다.
- beforeunload : 현재 페이지가 닫히거나, 다른페이지로 이동하기 전을 의미한다.
- unload : 현재 페이지가 닫히거나, 다른 페이지로 이동했을 때를 의미한다.

```html
// 실습코드
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="test.js" defer></script>
  </head>
  <body>
    <script>
      // only Document
      window.addEventListener("DOMContentLoaded", () => {
        console.log("DOMContentLoaded");
      });
      // after resources (css,images)
      window.addEventListener("load", () => {
        console.log("load");
      });
      // before unload
      window.addEventListener("beforeunload", () => {
        console.log("beforeunload");
      });
      // resource is being unloaded
      window.addEventListener("unload", () => {
        console.log("unload");
      });
    </script>
  </body>
</html>
```

```js
// test.js
console.log("js loaded");
```
