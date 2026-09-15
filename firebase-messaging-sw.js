importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDV62F-Z3nV-R1Sfp0ornCeE7HuBU3hNpg",
    projectId: "just-listen-4ca8a",
    messagingSenderId: "323677576794",
    appId: "1:323677576794:web:31f23715e855209a148263"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification?.title || "פשוט להקשיב";
    const options = {
        body: payload.notification?.body || "קיבלת הודעה חדשה",
        icon: 'https://i.postimg.cc/hPhJxbfr/319420-rounded-600x600.png',
        badge: 'https://i.postimg.cc/hPhJxbfr/319420-rounded-600x600.png'
    };
    self.registration.showNotification(title, options);
});
