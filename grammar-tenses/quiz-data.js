// File ini berisi kumpulan soal untuk kuis. 
// Anda dapat menambah, mengubah, atau menghapus soal di bawah ini sesuai kebutuhan.

const quizData = {
    multiple_choice: [
        { 
            q: "Manakah di bawah ini yang merupakan kalimat Nominal?", 
            options: ["She runs fast.", "He is very smart.", "They played football.", "I love apples."], 
            correct: 1 
        },
        { 
            q: "Apa fungsi utama dari Adverb (Kata Keterangan)?", 
            options: ["Menjelaskan Noun", "Menjelaskan Verb, Adjective, atau Adverb lain", "Menggantikan Noun", "Menghubungkan kalimat"], 
            correct: 1 
        },
        { 
            q: "Tenses apa yang menggunakan rumus S + will + have + V3?", 
            options: ["Future Continuous", "Future Perfect", "Past Perfect", "Simple Future"], 
            correct: 1 
        },
        { 
            q: "Kata 'beautiful' termasuk dalam kelas kata...", 
            options: ["Noun", "Verb", "Adjective", "Adverb"], 
            correct: 2 
        },
        { 
            q: "Pilih kalimat yang benar berdasarkan urutan Adjective L-A-D-A-N:", 
            options: ["The red big wooden table", "The big red wooden table", "Wooden big red the table", "The table wooden big red"], 
            correct: 1 
        }
    ],

    fill_blank: [
        { 
            q: "She ___ (membaca) a book every night.", 
            answer: "reads" 
        },
        { 
            q: "They ___ (sedang bermain) football right now.", 
            answer: "are playing" 
        },
        { 
            q: "He is a very ___ (pintar) student.", 
            answer: "smart" 
        },
        { 
            q: "I have ___ (menulis) three letters today.", 
            answer: "written" 
        },
        { 
            q: "My father bought a ___ (baru) car.", 
            answer: "new" 
        }
    ],

    error_ident: [
        { 
            q: "The boys {is} playing football {in} the {yard} {now}.", 
            options: ["is", "in", "yard", "now"], 
            correct: 0 
        },
        { 
            q: "She {has} {go} to the market {with} her {mother}.", 
            options: ["has", "go", "with", "mother"], 
            correct: 1 
        },
        { 
            q: "I {will} {bought} a new {phone} {tomorrow}.", 
            options: ["will", "bought", "phone", "tomorrow"], 
            correct: 1 
        },
        { 
            q: "They {are} very {happily} {when} they receive {the} gift.", 
            options: ["are", "happily", "when", "the"], 
            correct: 1 
        },
        { 
            q: "He {did} {not} {knew} the answer to {that} question.", 
            options: ["did", "not", "knew", "that"], 
            correct: 2 
        }
    ],

    essay: [
        { 
            q: "Jelaskan perbedaan mendasar antara kalimat Verbal dan kalimat Nominal, berikan satu contoh untuk masing-masing!", 
            ref_answer: "Kalimat Verbal adalah kalimat yang predikatnya berupa kata kerja utama (contoh: She eats an apple). Sedangkan kalimat Nominal predikatnya bukan kata kerja utama, sehingga memerlukan 'To Be' dan diikuti Noun/Adjective/Adverb (contoh: She is smart)." 
        },
        { 
            q: "Buatlah satu contoh Frasa Kata Benda (Noun Phrase) yang menggunakan urutan Adjective L-A-D-A-N secara lengkap!", 
            ref_answer: "Contoh: 'The beautiful big red Indonesian wooden table'. Keterangan: The (L), beautiful (A-Opinion), big (D-Size), red (A-Color), Indonesian (A-Origin), wooden (A-Material)." 
        },
        { 
            q: "Apa yang dimaksud dengan Present Perfect Tense? Kapan kita menggunakannya?", 
            ref_answer: "Present Perfect Tense digunakan untuk menyatakan suatu tindakan atau kejadian yang telah dimulai dan selesai di masa lalu namun efek/akibatnya masih berlanjut hingga sekarang." 
        },
        { 
            q: "Sebutkan minimal 4 macam Part of Speech dan berikan 1 contoh katanya!", 
            ref_answer: "1. Noun (buku, meja), 2. Verb (berlari, tidur), 3. Adjective (pintar, besar), 4. Adverb (dengan cepat, kemarin)." 
        },
        { 
            q: "Ubah kalimat ini menjadi bentuk Past Continuous Tense: 'I read a book'.", 
            ref_answer: "I was reading a book." 
        }
    ]
};
