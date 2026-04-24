# 09 · Form HTML

**PareLabs Web Dev · Sesi 1 — HTML**

---

## Apa itu Form?

Form adalah cara utama user mengirim data ke website — login, registrasi, kontak, search, checkout. Ini adalah komponen paling penting di web interaktif.

---

## Struktur Dasar Form

```html
<form action="/proses" method="POST">
  <!-- elemen-elemen input di sini -->
  <button type="submit">Kirim</button>
</form>
```

- `action` → URL yang menerima data form (biasanya backend)
- `method` → cara kirim: `GET` (data di URL) atau `POST` (data tersembunyi)

---

## Semua Jenis Input

```html
<!-- Teks biasa -->
<input type="text" name="nama" placeholder="Nama lengkap" required>

<!-- Email — ada validasi format otomatis -->
<input type="email" name="email" placeholder="email@kamu.com" required>

<!-- Password — tersembunyi -->
<input type="password" name="password" placeholder="Minimal 8 karakter" minlength="8">

<!-- Angka -->
<input type="number" name="usia" min="17" max="100" placeholder="Usia">

<!-- Telepon -->
<input type="tel" name="hp" placeholder="+62 8xx xxxx xxxx">

<!-- URL -->
<input type="url" name="website" placeholder="https://...">

<!-- Tanggal -->
<input type="date" name="tgl_lahir">

<!-- Waktu -->
<input type="time" name="jadwal">

<!-- Warna -->
<input type="color" name="warna_favorit">

<!-- Range / Slider -->
<input type="range" name="nilai" min="0" max="100" value="50">

<!-- File upload -->
<input type="file" name="foto" accept="image/*">

<!-- Checkbox — bisa pilih banyak -->
<input type="checkbox" name="setuju" id="setuju" required>
<label for="setuju">Saya setuju dengan syarat dan ketentuan</label>

<!-- Radio — pilih satu dari beberapa -->
<input type="radio" name="gender" value="L" id="laki"> <label for="laki">Laki-laki</label>
<input type="radio" name="gender" value="P" id="perempuan"> <label for="perempuan">Perempuan</label>

<!-- Hidden — data tersembunyi (untuk tracking dll) -->
<input type="hidden" name="source" value="landing-page">
```

---

## Select (Dropdown)

```html
<select name="program">
  <option value="">-- Pilih Program --</option>
  <option value="speaking">Speaking Pro</option>
  <option value="whv">WHV Ready</option>
  <option value="beasiswa">Beasiswa Ready</option>
</select>

<!-- Pilih banyak sekaligus -->
<select name="minat" multiple size="4">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
  <option value="react">React</option>
</select>
```

---

## Textarea

```html
<textarea name="pesan" rows="5" cols="40" placeholder="Tulis pesan kamu...">
</textarea>
```

---

## Label — Sangat Penting!

```html
<!-- Cara 1: label melingkupi input (implicit) -->
<label>
  Nama Lengkap
  <input type="text" name="nama">
</label>

<!-- Cara 2: label + for/id (explicit — lebih direkomendasikan) -->
<label for="email">Alamat Email</label>
<input type="email" id="email" name="email">
```

- `<label>` membuat input lebih mudah diklik (klik label = fokus ke input)
- Penting untuk aksesibilitas screen reader
- Hubungkan dengan atribut `for` di label dan `id` di input

---

## Validasi HTML5 Bawaan

```html
<input type="email" required>            <!-- Wajib diisi, format email -->
<input type="text" required minlength="3" maxlength="50">
<input type="number" min="0" max="100">
<input type="password" pattern="[A-Za-z0-9]{8,}">
```

Validasi berjalan otomatis saat form di-submit — tanpa JavaScript!

---

## Fieldset & Legend

Mengelompokkan input yang berhubungan:

```html
<form>
  <fieldset>
    <legend>Data Pribadi</legend>
    <label>Nama: <input type="text" name="nama"></label>
    <label>Email: <input type="email" name="email"></label>
  </fieldset>

  <fieldset>
    <legend>Pilihan Program</legend>
    <input type="radio" name="program" value="speaking"> Speaking Pro<br>
    <input type="radio" name="program" value="whv"> WHV Ready
  </fieldset>
</form>
```

---

## Lihat file contoh: `09-form.html`

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
