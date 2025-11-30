// firebase-messaging-sw.js
// 暫時先放一個最簡單的 service worker，確保可以註冊成功

self.addEventListener("install", (event) => {
  console.log("[sw] firebase-messaging-sw.js installed");
});

self.addEventListener("activate", (event) => {
  console.log("[sw] firebase-messaging-sw.js activated");
});
