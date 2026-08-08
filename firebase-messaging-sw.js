importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBbsDmS4Hkqf_PC7XwAWi4uKtK-WMeYD2U",
    authDomain: "website-611eb.firebaseapp.com",
    projectId: "website-611eb",
    storageBucket: "website-611eb.firebasestorage.app",
    messagingSenderId: "90650745026",
    appId: "1:90650745026:web:7c9dc54997c4970c8e035b"
});

const messaging = firebase.messaging();

// Menangani notifikasi saat aplikasi ditutup / di background
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Pesan diterima di background: ', payload);

    const notificationTitle = payload.notification.title || "Pesan Baru Marketplace";
    const notificationOptions = {
        body: payload.notification.body || "Ada pesan masuk dari pembeli!",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
        badge: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
        vibrate: [200, 100, 200]
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
