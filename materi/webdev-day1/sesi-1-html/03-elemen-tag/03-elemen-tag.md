# 03 · Elemen & Tag HTML

**PareLabs Web Dev · Sesi 1 — HTML**

---

## Anatomi Sebuah Elemen HTML

```
   tag pembuka    konten/isi        tag penutup
   ───────────  ───────────────   ─────────────
   <p>          Ini paragraf.     </p>
   <h1>         Judul Halaman     </h1>
   <strong>     Teks penting      </strong>
```

---

## Elemen dengan Tag Pembuka & Penutup

Sebagian besar elemen HTML memiliki pasangan:

```html
<tagname>konten di sini</tagname>
```

Contoh:
```html
<h1>Judul Utama</h1>
<p>Ini adalah sebuah paragraf teks biasa.</p>
<strong>Teks ini dicetak tebal.</strong>
<em>Teks ini dicetak miring.</em>
<a href="#">Ini adalah link</a>
```

---

## Self-Closing Tags (Tidak Butuh Penutup)

Beberapa elemen tidak memiliki konten, sehingga tidak butuh tag penutup:

```html
<img src="foto.jpg" alt="Deskripsi foto">
<br>         <!-- line break — pindah baris -->
<hr>         <!-- horizontal rule — garis pemisah -->
<input type="text">
<meta charset="UTF-8">
<link rel="stylesheet" href="style.css">
```

---

## Elemen Bisa Bersarang (Nested)

Elemen HTML bisa berada di dalam elemen lain:

```html
<p>Ini paragraf dengan <strong>teks tebal</strong> di dalamnya.</p>

<ul>
  <li>Item pertama</li>
  <li>Item kedua dengan <a href="#">link</a></li>
</ul>

<div class="card">
  <h2>Judul Card</h2>
  <p>Deskripsi card</p>
  <button>Klik</button>
</div>
```

**Aturan:** Kalau kamu buka tag di dalam tag lain, tutup dulu yang dalam sebelum yang luar.

```html
<!-- BENAR -->
<p>Teks <strong>tebal</strong> biasa.</p>

<!-- SALAH — tag tidak rapi/bertumpuk salah -->
<p>Teks <strong>tebal</p></strong>
```

---

## 12 Elemen HTML yang Paling Sering Digunakan

| Tag | Nama | Fungsi |
|-----|------|--------|
| `<h1>`–`<h6>` | Heading | Judul dan sub-judul |
| `<p>` | Paragraph | Blok teks |
| `<a>` | Anchor | Link/tautan |
| `<img>` | Image | Gambar |
| `<ul>` / `<ol>` | List | Daftar bullet/nomor |
| `<li>` | List Item | Item dalam list |
| `<div>` | Division | Container block umum |
| `<span>` | Span | Container inline kecil |
| `<button>` | Button | Tombol klik |
| `<input>` | Input | Kolom isian form |
| `<strong>` | Strong | Teks penting/tebal |
| `<em>` | Emphasis | Teks penekanan/miring |

---

## Perbedaan Block vs Inline

### Block Elements
- Selalu mulai di baris baru
- Mengambil lebar penuh yang tersedia
- Contoh: `<h1>`, `<p>`, `<div>`, `<ul>`, `<section>`

### Inline Elements
- Mengalir bersama teks, tidak mulai baris baru
- Hanya selebar kontennya
- Contoh: `<strong>`, `<em>`, `<a>`, `<img>`, `<span>`

---

## Lihat file contoh: `03-elemen-tag.html`

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
