# 10 · Semantic HTML

**PareLabs Web Dev · Sesi 1 — HTML**

---

## Apa itu Semantic HTML?

Semantic HTML berarti menggunakan tag yang **bermakna sesuai fungsinya**. Setiap tag punya arti yang jelas tentang konten di dalamnya.

---

## Non-Semantic vs Semantic

### Non-Semantic (cara lama, hindari)
```html
<div id="header">
  <div id="nav">...</div>
</div>
<div id="main-content">
  <div class="article">
    <div class="article-title">Judul</div>
    <div class="article-body">Isi...</div>
  </div>
</div>
<div id="sidebar">...</div>
<div id="footer">...</div>
```

### Semantic (cara modern, gunakan ini)
```html
<header>
  <nav>...</nav>
</header>
<main>
  <article>
    <h1>Judul</h1>
    <p>Isi...</p>
  </article>
</main>
<aside>...</aside>
<footer>...</footer>
```

---

## Tag Semantic HTML5

| Tag | Fungsi |
|-----|--------|
| `<header>` | Bagian atas halaman atau section. Biasanya berisi logo, judul, nav |
| `<nav>` | Blok navigasi — menu utama, breadcrumb, pagination |
| `<main>` | Konten utama halaman. Hanya SATU per halaman |
| `<section>` | Bagian/blok konten bertema. Biasanya punya heading |
| `<article>` | Konten mandiri yang bisa berdiri sendiri — blog post, berita, komentar |
| `<aside>` | Konten pendukung/samping — sidebar, iklan, related links |
| `<footer>` | Bagian bawah halaman atau section. Copyright, links, kontak |
| `<figure>` | Gambar, diagram, atau ilustrasi dengan keterangan |
| `<figcaption>` | Keterangan/caption untuk `<figure>` |
| `<time>` | Waktu/tanggal dengan format machine-readable |
| `<address>` | Informasi kontak/alamat |
| `<mark>` | Teks yang ditandai/highlight |
| `<details>` | Konten yang bisa dibuka/tutup (accordion) |
| `<summary>` | Judul untuk `<details>` |

---

## Struktur Halaman Typical

```html
<!DOCTYPE html>
<html lang="id">
<head>...</head>
<body>

  <header>
    <a href="/" class="logo">PareLabs</a>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/program">Program</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="hero">
      <h1>Belajar Web Dev dari Nol</h1>
      <p>Program intensif 5 pertemuan</p>
    </section>

    <section id="program">
      <h2>Program Kami</h2>
      <article>
        <h3>Speaking Pro</h3>
        <p>Kuasai bahasa Inggris lisan...</p>
      </article>
    </section>
  </main>

  <aside>
    <h2>Program Populer</h2>
    <ul>...</ul>
  </aside>

  <footer>
    <address>
      Kampung Inggris Pare, Kediri, Jawa Timur
    </address>
    <p><small>Copyright 2026 PareLabs Academy</small></p>
  </footer>

</body>
</html>
```

---

## Kenapa Semantic Penting?

1. **SEO** — Google memahami struktur & hierarki konten lebih baik
2. **Aksesibilitas** — Screen reader untuk tunanetra bisa navigasi dengan benar
3. **Keterbacaan kode** — Developer lain langsung paham struktur halaman
4. **Maintainability** — Lebih mudah diupdate dan diperbaiki

---

## Lihat file contoh: `10-semantic-html.html`

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
