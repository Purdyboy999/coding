# 08 · Tabel HTML

**PareLabs Web Dev · Sesi 1 — HTML**

---

## Kapan Pakai Tabel?

Tabel digunakan untuk menampilkan **data tabular** — data yang memang secara alami berbentuk baris dan kolom.

✅ **Gunakan tabel untuk:**
- Jadwal pelajaran / kegiatan
- Daftar harga / paket
- Perbandingan fitur produk
- Data statistik / laporan
- Tabel nilai / rapor

❌ **Jangan gunakan tabel untuk:**
- Layout halaman web (sudah digantikan CSS Flexbox/Grid)
- Menempatkan gambar bersebelahan
- Membuat kolom teks

---

## Struktur Tabel Lengkap

```html
<table>
  <!-- Kepala tabel -->
  <thead>
    <tr>
      <th>Nama</th>
      <th>Program</th>
      <th>Nilai</th>
    </tr>
  </thead>

  <!-- Isi tabel -->
  <tbody>
    <tr>
      <td>Budi Santoso</td>
      <td>Speaking Pro</td>
      <td>92</td>
    </tr>
    <tr>
      <td>Siti Rahayu</td>
      <td>WHV Ready</td>
      <td>87</td>
    </tr>
  </tbody>

  <!-- Kaki tabel (opsional) -->
  <tfoot>
    <tr>
      <td colspan="2">Rata-rata</td>
      <td>89.5</td>
    </tr>
  </tfoot>
</table>
```

---

## Penjelasan Tag Tabel

| Tag | Fungsi |
|-----|--------|
| `<table>` | Container utama tabel |
| `<thead>` | Bagian kepala tabel (header row) |
| `<tbody>` | Bagian isi tabel |
| `<tfoot>` | Bagian kaki tabel (total, catatan) |
| `<tr>` | Table Row — satu baris |
| `<th>` | Table Header — sel kepala (tebal, center) |
| `<td>` | Table Data — sel isi biasa |

---

## colspan & rowspan

Menggabungkan sel:

```html
<!-- colspan: gabung 2 kolom -->
<td colspan="2">Sel ini menempati 2 kolom</td>

<!-- rowspan: gabung 3 baris -->
<td rowspan="3">Sel ini menempati 3 baris</td>
```

---

## Atribut Tabel Penting

```html
<!-- border (sebaiknya gunakan CSS, bukan atribut) -->
<table border="1">

<!-- Di CSS modern: -->
<style>
  table { border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid #ddd; padding: 10px 14px; text-align: left; }
  thead { background: #7c6af7; color: white; }
  tbody tr:nth-child(even) { background: #f5f5f5; }
</style>
```

---

## Lihat file contoh: `08-tabel.html`

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
