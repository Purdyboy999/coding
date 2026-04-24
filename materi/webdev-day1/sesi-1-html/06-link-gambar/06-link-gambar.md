# 06 · Link & Gambar

**PareLabs Web Dev · Sesi 1 — HTML**

---

## Tag `<a>` — Hyperlink

Tag `<a>` (anchor) membuat teks/elemen menjadi link yang bisa diklik.

```html
<a href="URL_TUJUAN">Teks yang diklik</a>
```

### Jenis-jenis Link

```html
<!-- 1. Link ke website eksternal -->
<a href="https://parelabs.id" target="_blank">Kunjungi PareLabs</a>

<!-- 2. Link ke halaman lain di website yang sama -->
<a href="about.html">Tentang Kami</a>
<a href="pages/kontak.html">Kontak</a>

<!-- 3. Link anchor — scroll ke bagian di halaman ini -->
<a href="#tentang">Lihat bagian Tentang</a>
<!-- Target anchor-nya: -->
<section id="tentang">...</section>

<!-- 4. Link kirim email -->
<a href="mailto:hello@parelabs.id">Kirim Email</a>

<!-- 5. Link telepon (berguna di mobile) -->
<a href="tel:+6285178431725">Hubungi Kami</a>

<!-- 6. Link download file -->
<a href="brosur.pdf" download>Download Brosur</a>

<!-- 7. Gambar yang bisa diklik -->
<a href="https://parelabs.id">
  <img src="logo.png" alt="Logo PareLabs">
</a>
```

---

## Atribut Penting `<a>`

| Atribut | Nilai | Fungsi |
|---------|-------|--------|
| `href` | URL, path, #id, mailto:, tel: | Tujuan link |
| `target` | `_blank` (tab baru), `_self` (tab ini) | Cara membuka link |
| `download` | (boolean) | Paksa download file |
| `rel` | `noopener noreferrer` | Keamanan untuk `target="_blank"` |

### Best Practice untuk Link Eksternal:
```html
<!-- Tambahkan rel="noopener noreferrer" untuk keamanan -->
<a href="https://situs-lain.com" target="_blank" rel="noopener noreferrer">
  Buka di tab baru (aman)
</a>
```

---

## Tag `<img>` — Gambar

```html
<img src="SUMBER_GAMBAR" alt="DESKRIPSI GAMBAR">
```

`<img>` adalah **self-closing** — tidak butuh tag penutup.

### Sumber Gambar (`src`)

```html
<!-- Gambar lokal di folder yang sama -->
<img src="foto.jpg" alt="Foto profil">

<!-- Gambar di subfolder -->
<img src="img/banner.jpg" alt="Banner website">

<!-- Naik satu folder -->
<img src="../logo.png" alt="Logo">

<!-- Gambar dari internet (URL lengkap) -->
<img src="https://example.com/foto.jpg" alt="Foto dari internet">
```

### Atribut Penting `<img>`

| Atribut | Fungsi |
|---------|--------|
| `src` | Sumber/path gambar — wajib |
| `alt` | Deskripsi gambar — wajib! |
| `width` | Lebar dalam pixel |
| `height` | Tinggi dalam pixel |
| `loading="lazy"` | Load gambar hanya saat terlihat (performa) |

---

## Format Gambar yang Umum

| Format | Cocok untuk | Kelebihan |
|--------|------------|-----------|
| `.jpg` | Foto | Ukuran kecil |
| `.png` | Logo, icon, screenshot | Transparan |
| `.svg` | Icon, ilustrasi vektor | Skalabel, tidak pecah |
| `.webp` | Semua jenis | Modern, lebih kecil dari jpg/png |
| `.gif` | Animasi sederhana | Animasi loop |

---

## Figure & Figcaption

Untuk gambar dengan keterangan:

```html
<figure>
  <img src="foto-kelas.jpg" alt="Suasana kelas PareLabs">
  <figcaption>Suasana kelas offline PareLabs Academy, Pare 2026</figcaption>
</figure>
```

---

## Lihat file contoh: `06-link-gambar.html`

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
