# 07 · List (Daftar)

**PareLabs Web Dev · Sesi 1 — HTML**

---

## 3 Jenis List di HTML

### 1. Unordered List `<ul>` — Daftar Bullet
Untuk item yang tidak punya urutan tertentu.

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```
Hasil: • HTML  • CSS  • JavaScript

---

### 2. Ordered List `<ol>` — Daftar Nomor
Untuk item yang punya urutan/langkah-langkah.

```html
<ol>
  <li>Buat file index.html</li>
  <li>Tulis struktur HTML dasar</li>
  <li>Tambahkan konten</li>
  <li>Buka di browser</li>
</ol>
```
Hasil: 1. Buat file...  2. Tulis struktur...

---

### 3. Description List `<dl>` — Daftar Definisi
Untuk pasangan term dan deskripsinya (seperti kamus/glossary).

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — bahasa struktur web</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — bahasa tampilan web</dd>
</dl>
```

---

## Nested List — List di Dalam List

```html
<ul>
  <li>Frontend Development
    <ul>
      <li>HTML</li>
      <li>CSS
        <ul>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
        </ul>
      </li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend Development
    <ul>
      <li>Node.js</li>
      <li>Python</li>
      <li>Rust</li>
    </ul>
  </li>
</ul>
```

---

## Ordered List — Tipe Penomoran

```html
<!-- Angka biasa (default) -->
<ol type="1">
  <li>Item satu</li>
</ol>

<!-- Huruf kapital -->
<ol type="A">
  <li>Item A</li>
</ol>

<!-- Huruf kecil -->
<ol type="a">
  <li>Item a</li>
</ol>

<!-- Angka romawi besar -->
<ol type="I">
  <li>Item I</li>
</ol>

<!-- Mulai dari nomor tertentu -->
<ol start="5">
  <li>Item lima</li>
  <li>Item enam</li>
</ol>
```

---

## Penggunaan Nyata — Navigation Menu

Hampir semua navigation menu di website modern dibuat dari list:

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/program">Program</a></li>
    <li><a href="/tentang">Tentang</a></li>
    <li><a href="/kontak">Kontak</a></li>
  </ul>
</nav>
```

Lalu dengan CSS, `<ul>` diubah jadi horizontal dan dihilangkan bullet-nya.

---

## Lihat file contoh: `07-list.html`

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
