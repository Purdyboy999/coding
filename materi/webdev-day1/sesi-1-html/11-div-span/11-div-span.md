# 11 · Div & Span

**PareLabs Web Dev · Sesi 1 — HTML**

---

## Div & Span — Container Generik

`<div>` dan `<span>` adalah container yang **tidak punya makna semantik**. Digunakan khusus untuk keperluan styling CSS dan scripting JavaScript ketika tidak ada tag semantic yang cocok.

---

## `<div>` — Block Container

- Selalu mulai di **baris baru**
- Mengambil **lebar penuh** yang tersedia
- Untuk mengelompokkan elemen-elemen besar

```html
<div class="card">
  <h2>Judul Card</h2>
  <p>Deskripsi program ini sangat menarik.</p>
  <button>Daftar Sekarang</button>
</div>

<div class="grid">
  <div class="col">Kolom 1</div>
  <div class="col">Kolom 2</div>
  <div class="col">Kolom 3</div>
</div>
```

---

## `<span>` — Inline Container

- Mengalir **bersama teks** — tidak mulai baris baru
- Hanya **selebar kontennya**
- Untuk styling sebagian teks atau elemen kecil

```html
<p>
  Harga normal <del>Rp 500.000</del> sekarang
  <span style="color: red; font-weight: bold;">Rp 299.000</span>
  untuk <span style="background: yellow;">pendaftar awal!</span>
</p>

<p>
  Status: <span class="badge-aktif">Aktif</span>
</p>
```

---

## Kapan Pakai `<div>` vs Elemen Semantic?

### Gunakan tag semantic jika ada yang cocok:
```html
<!-- BAGUS — ada tag semantic yang tepat -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
<article>...</article>
<section>...</section>
```

### Gunakan `<div>` jika tidak ada yang cocok:
```html
<!-- OK — tidak ada tag semantic untuk ini -->
<div class="card-grid">...</div>
<div class="modal-overlay">...</div>
<div class="wrapper">...</div>
<div class="hero-content">...</div>
```

---

## Pola Umum dengan Div

### Card Component
```html
<div class="card">
  <div class="card-header">
    <img src="icon.png" alt="">
    <h3>Speaking Pro</h3>
  </div>
  <div class="card-body">
    <p>Kuasai bahasa Inggris lisan dalam 1 bulan.</p>
  </div>
  <div class="card-footer">
    <span class="price">Rp 299.000</span>
    <button>Daftar</button>
  </div>
</div>
```

### Grid Layout
```html
<div class="container">
  <div class="row">
    <div class="col-4">Kolom 1</div>
    <div class="col-4">Kolom 2</div>
    <div class="col-4">Kolom 3</div>
  </div>
</div>
```

---

## Rule of Thumb

> Selalu cari tag semantic dulu.
> Kalau tidak ada yang cocok → pakai `<div>` atau `<span>`.

---

## Lihat file contoh: `11-div-span.html`

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
