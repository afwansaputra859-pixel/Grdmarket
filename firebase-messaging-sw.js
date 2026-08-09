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

// Menangani notifikasi di latar belakang (saat aplikasi/browser ditutup)
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification?.title || "💬 Pesan Baru Marketplace";
    const notificationOptions = {
        body: payload.notification?.body || "Ada pesan masuk dari pembeli! Klik untuk membalas.",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
        badge: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
        vibrate: [200, 100, 200],
        data: {
            url: "/admin.html" // Alamat tujuan saat notifikasi diklik
        }
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// EVENT SAAT NOTIFIKASI DIKLIK OLEH PENJUAL
self.addEventListener('notificationclick', function(event) {
    event.notification.close(); // Tutup spanduk notifikasi

    // Buka atau fokuskan ke halaman admin.html
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                if (client.url.includes('admin.html') && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow('/admin.html');
            }
        })
    );
});
