### :pencil: Process & Thread

- 프로세스는 운영체제에서 메모리와 CPU를 할당한 프로그램을 말한다. 프로그램은 각각의 프로세스를 갖고 있음. 프로세스는 메모리에서 서로 독립적으로 실행되고 있다. 어느 프로세스에 문제가 생기게 된다면 해당 프로세스만 죽고, 나머지에는 영향이 없다.
- 프로세스는 Program Code, 함수 실행순서와 함수 실행 후 돌아갈 위치가 담긴 정보를 담고 있는 Stack, 동적으로 할당된 변수들이 저장되는 Heap, 전역변수나 Static 변수들이 저장되는 Data 크게 네 부분으로 나뉘어져 있다.
- 쓰레드는 한 프로세스 내에서 여러 개로 나뉘어진다. 각각의 쓰레드는 실행해야 할 함수를 기억해야 하기 때문에 스택이 할당되어져 있다.
- 쓰레드는 프로세스의 Code,Heap,Data를 공유해서 사용한다.
- 멀티쓰레드가 가능하기 때문에 다양한 일들을 동시에 수행할 수 있다.

- Java Script는 Single Threaded Language이다.
- Java Script Engine에도 Memory Heap과 Call Stack이 있다. Memory Heap에는 문자열이나 Object같은 Data가 저장된다. Memory Heap은 구조적으로 정리된 자료구조가 아니라 아무곳에나 할당된다.
- Call Stack은 실행해야 할 함수들을 순서에 따라 쌓아 놓은 것.

- Web APIs 브라우저에서 제공하는 API이기 때문에 브라우저의 멀티쓰레딩을 통해서 다양한 일을 동시에 수행할 수 있음.
- 웹 API 중 하나인 setTimeout 또는 setInterval, addClickListener 이런 API를 쓸 때, 지정한 콜백 함수를 등록해 놓으면 웹 APIs는 태스크 큐에 콜백 함수를 enqueue하게 된다. 동시에 이벤트 루프는 계속 콜 스택을 확인하다가 비워진 순간에 태스크 큐가 dequeue 하도록 한다.

- Promise를 다 수행하고 나면 실행되는 then에 등록한 콜백 함수, mutation observer라는 웹 API에 등록된 콜백 함수가 Microtack Queue에 저장된다.

- 주기적으로 브라우저에서 요소들을 움직이거나 애니메이션 할 때 주기적으로 브라우저에 업데이트 해주는 것.

- Render는 브라우저에서 우리가 변형한 코드가 주기적으로 업데이트 되기 위해서 주기적으로 호출되는 순서인데 그전에 리퀘스트 애니메이션 프레임이라는 API를 부르면 등록한 콜백함수가 리퀘스트 애니메이션 프레임에 쌓인다. Render는 각각의 브라우저에서 정해진 일정 시간을 주기로 실행하게 된다.(매번 업데이트 할 필요는 없기 때문에)

- Event Loop는 Render, Microtask Queue, Task Queue, Call Stack을 모두 순회하는데 1ms도 걸리지 않을 만큼 빠르게 순회한다.

- 브라우저는 1초 동안 60개의 프레임을 보여주도록 노력한다. 16.7ms 동안 업데이트가 이루어져야 한다. 각각 브라우저마다 Render Tree를 업데이트 하는 주기가 정해져 있다.

- Event Loop는 처음 Render를 업데이트 하고, Microtask Queue에 실행할 콜백 함수가 있는지 확인한다. 콜백 함수가 존재한다면 모든 함수들을 콜 스택으로 옮겨 실행할 때까지 잠시 대기한다.(진행 도중 Microtask Queue에 또 다른 콜백 함수들이 쌓이게 되면 그것까지 처리한다.) 다음 Task Queue로 넘어가서 콜 스택이 비워져 있으면 하나의 콜백 함수만 콜스택으로 옮기고 Event Loop는 처음부터 순회를 시작한다.(Render Tree는 일정 주기마다 업데이트 해주기 때문에 매번 Render가 실행되진 않는다.)

- requetAnimationFrame(()=>{})은 브라우저가 업데이트 되기 전에 실행해야 할 것들이 있을 때 사용한다.

- setTimeout(()=>{
  },0) 는 무언가를 변경 하고 나서 다음 이벤트 루프에서 바로 실행해야 할 것들이 있을 때 사용한다.
