## 🏠 오늘의집 클론코딩 프로젝트

오늘의집 스토어 페이지 클론 프로젝트 입니다.

🔗 [블로그 기술 정리](https://ohyoonah.github.io/project/)

<br>

<!-- ![시연](/test_1.gif) -->

<br>

## 📅 개발 기간

**2022.09.23 ~ 2022.10.12**

<br>

## ⚙ 실행 방법

```
npm install --global yarn
cd front
yarn
yarn start
```

<br>

## 🏆 주요 기능

- `axios`로 외부 `api`와의 연동
- `proxy` 서버로 `cors` 관리
- `react-query`, `intersection Observer`를 이용한 무한스크롤 기능
- `styled-components`로 반응형 사이트 제작

<br>

## 🛠 기술 스택

- React, Javascript, Styled-Components

<br>

## 💡 컴포넌트 구조

```
├─ src
│  │  ├─ App.js
│  │  ├─ components
│  │  │  ├─ categories
│  │  │  │  ├─ CategoryButtons.js
│  │  │  │  └─ sliderSettings.js
│  │  │  ├─ content
│  │  │  │  └─ ContentsButtons.js
│  │  │  ├─ header
│  │  │  │  ├─ Banner.js
│  │  │  │  ├─ MainHeader.js
│  │  │  │  ├─ SideMenu.js
│  │  │  │  ├─ SideMenuItem.js
│  │  │  │  ├─ SubHeader.js
│  │  │  │  └─ SubHeaderCategory.js
│  │  │  ├─ login
│  │  │  │  └─ LoginForm.js
│  │  │  ├─ product
│  │  │  │  ├─ ProductItem.js
│  │  │  │  └─ ProductList.js
│  │  │  ├─ slide
│  │  │  │  ├─ imagesData.js
│  │  │  │  ├─ ImageSlider.js
│  │  │  │  └─ SliderButton.js
│  │  │  └─ todayDeal
│  │  │     ├─ TodayDealItem.js
│  │  │     └─ TodayDealList.js
│  │  ├─ containers
│  │  │  ├─ Category.js
│  │  │  ├─ Content.js
│  │  │  ├─ Header.js
│  │  │  ├─ Login.js
│  │  │  ├─ Product.js
│  │  │  ├─ Slider.js
│  │  │  └─ TodayDeal.js
│  │  ├─ Firebase.js
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ page
│  │  │  └─ Main.js
│  │  ├─ setupProxy.js
```
