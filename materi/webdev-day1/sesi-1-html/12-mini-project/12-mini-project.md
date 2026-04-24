# 12 · Mini Project — Halaman Profil Diri

**PareLabs Web Dev · Sesi 1 — HTML**

---

## Deskripsi Project

Buat halaman profil diri lengkap menggunakan **semua elemen HTML** yang sudah dipelajari di Sesi 1. Ini adalah fondasi untuk final project di Pertemuan 5.

---

## Spesifikasi Wajib

### Struktur Semantic (Topik 10)
- [ ] `<header>` dengan nama dan navigasi `<nav>`
- [ ] `<main>` sebagai wadah konten utama
- [ ] Minimal 3 `<section>` dengan id berbeda
- [ ] `<footer>` dengan copyright

### Konten (Topik 4, 5, 6)
- [ ] Satu `<h1>` berisi nama kamu
- [ ] `<h2>` untuk setiap section
- [ ] Minimal 2 `<p>` berisi teks tentang dirimu
- [ ] `<img>` dengan `alt` yang deskriptif
- [ ] Minimal 1 `<a>` link eksternal dan 1 anchor link

### List (Topik 7)
- [ ] `<ul>` berisi daftar keahlian atau hobi
- [ ] `<ol>` berisi langkah-langkah atau rencana belajar

### Tabel (Topik 8)
- [ ] Tabel jadwal belajar minggu ini (minimal 3 baris, 3 kolom)

### Form (Topik 9)
- [ ] Form kontak dengan: input nama, email, textarea pesan, tombol submit

---

## Template Starter

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profil — [Nama Kamu]</title>
</head>
<body>

  <header>
    <h1>[Nama Lengkap Kamu]</h1>
    <nav>
      <ul>
        <li><a href="#tentang">Tentang</a></li>
        <li><a href="#keahlian">Keahlian</a></li>
        <li><a href="#jadwal">Jadwal</a></li>
        <li><a href="#kontak">Kontak</a></li>
      </ul>
    </nav>
  </header>

  <main>

    <section id="tentang">
      <h2>Tentang Saya</h2>
      <img src="[foto-kamu.jpg]" alt="Foto profil [nama kamu]" width="200">
      <p>[Bio singkat kamu — asal kota, background, kenapa belajar web dev]</p>
      <p>[Apa yang kamu harapkan setelah kursus ini]</p>
    </section>

    <section id="keahlian">
      <h2>Yang Sedang Saya Pelajari</h2>
      <ul>
        <li>HTML — struktur halaman web ✓</li>
        <li>CSS — tampilan website (segera!)</li>
        <li>JavaScript — interaksi (segera!)</li>
      </ul>

      <h3>Rencana Belajar Saya</h3>
      <ol>
        <li>Selesaikan kursus Web Dev 5 hari ini</li>
        <li>Buat 1 project portfolio</li>
        <li>Deploy ke GitHub Pages</li>
        <li>Lanjut belajar CSS dan JavaScript</li>
      </ol>
    </section>

    <section id="jadwal">
      <h2>Jadwal Belajar Minggu Ini</h2>
      <table>
        <thead>
          <tr>
            <th>Hari</th>
            <th>Waktu</th>
            <th>Materi</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Senin</td>
            <td>19.00 – 20.30</td>
            <td>HTML</td>
            <td>✅ Selesai</td>
          </tr>
          <tr>
            <td>Selasa</td>
            <td>19.00 – 20.30</td>
            <td>CSS + Tailwind</td>
            <td>⏳ Besok</td>
          </tr>
          <tr>
            <td>Rabu</td>
            <td>19.00 – 20.30</td>
            <td>JavaScript</td>
            <td>⏳ Lusa</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="kontak">
      <h2>Hubungi Saya</h2>
      <form>
        <label for="nama-pengirim">Nama:</label>
        <input type="text" id="nama-pengirim" name="nama" placeholder="Nama kamu" required>

        <label for="email-pengirim">Email:</label>
        <input type="email" id="email-pengirim" name="email" placeholder="email@kamu.com" required>

        <label for="pesan">Pesan:</label>
        <textarea id="pesan" name="pesan" rows="4" placeholder="Tulis pesanmu..." required></textarea>

        <button type="submit">Kirim Pesan</button>
      </form>
    </section>

  </main>

  <footer>
    <p>Copyright &copy; 2026 — [Nama Kamu] · PareLabs Web Dev Batch 1</p>
  </footer>

</body>
</html>
```

---

## Kriteria Penilaian

| Kriteria | Poin |
|----------|------|
| Struktur HTML valid (DOCTYPE, html, head, body) | 10 |
| Menggunakan tag semantic (header, main, section, footer) | 20 |
| Heading hierarki benar (1 h1, multiple h2/h3) | 10 |
| Ada gambar dengan alt yang deskriptif | 10 |
| Ada list ul dan ol yang relevan | 15 |
| Ada tabel yang bermakna | 15 |
| Ada form kontak yang lengkap | 15 |
| Kode rapi, terindentasi, ada komentar | 5 |
| **Total** | **100** |

---

## Checklist Sebelum Submit

- [ ] Buka di browser — semua konten tampil dengan benar?
- [ ] Klik semua link — anchor link berfungsi?
- [ ] Coba submit form — validasi HTML5 berjalan?
- [ ] Inspect dengan F12 — ada error di console?
- [ ] Validasi di [validator.w3.org](https://validator.w3.org) — HTML valid?

---

## Deadline

Submit ke GitHub repository kamu paling lambat **23.59 WIB hari ini**.

Nama file: `index.html` di root folder repository.

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
