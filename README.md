# 🍥UMC WORKBOOK 실습 및 미션 모음

# 5week
**실습 CHECK LIST**

- [x]  다양한 페이지 컴포넌트 만들고 리액트 라우팅 설정하기
    - 생성할 페이지 컴포넌트 종류
        
        `Celebirity.jsx`, `Home.jsx`, `Movies.jsx`, `TV.jsx`, `NotFound.jsx`
        
- [x]  헤더 컴포넌트 생성, 구성하고 라우팅하기
- [x]  이전에 작업했던 `Movie.jsx`와 `movieDummy.js` 사용하기
- [x]  `Ad` 컴포넌트가 값을 받아서 광고를 표시할지 여부를 결정하도록 코드를 구성하기
- [x]  `AdPage` 컴포넌트가 `Ad` 컴포넌트를 렌더링하고, 상태를 관리하여 광고 표시 여부를 결정할 수 있도록 코드 구성하기!
- [x]  `Home` 컴포넌트에 `AdPage` 컴포넌트 렌더링하기


![image](https://github.com/ji1won/UMC_workbook/assets/141638383/943f5a7f-1ff2-479c-b7b8-d5eb21e4b5c8)

**미션 CHECK LIST**

- [x]  `LoginControl.jsx` 생성하기
- [x]  `this.state` 활용해서 `isLoggedIn` 의 값으로 상태 관리할 수 있도록 만들기
- [x]  `handleLoginClick`, `handleLogoutClick` 이용해서 상태 설정하기
- [x]  렌더링 메서드 활용하기
- [x]  상태에 따른 환영 문구(로그인 상태, 로그아웃 상태), 로그인 버튼, 로그아웃 버튼 함수 구성하기
- [x]  `inline if문` 활용해서 상태에 따른 로그인 ↔ 로그아웃, 환영 문구 변경 구현하기
- [x]  CSS 구성하기
- [x]  `Header` 컴포넌트에 `LoginControl` 렌더링하기

![image](https://github.com/ji1won/UMC_workbook/assets/141638383/0b8fbf21-512b-4e37-9996-1dc62f8e17fb)

# 6week
**실습 CHECK LIST**

- [x]  상세 페이지 컴포넌트 생성하고 라우팅하기
    - [x]  주소가 위 영상처럼 영화의 제목이 보여지도록 구성하기
- [x]  네비게이트 훅 활용하여 영화 페이지에서  정보를 상세 페이지에 전달하기
- [x]  이벤트와 useNavigate Hook 활용해서 클릭하면 정보가 넘어가도록 만들기
- [x]  useParams, useLocation을 활용하여 상세페이지에서 전달 받은 정보 활용하기
      
![image](https://github.com/ji1won/UMC_workbook/assets/141638383/391ac077-abb7-4a0e-a53d-498ca2f8ebeb)


**미션 CHECK LIST**

- [x]  useState활용해서 로그인 ↔ 로그아웃 버튼 왔다 갔다 하게 하기
- [x]  `NotFound` 페이지 컴포넌트 활용하기
- [x]  실습 때 활용한 Navigate Hook 활용해보기
- [x]  이벤트 활용해서 클릭 시 메인 페이지로 돌아갈 수 있게 만들기
      
![image](https://github.com/ji1won/UMC_workbook/assets/141638383/23166efb-ebf3-4623-83c6-e88467f3fae5)

# 7week
**실습 CHECK LIST**

- [x]  로그인 버튼 컴포넌트 만들기
- [x]  로그인 페이지 만들기
- [x]  버튼 클릭시, 로그인 페이지로 이동하도록 연결하기
- [x]  로그인 화면 완성하기

![image](https://github.com/ji1won/UMC_workbook/assets/141638383/64752c67-2b31-4653-888c-c444f25746ca)

**미션 CHECK LIST**

tvDummy.js 파일을 추가해서 Tv 프로그램을 클릭했을 때 Tv 리스트가 나오도록 만들어봅시다.
가능한 새로운 컴포넌트를 만들지 않고, 기존에 만들었던 것을 활용해주세요!

![image](https://github.com/ji1won/UMC_workbook/assets/141638383/bc012456-4811-4016-9f66-9518bb32df67)

# 8week
**실습 CHECK LIST**

- [x]  Open Weather Map API 가입 후 API_KEY 발급 받기
- [x]  도시명과 API_KEY를 통해 날씨 정보를 받아올 수 있도록 하는 url 선언하기
- [x]  axios라이브러리 다운 받기
- [x]  location(city name) 입력 받을 입력창 만들기
- [x]  해당 입력창을 통해 Data를 받아올 수 있도록 코드 구성하기
- [x]  input에 입력된 값이 Data에 있는 것과 동일할 경우 받아오고 싶은 data(도시명, 온도, 날씨)를 보여주도록 코드 작성하기
- [x]  화씨 온도로 받아온 data 섭씨 온도로 변환해주기
- [ ]  
![image](https://github.com/ji1won/UMC_workbook/assets/141638383/a6964940-e8fc-442c-9de4-3e4a0b1e0f33)

**미션 CHECK LIST**

https://github.com/silvarge/UMC_WEB

위의 서버를 활용하여 다음의 실습 목표를 완수할 수 있는 로그인 페이지를 구성해주세요!

- **실습 목표**
    - Redux를 활용할 것
    - 아이디와 비밀번호를 *state*, *input*으로 관리할 것
    - 로그인 버튼 클릭 시 빈 값이 하나라도 있다면, `alert()`로 *submit event*를 종료시킬 것
    - *axios*를 통신하는 동안 버튼이 클릭되지 않도록 할 것
    - *axios* 통신이 끝난 후 1.5초까지 'Loading...'을 출력할 것
- **유저 정보**
    
    ```
    id: 'umcweb',
    pw: '1234'
    ```
    
- **API 명세서**
    - 반드시 body(obj)를 같이 보내줄 것.
        - body.id : user.id
        - body.pw : user.pw
    - 로그인 실패시
        - code : 400 = body 값이 비어 있을 때
        - code : 401 = 존재하지않는 id일 때
        - code : 402 = 비밀번호가 틀렸을 때
    - 로그인 성공 시
        - code : 200
        - useInfo = object, user의 데이터가 넘어올 것
