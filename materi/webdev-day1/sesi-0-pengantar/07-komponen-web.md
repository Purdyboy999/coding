# 07 · Komponen Web

**PareLabs Web Dev · Batch 1 · Sesi 0 — Pengantar**

---

## Ekosistem Web Modern

Setiap website modern dibuat dari beberapa komponen yang bekerja bersama. Berikut adalah pemain-pemain utamanya.

---

## HTML — Struktur

**HyperText Markup Language** — kerangka/tulang website.

```html
<h1>Judul Halaman</h1>
<p>Ini adalah paragraf teks.</p>
<img src="foto.jpg" alt="Foto">
<button>Klik Saya</button>
```

**Analogi:** HTML adalah **bata dan beton** bangunan rumah.  
Mendefinisikan: ini judul, ini paragraf, ini gambar, ini tombol.

---

## CSS — Tampilan

**Cascading Style Sheets** — warna, font, ukuran, layout, animasi.

```css
h1 {
  color: purple;
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
}

button {
  background: #7c6af7;
  color: white;
  border-radius: 8px;
  padding: 12px 24px;
}
```

**Analogi:** CSS adalah **cat, wallpaper, dan furnitur** rumah.  
Membuat website terlihat indah dan menarik.

---

## Tailwind CSS — Framework CSS

**Utility-first CSS framework** — kumpulan class siap pakai.

```html
<!-- Tanpa Tailwind -->
<button style="background:#7c6af7; color:white; padding:12px 24px; border-radius:8px;">
  Daftar
</button>

<!-- Dengan Tailwind -->
<button class="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600">
  Daftar
</button>
```

**Analogi:** Tailwind adalah **IKEA** — furnitur siap pasang tanpa harus bikin dari nol.

---

## JavaScript — Interaksi & Logika

Bahasa pemrograman satu-satunya yang berjalan langsung di browser.

```javascript
// Ganti teks saat tombol diklik
document.getElementById('tombol').addEventListener('click', function() {
  document.getElementById('pesan').textContent = 'Halo dari JavaScript!';
});

// Validasi form
function cekEmail(email) {
  if (email.includes('@')) {
    return true;
  } else {
    alert('Email tidak valid!');
    return false;
  }
}
```

**Analogi:** JavaScript adalah **listrik, sistem alarm, dan pintu otomatis** rumah — semua yang bergerak dan bereaksi.

---

## Request & Response

Cara browser berkomunikasi dengan server.

```
Browser (Client)                    Server
      |                                |
      |  -- HTTP Request GET / -->     |
      |     "Tolong kirim parelabs.id" |
      |                                |
      |  <-- HTTP Response 200 OK --   |
      |     (file HTML, CSS, JS)       |
      |                                |
      | Render halaman di layar        |
```

### Kode HTTP yang Perlu Diketahui

| Kode | Arti |
|------|------|
| `200 OK` | Berhasil |
| `404 Not Found` | Halaman tidak ditemukan |
| `500 Internal Server Error` | Error di server |
| `301 Redirect` | Halaman pindah ke URL baru |

---

## Gambaran Besar

```
User                Browser              Server           Database
 │                     │                    │                │
 │ ketik URL           │                    │                │
 │──────────────────>  │                    │                │
 │                     │ HTTP Request       │                │
 │                     │─────────────────>  │                │
 │                     │                    │ query data     │
 │                     │                    │─────────────>  │
 │                     │                    │ <─── data ───  │
 │                     │ HTML + CSS + JS    │                │
 │                     │ <─────────────────  │                │
 │ melihat website     │                    │                │
 │ <──────────────────  │                    │                │
```

---

## Integrasi dengan AI

Website modern bisa memanggil **API AI** dari JavaScript:

```javascript
// Kirim teks ke Claude AI, tampilkan jawabannya di halaman
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [{ role: 'user', content: pertanyaanUser }]
  })
});

const data = await response.json();
document.getElementById('jawaban').textContent = data.content[0].text;
```

**Contoh di PareLabs:** Ayo — AI speaking partner untuk IELTS — bekerja persis seperti ini!

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
