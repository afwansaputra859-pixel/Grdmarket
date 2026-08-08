<!DOCTYPE html>
<html lang="id">
<head>
    <script>
        if (sessionStorage.getItem("isLoggedIn") !== "true") {
            window.location.href = "login.html";
        }
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Marketplace</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f4f4f4; }
        header { background: #007bff; color: white; padding: 15px; text-align: center; border-radius: 8px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin-top: 20px; }
        .card { background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center; }
        .card img { width: 100%; height: 120px; object-fit: cover; border-radius: 5px; }
        .price { color: #28a745; font-weight: bold; margin: 10px 0 5px 0; }
        .stock { font-size: 13px; color: #666; margin-bottom: 10px; }
        .btn-buy { background: #007bff; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: bold; width: 100%; }

        .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); justify-content: center; align-items: center; }
        .modal-content { background: white; padding: 20px; border-radius: 8px; width: 320px; text-align: center; position: relative; }
        .close-btn { position: absolute; top: 10px; right: 15px; font-size: 20px; cursor: pointer; font-weight: bold; }
        .qris-img { width: 180px; margin: 15px 0; border: 1px solid #ddd; padding: 5px; border-radius: 5px; }
        .btn-confirm { background: #28a745; color: white; border: none; padding: 10px; border-radius: 5px; font-weight: bold; width: 100%; cursor: pointer; margin-top: 10px; }
    </style>
</head>
<body>

    <header>
        <h1>Digital Marketplace</h1>
        <p>By: Gilang ganteng</p>
    </header>

    <div class="grid">
        <div class="card">
            <img src="Produk-1.jpg" alt="Produk 1">
            <h3>Produk A</h3>
            <p class="price">Rp 50.000</p>
            <p class="stock">Stok Tersedia: <b id="stok-1">10</b></p>
            <button class="btn-buy" onclick="bukaModal('Produk A', 50000, 1)">Beli Sekarang</button>
        </div>

        <div class="card">
            <img src="Produk-2.jpg" alt="Produk 2">
            <h3>Produk B</h3>
            <p class="price">Rp 100.000</p>
            <p class="stock">Stok Tersedia: <b id="stok-2">5</b></p>
            <button class="btn-buy" onclick="bukaModal('Produk B', 100000, 2)">Beli Sekarang</button>
        </div>
    </div>

    <div id="paymentModal" class="modal">
        <div class="modal-content">
            <span class="close-btn" onclick="tutupModal()">&times;</span>
            <h3 id="modalTitle">Pembayaran</h3>
            <p id="modalPrice" style="color:#28a745; font-weight:bold;"></p>
            
            <hr>
            <p style="font-size: 14px; margin-bottom: 5px;">Scan QRIS / Transfer DANA:</p>
            <p style="font-weight: bold; color: #118EEA; margin: 0;">DANA: 083137201752</p>

            <img src="https://via.placeholder.com/180?text=Scan+QRIS" alt="Kode QRIS" class="qris-img">

            <button class="btn-confirm" onclick="prosesBayar()">Saya Sudah Bayar (Chat Penjual)</button>
        </div>
    </div>

    <script>
        var produkDipilih = "";
        var idStokDipilih = 0;

        function bukaModal(namaProduk, harga, idStok) {
            var elemenStok = document.getElementById("stok-" + idStok);
            var jumlahStok = parseInt(elemenStok.innerText);

            if (jumlahStok <= 0) {
                alert("Maaf, stok produk ini sudah habis!");
                return;
            }

            produkDipilih = namaProduk;
            idStokDipilih = idStok;

            document.getElementById("modalTitle").innerText = "Beli " + namaProduk;
            document.getElementById("modalPrice").innerText = "Total: Rp " + harga.toLocaleString('id-ID');
            document.getElementById("paymentModal").style.display = "flex";
        }

        function tutupModal() {
            document.getElementById("paymentModal").style.display = "none";
        }

        function prosesBayar() {
            var elemenStok = document.getElementById("stok-" + idStokDipilih);
            var jumlahStok = parseInt(elemenStok.innerText);

            if (jumlahStok > 0) {
                elemenStok.innerText = jumlahStok - 1;
            }

            var userPembeli = sessionStorage.getItem("currentUser") || "User";
            // Buat ID Room unik berdasarkan waktu & nama pembeli
            var roomId = "order_" + userPembeli + "_" + Date.now();

            alert("Terima kasih! Pesanan diproses. Mengarahkan ke Chat Private Penjual...");
            tutupModal();

            // Pindah ke room chat private
            window.location.href = "chat.html?room=" + encodeURIComponent(roomId) + "&produk=" + encodeURIComponent(produkDipilih);
        }
    </script>

</body>
</html>
