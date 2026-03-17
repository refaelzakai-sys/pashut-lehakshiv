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
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://i.ibb.co/v6mYJp6/logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});

