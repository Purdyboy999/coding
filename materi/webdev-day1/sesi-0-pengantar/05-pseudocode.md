# 05 · Pseudocode

**PareLabs Web Dev · Batch 1 · Sesi 0 — Pengantar**

---

## Apa itu Pseudocode?

Pseudocode adalah cara menulis **logika program** menggunakan bahasa sehari-hari — bukan kode nyata, tapi terstruktur seperti kode. Alat berpikir **sebelum** coding.

> **Analogi:** Pseudocode seperti membuat **sketsa** sebelum melukis, atau membuat **outline** sebelum menulis artikel.

---

## Kenapa Pseudocode Penting?

- Membantu **berpikir** tanpa pusing syntax
- Memudahkan **komunikasi** ide dengan tim atau AI
- Mencegah **logika salah** sebelum nulis kode panjang
- Lebih mudah **direvisi** daripada kode yang sudah jadi

---

## Aturan Pseudocode

Tidak ada aturan baku! Tapi biasanya menggunakan:

| Kata | Artinya |
|------|---------|
| `MULAI` / `SELESAI` | awal dan akhir proses |
| `JIKA ... MAKA` | kondisi (if) |
| `JIKA TIDAK` | else |
| `ULANGI ... SAMPAI` | loop |
| `TAMPILKAN` | output ke user |
| `MINTA` | input dari user |
| `SIMPAN` | menyimpan ke variabel |

---

## Contoh 1: Sistem Login

```
MULAI

  MINTA user masukkan email dan password

  JIKA email dan password cocok dengan database:
    SIMPAN status "sudah login"
    TAMPILKAN halaman dashboard
  JIKA TIDAK:
    TAMPILKAN pesan error "Email atau password salah"
    MINTA user coba lagi

SELESAI
```

**Kode JavaScript-nya:**
```javascript
if (email === dbEmail && password === dbPassword) {
  localStorage.setItem('status', 'login');
  window.location.href = '/dashboard';
} else {
  alert('Email atau password salah');
}
```

---

## Contoh 2: Cek Nilai Ujian

```
MULAI

  MINTA user masukkan nilai (0-100)

  JIKA nilai >= 90:
    TAMPILKAN "Grade A — Sangat Memuaskan"
  JIKA nilai >= 75:
    TAMPILKAN "Grade B — Memuaskan"
  JIKA nilai >= 60:
    TAMPILKAN "Grade C — Cukup"
  JIKA TIDAK:
    TAMPILKAN "Grade D — Perlu Perbaikan"

SELESAI
```

**Kode JavaScript-nya:**
```javascript
let nilai = parseInt(prompt('Masukkan nilai:'));

if (nilai >= 90) {
  alert('Grade A — Sangat Memuaskan');
} else if (nilai >= 75) {
  alert('Grade B — Memuaskan');
} else if (nilai >= 60) {
  alert('Grade C — Cukup');
} else {
  alert('Grade D — Perlu Perbaikan');
}
```

---

## Contoh 3: Tampilkan Daftar Program

```
MULAI

  AMBIL daftar program dari database

  ULANGI untuk setiap program:
    TAMPILKAN nama program
    TAMPILKAN harga
    TAMPILKAN tombol "Daftar"

SELESAI
```

---

## Tips Praktis

1. Tulis pseudocode **sebelum** minta AI generate kode
2. Semakin detail pseudocode → AI menghasilkan kode yang lebih akurat
3. Kalau logic pseudocode sudah benar, kodenya tinggal translasi
4. Gunakan pseudocode saat presentasi ke orang non-teknis

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
