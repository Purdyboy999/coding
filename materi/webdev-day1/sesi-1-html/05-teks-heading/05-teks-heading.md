# 05 · Teks & Heading

**PareLabs Web Dev · Sesi 1 — HTML**

---

## Heading — h1 sampai h6

HTML menyediakan 6 level heading. Digunakan untuk hierarki konten.

```html
<h1>Judul Utama — Paling Besar (hanya 1 per halaman!)</h1>
<h2>Sub Judul</h2>
<h3>Sub-sub Judul</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6 — Paling Kecil</h6>
```

### Aturan Penting Heading:
- **h1 hanya SATU per halaman** — penting untuk SEO Google
- Gunakan heading secara hierarkis (jangan lompat dari h1 ke h4)
- Heading bukan untuk membuat teks besar — gunakan CSS untuk itu
- Google menggunakan h1 untuk memahami topik utama halaman

---

## Paragraf `<p>`

```html
<p>Ini adalah paragraf pertama. HTML otomatis menambahkan
   jarak (margin) antara satu paragraf dan paragraf berikutnya.</p>

<p>Ini paragraf kedua. Setiap paragraf mulai di baris baru.</p>
```

---

## Elemen Teks Khusus

| Tag | Fungsi | Contoh hasil |
|-----|--------|-------------|
| `<strong>` | Teks penting/tebal | **kata penting** |
| `<em>` | Teks ditekankan/miring | *kata ditekankan* |
| `<mark>` | Highlight/tandai teks | teks ditandai kuning |
| `<small>` | Teks kecil | catatan kaki, copyright |
| `<del>` | Teks dicoret | ~~harga lama~~ |
| `<ins>` | Teks baru ditambahkan | teks digarisbawahi |
| `<sub>` | Subscript | H₂O |
| `<sup>` | Superscript | x² |
| `<code>` | Kode program | `console.log()` |
| `<pre>` | Teks preformatted | Spasi & baris dipertahankan |
| `<blockquote>` | Kutipan panjang | Indented quote |
| `<q>` | Kutipan pendek inline | "kutipan inline" |
| `<abbr>` | Singkatan | HTML (hover untuk tooltip) |

---

## Line Break dan Horizontal Rule

```html
<p>Baris pertama.<br>Ini baris baru dalam paragraf yang sama.</p>

<hr>  <!-- Garis horizontal pemisah -->
```

- `<br>` — line break, pindah baris. Gunakan hemat, jangan untuk spacing
- `<hr>` — horizontal rule, garis pemisah antar bagian

---

## strong vs b, em vs i

```html
<!-- Semantik (direkomendasikan) -->
<strong>Teks penting</strong>  <!-- makna: ini penting/urgent -->
<em>Teks ditekankan</em>       <!-- makna: penekanan khusus -->

<!-- Visual saja (hindari) -->
<b>Teks tebal</b>              <!-- hanya tampilan tebal, tanpa makna -->
<i>Teks miring</i>             <!-- hanya tampilan miring, tanpa makna -->
```

Gunakan `<strong>` dan `<em>` karena lebih semantic dan lebih baik untuk aksesibilitas & SEO.

---

## Lihat file contoh: `05-teks-heading.html`

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
