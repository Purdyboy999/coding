# 06 · Computational Thinking

**PareLabs Web Dev · Batch 1 · Sesi 0 — Pengantar**

---

## Apa itu Computational Thinking?

Cara berpikir seperti komputer — **memecah masalah besar** menjadi langkah-langkah kecil yang bisa diselesaikan secara sistematis.

Ini adalah **skill berpikir**, bukan skill coding. Bisa diterapkan bahkan tanpa komputer!

---

## 4 Pilar Computational Thinking

---

### 1. Decomposition (Dekomposisi)
**Pecah masalah besar jadi bagian-bagian kecil.**

Contoh: "Buat website profil diri"

```
Website Profil Diri
├── Header
│   ├── Nama
│   └── Menu navigasi
├── Section About
│   ├── Foto
│   └── Bio singkat
├── Section Skills
│   └── Daftar keahlian
├── Section Kontak
│   └── Form kontak
└── Footer
    └── Copyright
```

---

### 2. Pattern Recognition (Pengenalan Pola)
**Temukan kesamaan dan pola dari masalah-masalah sebelumnya.**

Contoh: 
- Semua tombol di website bekerja dengan cara sama → pola yang sama
- Setiap halaman punya header, konten, footer → pola layout
- Semua form punya input + tombol submit → pola form

**Manfaat:** Kalau sudah tahu polanya, tidak perlu mulai dari nol setiap kali.

---

### 3. Abstraction (Abstraksi)
**Fokus pada detail yang penting, abaikan yang tidak relevan dulu.**

Contoh fitur login:
```
Yang PENTING dulu:
- Email ada? ✓
- Password benar? ✓
- Masuk ke dashboard ✓

Yang bisa DIABAIKAN dulu:
- Desain halaman login
- Animasi loading
- Lupa password
```

Selesaikan yang inti dulu, baru tambah detail.

---

### 4. Algorithm (Algoritma)
**Buat langkah-langkah solusi yang jelas, berurutan, dan bisa diulang.**

> **Analogi:** Resep masakan = algoritma untuk memasak nasi goreng.  
> Siapa pun yang ikuti resepnya → hasil sama.

Contoh algoritma menampilkan foto di website:
```
1. Siapkan file gambar (JPG/PNG/WebP)
2. Taruh file gambar di folder project
3. Tulis tag <img src="nama-file.jpg" alt="deskripsi">
4. Buka di browser, cek apakah gambar muncul
5. Kalau tidak muncul → cek nama file dan path-nya
```

---

## Studi Kasus: Fitur Cari Program

Bayangkan kamu ingin buat fitur "cari program" di website PareLabs.

### Langkah Computational Thinking:

**Decompose:**
- Kotak input teks
- Tombol cari (atau auto-search saat ketik)
- Daftar program yang bisa dicari
- Area tampil hasil

**Pattern:** Mirip seperti fitur search yang pernah kamu pakai (Google, Shopee)

**Abstraction:** Fokus dulu pada: ambil teks → cocokkan → tampilkan. Belum perlu: highlight kata yang cocok, search history, dll.

**Algorithm:**
```
1. User ketik kata di kotak input
2. Ambil kata yang diketik
3. Bandingkan dengan setiap nama program
4. Kalau cocok → tampilkan program itu
5. Kalau tidak ada yang cocok → tampilkan "Program tidak ditemukan"
```

---

## Latihan Cepat

Coba terapkan computational thinking untuk fitur ini:
**"Tambahkan tombol dark mode di website"**

Tuliskan:
1. Decompose — apa saja bagian-bagiannya?
2. Pattern — pernah lihat fitur ini di website mana?
3. Abstraction — apa yang paling inti?
4. Algorithm — apa langkah-langkahnya?

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
