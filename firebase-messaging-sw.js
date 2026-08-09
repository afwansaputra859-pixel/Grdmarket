importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Konfigurasi Firebase Anda yang sudah aktif
firebase.initializeApp({
    apiKey: "AIzaSyBbsDmS4Hkqf_PC7XwAWi4uKtK-WMeYD2U",
    authDomain: "website-611eb.firebaseapp.com",
    projectId: "website-611eb",
    storageBucket: "website-611eb.firebasestorage.app",
    messagingSenderId: "90650745026",
    appId: "1:90650745026:web:7c9dc54997c4970c8e035b"
});

const messaging = firebase.messaging();

// Menangani notifikasi di latar belakang (saat browser ditutup)
messaging.onBackgroundMessage((payload) => {
    // Memperbaiki teks yang terpotong di kode lama Anda
    const notificationTitle = payload.notification?.title || "💬 Pesan Baru Marketplace";
    const notificationOptions = {
        body: payload.notification?.body || "Ada pesan masuk dari pembeli! Klik untuk membaca.",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
        badge: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
        vibrate:,
        data: {
            url: "/admin.html" // Alamat tujuan saat notifikasi diklik
        }
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// EVENT SAAT NOTIFIKASI DIKLIK OLEH ADMIN
self.addEventListener('notificationclick', function(event) {
    event.notification.close(); // Tutup spanduk notifikasi

    const targetUrl = event.notification.data?.url || '/admin.html';

    // MEMPERBAIKI ERROR: Di kode lama Anda, variabel 'clientList' belum didefinisikan 
    // sehingga fungsi klik notifikasi akan error/tidak merespon.
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
            // Cari apakah tab admin.html sudah terbuka di Chrome Anda
            for (let i = 0; i < clientList.length; i++) {
                let client = clientList[i];
                if (client.url.includes('admin.html') && 'focus' in client) {
                    return client.focus(); // Jika sudah terbuka, langsung tampilkan tabnya
                }
            }
            // Jika belum terbuka, buka tab baru menuju admin.html
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});

