# 08 · Integrasi Web dengan AI

**PareLabs Web Dev · Batch 1 · Sesi 0 — Pengantar**

---

## Web + AI = Aplikasi Cerdas

Website modern tidak hanya menampilkan konten statis. Dengan mengintegrasikan AI, website bisa **berpikir** dan **merespons** user secara cerdas.

---

## Cara Kerjanya

```
1. User ketik pertanyaan / input di website
         ↓
2. JavaScript ambil input dari form
         ↓
3. JS kirim ke AI API (HTTP Request + API Key)
         ↓
4. Server AI (OpenAI, Anthropic, DeepSeek) proses
         ↓
5. AI kirim balik jawaban (HTTP Response JSON)
         ↓
6. JavaScript tampilkan jawaban di halaman
```

---

## Contoh Kode: Chatbot Sederhana

```html
<!-- HTML: Form input -->
<div id="chat-container">
  <div id="messages"></div>
  <input type="text" id="user-input" placeholder="Tanya sesuatu...">
  <button onclick="kirimPesan()">Kirim</button>
</div>
```

```javascript
// JavaScript: Kirim ke AI dan tampilkan jawaban
async function kirimPesan() {
  const input = document.getElementById('user-input').value;
  
  // Tampilkan pesan user
  tampilkanPesan('user', input);
  
  // Kirim ke AI API
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'API_KEY_KAMU'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      messages: [{ role: 'user', content: input }]
    })
  });
  
  const data = await response.json();
  const jawaban = data.content[0].text;
  
  // Tampilkan jawaban AI
  tampilkanPesan('ai', jawaban);
}
```

---

## Provider AI yang Populer

| Provider | Model | Keunggulan | Harga |
|----------|-------|------------|-------|
| **Anthropic** | Claude Sonnet | Kualitas tinggi, aman | $$ |
| **OpenAI** | GPT-4o | Paling populer | $$ |
| **DeepSeek** | DeepSeek V3 | Murah, cerdas | $ |
| **Google** | Gemini | Multimodal | $ |

> **Strategi PareLabs:** DeepSeek untuk volume tinggi (hemat), Claude untuk task kualitas tinggi (akurat).

---

## Contoh Fitur AI di Website

### 1. Chatbot Customer Service
```
User: "Berapa biaya program Speaking Pro?"
AI:   "Program Speaking Pro tersedia dalam 3 paket:
       - Basic: Rp 500.000/bulan
       - Premium: Rp 800.000/bulan
       ..."
```

### 2. Koreksi Grammar Otomatis
```
User menulis: "I goes to school yesterday"
AI mengkoreksi: "I went to school yesterday"
Penjelasan: "Gunakan 'went' (past tense) bukan 'goes'"
```

### 3. Generate Konten
```
Input: "Buat deskripsi program IELTS Preparation 2 paragraf"
Output: [Deskripsi menarik siap pakai]
```

### 4. AI Speaking Partner (Ayo)
```
User berbicara → Microphone → STT (Deepgram) → Teks
→ AI (DeepSeek LLM) → Respon teks
→ TTS (ElevenLabs) → Suara AI → Speaker
```

---

## Yang Perlu Dipersiapkan

1. **API Key** — daftar di website provider AI
2. **Budget** — API berbayar per token (sangat murah untuk belajar)
3. **JavaScript** — untuk memanggil API dari browser/server
4. **Error handling** — API bisa timeout atau error

---

## Mulai dari Mana?

Di kursus ini, kita akan:
- **Pertemuan 1-4:** Kuasai HTML, CSS, JavaScript
- **Pertemuan 5:** Deploy ke internet
- **Bonus:** Demo singkat integrasi dengan AI API

Untuk integrasi AI yang lebih dalam, lanjutkan ke program **Fullstack + AI** setelah kursus ini!

---

## Bacaan Lanjutan

- [Anthropic API Docs](https://docs.anthropic.com)
- [OpenAI API Docs](https://platform.openai.com/docs)
- [MDN Web Docs](https://developer.mozilla.org)

---

*PareLabs Academy · Kampung Inggris Pare · parelabs.id*
