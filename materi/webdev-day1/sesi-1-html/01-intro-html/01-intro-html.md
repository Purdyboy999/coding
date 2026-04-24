# 01 · Apa itu HTML?

**PareLabs Web Dev · Sesi 1 — HTML**

---

## Definisi

**HTML** = **H**yper**T**ext **M**arkup **L**anguage

HTML adalah bahasa yang digunakan untuk membuat **struktur** halaman web. Ini bukan bahasa pemrograman (tidak ada logika), melainkan **bahasa markup** — kamu menandai konten agar browser tahu cara menampilkannya.

---

## Markup Language vs Programming Language

| | Markup Language (HTML) | Programming Language (JS) |
|-|------------------------|--------------------------|
| Logika | ❌ Tidak ada | ✅ Ada (if, loop, fungsi) |
| Fungsi | Mendefinisikan struktur | Memproses data |
| Contoh | HTML, XML, Markdown | JavaScript, Python, Rust |

---

## Analogi Tiga Pilar Web

```
HTML  = Kerangka bangunan (bata, beton, struktur)
CSS   = Cat, wallpaper, dekorasi (tampilan)
JS    = Listrik, pintu otomatis (interaksi)
```

Tanpa HTML → tidak ada apa-apa  
Tanpa CSS → ada tapi jelek  
Tanpa JS → ada, bagus, tapi tidak interaktif  

---

## Sejarah Singkat HTML

| Tahun | Versi | Hal Penting |
|-------|-------|-------------|
| 1991 | HTML 1.0 | Tim Berners-Lee, untuk berbagi dokumen ilmiah |
| 1997 | HTML 4 | Tabel, form yang lebih baik |
| 2008 | HTML5 (draft) | Video, audio, canvas, API baru |
| 2014 | HTML5 (resmi) | Versi yang kita pakai sekarang |

---

## Cara Browser Membaca HTML

```
1. Kamu ketik URL di browser
2. Browser kirim request ke server
3. Server kirim balik file .html
4. Browser baca (parse) tag HTML dari atas ke bawah
5. Browser buat DOM (Document Object Model) — pohon elemen
6. Browser render DOM jadi tampilan visual di layar
```

---

## File HTML

- Disimpan dengan ekstensi **`.html`**
- File utama hampir selalu bernama **`index.html`**
- Browser otomatis membuka `index.html` saat kamu buka folder/domain
- Bisa dibuka langsung dari komputer (tanpa internet)

---

## Tools untuk Menulis HTML

| Tool | Cocok untuk |
|------|------------|
| **Firebase Studio** | Online, langsung coding di browser |
| **VS Code** | Offline, fitur lengkap, rekomendasi utama |
| **Notepad/TextEdit** | Bisa, tapi tidak ada highlight dan autocomplete |

### Shortcut penting di VS Code / Firebase Studio:
- Ketik `!` lalu tekan `Tab` → struktur HTML dasar langsung muncul
- `Ctrl + S` → simpan file
- `Ctrl + /` → comment/uncomment baris
- `Alt + Shift + F` → auto-format kode

---

## Lihat file contoh: `01-intro-html.html`

Buka file tersebut di browser untuk melihat hasil rendering HTML dasar.

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
