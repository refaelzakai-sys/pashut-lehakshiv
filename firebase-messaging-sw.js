importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDV62F-Z3nV-R1Sfp0ornCeE7HuBU3hNpg",
    authDomain: "just-listen-4ca8a.firebaseapp.com",
    databaseURL: "https://just-listen-4ca8a-default-rtdb.firebaseio.com",
    projectId: "just-listen-4ca8a",
    storageBucket: "just-listen-4ca8a.firebasestorage.app",
    messagingSenderId: "323677576794",
    appId: "1:323677576794:web:31f23715e855209a148263",
    measurementId: "G-ZX07FEWB6Q"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification?.title || "פשוט להקשיב";
    const body = payload.notification?.body || payload.data?.body || "קיבלת הודעה חדשה";
    
    const options = {
        body: body,
        icon: 'https://i.postimg.cc/hPhJxbfr/319420-rounded-600x600.png',
        badge: 'https://i.postimg.cc/hPhJxbfr/319420-rounded-600x600.png',
        data: { url: './index.html' }
    };

    self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
            for (let client of windowClients) {
                if (client.url.includes('index.html') && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow('./index.html');
            }
        })
    );
});
