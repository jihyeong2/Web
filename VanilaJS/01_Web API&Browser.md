# Web API

### :pencil: APIs

- DOM APIs :웹페이지의 요소들을 생성/삭제하거나 스타일을 바꾸는 API
- Network APIs : Server와 통신할 수 있는 API
- Graphics APIs : Canvas나 WebGL 그래픽 관련 API
- Audio/Video APIs : 오디오나 비디오를 재생하거나 중지하는 등 다양한 멀티미디어 관련 API
- Deviece APIs : 사용자가 온라인인지 오프라인인지 디바이스의 상태정보를 받을 수 있는 API
- File APIs : 사용자의 파일을 읽거나 저장하는 API
- Storage APIs : 사용자의 정보를 저장하는 API

### :pencil: Web APIs Security

- HTTP(Hyper Text Transfer Protocol)

  - HTTP는 웹 클라이언트와 서버가 어떻게 통신하는지 통신규약을 정해놓은 것이다. 클라이언트가 서버에게 정보를 요청하고 서버에서 정보를 받아오는 request와 response방식으로 이루어져있다. HTTP에서 패스워드를 입력해서 서버에 보내게 되면 아무런 보안 처리가 되지 않아서 해커가 네트워크가 어떻게 전송됐는지 들여다 볼 수 있다.

- HTTPS(Hyper Text Transfer Protocol Secure)

  - 브라우저는 사용자의 정보를 보호할 의무가 있기 때문에 정보 보안에 굉장히 민감하다. 가령 다른 브라우저 탭에서, 혹은 다른 사용자가 정보를 빼내간다면 위험한 상황이 발생할 수 있다. HTTPS는 secure하게 encrypt가 되어서 패스워드를 사용자가 알아볼 수 없는 암호키로 처리가 되어 전송되기 때문에 해커가 알아볼 수 없다.

- 사용자의 정보를 다루는 API들은 HTTPS 환경에서만 사용할 수 있도록 만들어져 있다.

### :pencil: Browser

- 웹 브라우저에는 window라는 전체적인 Object가 존재한다. 브라우저에서 열려있는 전체적인 창을 의미한다. 그리고 그 안에 HTML에서 작성한 요소들이 표기되어지는 Documet, 브라우저 자체에 관련된 정보들이 담겨있는 Navigator 등이 있다.
- Window안에 DOM(document), BOM(Browser Object Model / Navigator, Location, Fetch, Storage), JavaScript있다.
