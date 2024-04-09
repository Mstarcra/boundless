# 資展國際前端工程師養成班MFEE44 期末小組專題：Boundless 線上音樂學習平台

**免責聲明：本專案僅作資展國際期末專題發表，不得用於商業用途，若您的權利遭受侵害，敬請告知。**

於資展國際學習時所製作之團隊專題，前端主要使用React.js撰寫(Next.js框架)，後端使用Node.js(express.js框架)。

## 測試說明
此專題運用XAMPP軟體及MySQL來架設伺服器，資料庫檔案詳見sql檔，連結資料庫的詳細資料請看環境檔server/.env。

前後端都使用了npm管理套件，執行前記得
```
npm i
```
並使用
```
npm run dev
```
來執行客戶端以及伺服器端。

## 功能介紹

本人主要負責功能：登入/註冊/OTP驗證碼、會員中心相關功能串接。

登入透過核發token來進行後續會員狀態認證，google登入認證部分採用firebase套件。

## 細項
前端（React.js）

切版(含RWD)：登入／註冊、忘記密碼、會員中心（資訊、文章及訂單）、個人首頁。

功能：登入（含GoogleAPI）、註冊、登出、檢視編輯會員資料、忘記密碼、訂單資料讀取、會員發布文章讀取。

後端（Node.js）RESTful API

GET：會員資料(個人資料、發佈文章、所屬樂團、訂單)。

POST：建立訂單(協作)、登入/註冊、Google 登入、OTP 忘記密碼。

PUT：更新會員資訊、頭像。

## 主要負責部分-快速連結
- 前端
  - [登入/註冊](./client/pages/login.js)
  - [會員中心/個人首頁(不含優惠券跟樂團部分)](./client/pages/user)
  - [全域hook(登入狀態)](./client/hooks/user)
- 後端
  - [會員相關](./server/routes/user.js)
  - [google登入](./server/routes/google-login.js)
  - [忘記密碼-發送OTP驗證碼](./server/routes/reset-password.js)

  




