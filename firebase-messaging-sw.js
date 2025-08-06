importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA2mlOXZDsQXl-dNSVleDtqoz-xNjPVdNA",
  authDomain: "medicine-remainder-c8422.firebaseapp.com",
  projectId: "medicine-remainder-c8422",
  storageBucket: "medicine-remainder-c8422.firebasestorage.app",
  messagingSenderId: "984530990090",
  appId: "1:984530990090:web:a06146223563b8daeadbf3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize your notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/medicine.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
