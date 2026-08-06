
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marketplace Sederhana</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f4f4f4; }
        header { background: #007bff; color: white; padding: 15px; text-align: center; border-radius: 8px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 20px; }
        .card { background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center; }
        .card img { width: 100%; border-radius: 5px; }
        .price { color: #28a745; font-weight: bold; margin: 10px 0; }
        .btn-wa { background: #25D366; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; text-decoration: none; display: inline-block; }
    </style>
</head>
<body>

    <header>
        <h1>Warung Online</h1>
        <p>Marketplace Sederhana via Termux</p>
    </header>

    <div class="grid">
        <div class="card">
            <img src="https://via.placeholder.com/150" alt="Produk 1">
            <h3>Produk A</h3>
            <p class="price">Rp 50.000</p>
            <a href="https://wa.me/6283137201752?text=Halo,%20saya%20mau%20beli%20Produk%20A" class="btn-wa">Beli via WA</a>
        </div>
        <div class="card">
            <img src="https://via.placeholder.com/150" alt="Produk 2">
            <h3>Produk B</h3>
            <p class="price">Rp 100.000</p>
            <a href="https://wa.me/6283137201752?text=Halo,%20saya%20mau%20beli%20Produk%20B" class="btn-wa">Beli via WA</a>
        </div>
    </div>

</body>
</html>
