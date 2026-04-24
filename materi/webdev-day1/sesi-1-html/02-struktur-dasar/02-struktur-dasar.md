# 02 · Struktur Dasar HTML

**PareLabs Web Dev · Sesi 1 — HTML**

---

## Kerangka Wajib HTML

Setiap file HTML yang valid **harus** memiliki struktur dasar ini. Tanpa struktur ini, browser masuk "quirks mode" dan bisa render tidak konsisten antar browser.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Judul Halaman</title>
</head>
<body>

  <!-- Konten kamu ditulis di sini -->

</body>
</html>
```

---

## Penjelasan Setiap Bagian

### `<!DOCTYPE html>`
- Baris pertama, **wajib ada**
- Memberitahu browser: "Ini adalah file HTML5"
- Bukan sebuah tag HTML, melainkan deklarasi
- Kalau tidak ada → browser masuk quirks mode (perilaku tidak terduga)

---

### `<html lang="id">`
- **Root element** — semua konten HTML ada di dalam tag ini
- Atribut `lang="id"` → memberitahu browser & search engine bahwa bahasa halaman adalah Indonesia
- Nilai lain: `lang="en"` (English), `lang="ja"` (Japanese), dll

---

### `<head>` — Area Metadata
Berisi informasi **tentang** halaman, bukan **konten** halaman. Tidak ditampilkan ke user.

| Tag dalam `<head>` | Fungsi |
|-------------------|--------|
| `<meta charset="UTF-8">` | Mendukung semua karakter (termasuk emoji & bahasa non-Latin) |
| `<meta name="viewport" ...>` | Membuat halaman responsif di HP |
| `<title>` | Teks yang muncul di tab browser & hasil Google |
| `<link rel="stylesheet" href="style.css">` | Menghubungkan file CSS |
| `<script src="app.js">` | Menghubungkan file JavaScript |
| `<meta name="description" ...>` | Deskripsi untuk Google |

---

### `<body>` — Area Konten
Semua yang **terlihat** di halaman ditulis di sini:
- Heading, paragraf, gambar
- Tombol, form, link
- Navigasi, header, footer
- Semua konten visual

---

## Pohon DOM

Browser mengubah HTML menjadi pohon (tree) yang disebut **DOM**:

```
document
  └── html
       ├── head
       │    ├── meta (charset)
       │    ├── meta (viewport)
       │    └── title
       └── body
            ├── header
            ├── main
            └── footer
```

---

## Shortcut Penting

### VS Code & Firebase Studio
Ketik `!` lalu tekan `Tab` → struktur dasar langsung muncul!

### Atau ketik ini:
```
html:5
```
lalu tekan `Tab` → sama hasilnya.

---

## Hal yang Sering Lupa

1. Lupa tutup tag `</html>` di baris terakhir
2. Lupa `charset="UTF-8"` → karakter Indonesia bisa tampil aneh
3. Lupa `viewport` meta → website tidak responsif di HP
4. Menulis konten di luar `<body>` → tidak akan tampil

---

## Lihat file contoh: `02-struktur-dasar.html`

Buka di browser dan juga di editor untuk melihat struktur lengkapnya.

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
