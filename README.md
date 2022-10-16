## 🏠 오늘의집 클론코딩 프로젝트

오늘의집 스토어 페이지 클론 프로젝트 입니다.

🔗 [블로그 기술 정리](https://ohyoonah.github.io/project/)

🔗 [사이트 시연 영상 (종합본)](https://youtu.be/wt0X9cHh7Ms)

🔗 [사이트 시연 영상 (데스크톱 사이즈)](https://youtu.be/Y0lQqVnev_M)

🔗 [사이트 시연 영상 (테블릿 사이즈)](https://youtube.com/shorts/mkbphx4lSzM?feature=share)

<br>

![시연](/test-1.gif)
![시연](/test-2.gif)

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

## 📂 디렉토리 구조

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
│  │  │  │  └─ ImageSlider.js
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

<br>

## 💡 컴포넌트 구조

- **`setupProxy`**: `cors` 문제 해결을 위해 `proxy` 서버 설정

✅ **`header`**

- **`Banner.js`**: 사이트 최상단 배너
- **`MainHeader.js`**: 로고 및 각 페이지로 이동할 수 있는 링크가 포함
- **`SubHeader.js`**: 메인 헤더의 아래 보여지는 내비게이션 메뉴
- **`SubHeaderCategory.js`**: 서브메뉴의 카테고리 메뉴 `hover` 시 보여질 컴포넌트
- **`SideMenu.js`**: `768px` 이하의 뷰포트에서 보여질 햄버거 메뉴
- **`SideMenuItem.js`**: 사이드 메뉴에 들어갈 홈, 스토어, 이사/시공/수리 아이템 목록 컴포넌트

✅ **`login`**

- **`LoginForm.js`**: 로그인 폼 구현

✅ **`slide`**

- **`ImageSlider.js`**: 헤더 아래 보여질 이미지 슬라이더 구현

✅ **`content`**

- **`ContentsButtons.js`**: 이미지 슬라이더 아래 위치한 버튼 컴포넌트

✅ **`today_deal`**

- **`TodayDealList.js`**: 오늘의딜 각 아이템을 보여 줄 부모 컴포넌트
- **`TodayDealItem.js`**: 오늘의딜 아이템 구현

✅ **`categories`**

- **`CategoryButtons.js`**: 카테고리 버튼의 스타일 및 기능 구현
- **`sliderSettings.js`**: 카테고리 버튼 슬라이더 적용 속성 분리

✅ **`product`**

- **`ProductList.js`**: 무한 스크롤 기능을 적용한 인기상품 아이템 부모 컴포넌트
- **`ProductItem.js`**: 인기상품 아이템 구현

✅ **`containers`**

- 컴포넌트 세부 폴더마다 파일들을 하나로 묶어 줌

✅ **`page`**

- **`Main.js`**: `containers` 폴더 안의 컴포넌트들을 최종으로 묶어 줌
