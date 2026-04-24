# 04 · Atribut HTML

**PareLabs Web Dev · Sesi 1 — HTML**

---

## Apa itu Atribut?

Atribut memberikan **informasi tambahan** pada tag HTML. Ditulis di dalam tag pembuka.

```
   tag     atribut      nilai atribut
   ────   ─────────  ──────────────────
   <a     href=      "https://parelabs.id"   >Teks link</a>
   <img   src=       "foto.jpg"              alt="Foto profil">
   <input type=      "email"                 placeholder="Email kamu">
```

---

## Format Penulisan

```html
<tagname atribut1="nilai1" atribut2="nilai2">konten</tagname>
```

- Nama atribut menggunakan huruf kecil
- Nilai atribut diapit tanda kutip (double quote `"` atau single quote `'`)
- Beberapa atribut tidak butuh nilai (boolean attributes)

---

## Atribut Paling Penting

### `id` — Identitas Unik
```html
<section id="tentang">...</section>
<div id="navbar">...</div>
```
- Harus **unik** — satu halaman hanya boleh ada satu elemen dengan id yang sama
- Digunakan oleh CSS (`#tentang { ... }`) dan JavaScript (`document.getElementById('tentang')`)
- Digunakan untuk anchor link: `<a href="#tentang">Ke bagian tentang</a>`

---

### `class` — Kelompok Elemen
```html
<button class="btn btn-primary">Daftar</button>
<button class="btn btn-secondary">Batal</button>
<p class="teks-merah">Error: email tidak valid</p>
```
- Boleh **sama** di banyak elemen
- Satu elemen boleh punya **banyak class** (dipisah spasi)
- Digunakan oleh CSS (`.btn { ... }`) dan JavaScript

---

### `href` — Link Tujuan
```html
<a href="https://parelabs.id">Website PareLabs</a>
<a href="about.html">Tentang Kami</a>
<a href="#kontak">Ke bagian kontak</a>
<a href="mailto:hello@parelabs.id">Email kami</a>
```

---

### `src` — Sumber File
```html
<img src="foto-profil.jpg" alt="Foto saya">
<script src="app.js"></script>
```

---

### `alt` — Teks Alternatif Gambar
```html
<img src="logo.png" alt="Logo PareLabs Academy">
```
- **Wajib ada** di setiap `<img>`
- Dibaca oleh screen reader (untuk tunanetra)
- Muncul jika gambar gagal load
- Diindeks Google untuk SEO gambar

---

### `target` — Target Buka Link
```html
<a href="..." target="_blank">Buka di tab baru</a>
<a href="..." target="_self">Buka di tab ini (default)</a>
```

---

### `style` — CSS Inline
```html
<p style="color: red; font-size: 18px;">Teks merah besar</p>
<div style="background: #f0f0f0; padding: 20px;">Kotak abu</div>
```
- Hindari penggunaan berlebihan — lebih baik pakai file CSS terpisah
- Boleh untuk quick test atau styling yang sangat spesifik

---

### `type` — Jenis Elemen
```html
<input type="text">
<input type="email">
<input type="password">
<input type="number">
<input type="checkbox">
<input type="radio">
<button type="submit">Kirim</button>
<button type="button">Klik</button>
```

---

### `placeholder` — Teks Petunjuk Input
```html
<input type="text" placeholder="Masukkan nama lengkap kamu">
<input type="email" placeholder="email@kamu.com">
<textarea placeholder="Tulis pesan kamu di sini..."></textarea>
```

---

### `disabled` — Menonaktifkan Elemen
```html
<!-- Boolean attribute — tidak butuh nilai -->
<button disabled>Tombol ini tidak aktif</button>
<input type="text" disabled placeholder="Tidak bisa diisi">
```

---

### `required` — Wajib Diisi
```html
<input type="email" required placeholder="Email wajib diisi">
<input type="text" name="nama" required>
```

---

## id vs class — Kapan Pakai Mana?

| | `id` | `class` |
|-|------|---------|
| Keunikan | Harus unik (1 per halaman) | Boleh dipakai banyak elemen |
| CSS selector | `#nama-id` | `.nama-class` |
| JS selector | `getElementById()` | `getElementsByClassName()` |
| Gunakan untuk | Anchor link, JS specific | Styling berulang, komponen |

---

## Lihat file contoh: `04-atribut.html`

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
