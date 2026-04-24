// ==========================================
// 1. DATA TENSES (From Original)
// ==========================================
const tensesData = [
    // PRESENT TENSES
    {
        id: 1, name: "Simple Present Tense", category: "present",
        function: "Menyatakan fakta, kebiasaan, atau kejadian yang terjadi pada saat ini.",
        formula: { pos: "S + V1 (s/es) + O", neg: "S + do/does + not + V1 + O", int: "Do/does + S + V1 + O?" },
        example: { pos: "She reads a book every day.", neg: "She does not read a book every day.", int: "Does she read a book every day?" }
    },
    {
        id: 2, name: "Present Continuous Tense", category: "present",
        function: "Menyatakan kejadian yang sedang berlangsung saat ini atau rencana di masa depan.",
        formula: { pos: "S + am/is/are + V-ing + O", neg: "S + am/is/are + not + V-ing + O", int: "Am/is/are + S + V-ing + O?" },
        example: { pos: "They are playing football now.", neg: "They are not playing football now.", int: "Are they playing football now?" }
    },
    {
        id: 3, name: "Present Perfect Tense", category: "present",
        function: "Menyatakan kejadian yang sudah selesai di masa lalu tetapi akibatnya masih terasa sampai sekarang.",
        formula: { pos: "S + have/has + V3 + O", neg: "S + have/has + not + V3 + O", int: "Have/has + S + V3 + O?" },
        example: { pos: "I have finished my homework.", neg: "I have not finished my homework.", int: "Have you finished your homework?" }
    },
    {
        id: 4, name: "Present Perfect Continuous Tense", category: "present",
        function: "Menyatakan kejadian yang dimulai di masa lalu dan masih berlangsung sampai sekarang.",
        formula: { pos: "S + have/has + been + V-ing + O", neg: "S + have/has + not + been + V-ing + O", int: "Have/has + S + been + V-ing + O?" },
        example: { pos: "He has been working here for 2 years.", neg: "He has not been working here for 2 years.", int: "Has he been working here for 2 years?" }
    },
    
    // PAST TENSES
    {
        id: 5, name: "Simple Past Tense", category: "past",
        function: "Menyatakan kejadian yang terjadi dan selesai di masa lalu.",
        formula: { pos: "S + V2 + O", neg: "S + did + not + V1 + O", int: "Did + S + V1 + O?" },
        example: { pos: "We went to Bali last year.", neg: "We did not go to Bali last year.", int: "Did you go to Bali last year?" }
    },
    {
        id: 6, name: "Past Continuous Tense", category: "past",
        function: "Menyatakan kejadian yang sedang berlangsung pada titik waktu tertentu di masa lalu.",
        formula: { pos: "S + was/were + V-ing + O", neg: "S + was/were + not + V-ing + O", int: "Was/were + S + V-ing + O?" },
        example: { pos: "I was sleeping when you called.", neg: "I was not sleeping when you called.", int: "Were you sleeping when I called?" }
    },
    {
        id: 7, name: "Past Perfect Tense", category: "past",
        function: "Menyatakan suatu kejadian yang sudah selesai sebelum kejadian lain terjadi di masa lalu.",
        formula: { pos: "S + had + V3 + O", neg: "S + had + not + V3 + O", int: "Had + S + V3 + O?" },
        example: { pos: "They had left before I arrived.", neg: "They had not left before I arrived.", int: "Had they left before you arrived?" }
    },
    {
        id: 8, name: "Past Perfect Continuous Tense", category: "past",
        function: "Menyatakan kejadian yang sudah berlangsung selama beberapa waktu di masa lalu sebelum kejadian lain terjadi.",
        formula: { pos: "S + had + been + V-ing + O", neg: "S + had + not + been + V-ing + O", int: "Had + S + been + V-ing + O?" },
        example: { pos: "She had been waiting for an hour when the bus arrived.", neg: "She had not been waiting for an hour when the bus arrived.", int: "Had she been waiting for an hour?" }
    },

    // FUTURE TENSES
    {
        id: 9, name: "Simple Future Tense", category: "future",
        function: "Menyatakan kejadian yang akan terjadi di masa depan.",
        formula: { pos: "S + will/shall + V1 + O", neg: "S + will/shall + not + V1 + O", int: "Will/shall + S + V1 + O?" },
        example: { pos: "I will call you tomorrow.", neg: "I will not call you tomorrow.", int: "Will you call me tomorrow?" }
    },
    {
        id: 10, name: "Future Continuous Tense", category: "future",
        function: "Menyatakan kejadian yang akan sedang berlangsung pada waktu tertentu di masa depan.",
        formula: { pos: "S + will + be + V-ing + O", neg: "S + will + not + be + V-ing + O", int: "Will + S + be + V-ing + O?" },
        example: { pos: "He will be studying at 8 PM tonight.", neg: "He will not be studying at 8 PM tonight.", int: "Will he be studying at 8 PM tonight?" }
    },
    {
        id: 11, name: "Future Perfect Tense", category: "future",
        function: "Menyatakan kejadian yang akan sudah selesai pada waktu tertentu di masa depan.",
        formula: { pos: "S + will + have + V3 + O", neg: "S + will + not + have + V3 + O", int: "Will + S + have + V3 + O?" },
        example: { pos: "We will have finished the project by next week.", neg: "We will not have finished the project by next week.", int: "Will you have finished the project by next week?" }
    },
    {
        id: 12, name: "Future Perfect Continuous Tense", category: "future",
        function: "Menyatakan kejadian yang akan sudah berlangsung selama waktu tertentu di masa depan.",
        formula: { pos: "S + will + have + been + V-ing + O", neg: "S + will + not + have + been + V-ing + O", int: "Will + S + have + been + V-ing + O?" },
        example: { pos: "By next year, I will have been working here for 5 years.", neg: "By next year, I will not have been working here for 5 years.", int: "Will you have been working here for 5 years?" }
    },

    // PAST FUTURE TENSES
    {
        id: 13, name: "Simple Past Future Tense", category: "past-future",
        function: "Menyatakan kejadian yang akan dilakukan di masa lalu (biasanya digunakan dalam pengandaian tipe 2).",
        formula: { pos: "S + would/should + V1 + O", neg: "S + would/should + not + V1 + O", int: "Would/should + S + V1 + O?" },
        example: { pos: "I would buy a car if I had money.", neg: "I would not buy a car if I didn't have money.", int: "Would you buy a car if you had money?" }
    },
    {
        id: 14, name: "Past Future Continuous Tense", category: "past-future",
        function: "Menyatakan kejadian yang akan sedang dilakukan di masa lalu jika syaratnya terpenuhi.",
        formula: { pos: "S + would/should + be + V-ing + O", neg: "S + would/should + not + be + V-ing + O", int: "Would/should + S + be + V-ing + O?" },
        example: { pos: "I would be sleeping if you didn't wake me up.", neg: "I would not be sleeping if you didn't wake me up.", int: "Would you be sleeping if I didn't wake you up?" }
    },
    {
        id: 15, name: "Past Future Perfect Tense", category: "past-future",
        function: "Menyatakan kejadian yang akan sudah selesai dilakukan di masa lalu jika syaratnya terpenuhi (pengandaian tipe 3).",
        formula: { pos: "S + would/should + have + V3 + O", neg: "S + would/should + not + have + V3 + O", int: "Would/should + S + have + V3 + O?" },
        example: { pos: "She would have passed the exam if she had studied.", neg: "She would not have passed the exam if she had not studied.", int: "Would she have passed the exam if she had studied?" }
    },
    {
        id: 16, name: "Past Future Perfect Continuous Tense", category: "past-future",
        function: "Menyatakan kejadian yang akan sudah sedang berlangsung di masa lalu.",
        formula: { pos: "S + would/should + have + been + V-ing + O", neg: "S + would/should + not + have + been + V-ing + O", int: "Would/should + S + have + been + V-ing + O?" },
        example: { pos: "They would have been waiting for 2 hours if the train had been late.", neg: "They would not have been waiting for 2 hours if the train had been on time.", int: "Would they have been waiting for 2 hours if the train had been late?" }
    }
];

// ==========================================
// 2. SPA NAVIGATION LOGIC
// ==========================================
const navLinks = document.querySelectorAll('.nav-links a, .nav-btn');
const pageSections = document.querySelectorAll('.page-section');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const mobileClose = document.getElementById('mobile-close');

function navigateTo(targetId) {
    // Hide all sections
    pageSections.forEach(sec => sec.classList.remove('active'));
    
    // Show target section
    const targetSection = document.getElementById(targetId);
    if(targetSection) {
        targetSection.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    // Update active state on sidebar links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('data-target') === targetId) {
            link.classList.add('active');
        }
    });

    // Close sidebar on mobile after clicking
    if(window.innerWidth <= 768) {
        sidebar.classList.remove('open');
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        navigateTo(target);
    });
});

// Mobile sidebar toggle
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('open');
});

mobileClose.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

// ==========================================
// 3. TENSES RENDERING LOGIC
// ==========================================
const tensesContainer = document.getElementById('tenses-container');
const tensesFilterBtns = document.querySelectorAll('#tenses .filter-btn');

const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

function renderTensesCards(filter = 'all') {
    tensesContainer.innerHTML = '';
    const filteredData = filter === 'all' ? tensesData : tensesData.filter(t => t.category === filter);

    filteredData.forEach(tense => {
        const card = document.createElement('div');
        card.className = 'tense-card';
        card.setAttribute('data-category', tense.category);
        
        let badgeColor, badgeText;
        switch(tense.category) {
            case 'present': badgeColor = 'background: #D1FAE5; color: #10B981;'; badgeText = 'Present'; break;
            case 'past': badgeColor = 'background: #FEF3C7; color: #F59E0B;'; badgeText = 'Past'; break;
            case 'future': badgeColor = 'background: #DBEAFE; color: #3B82F6;'; badgeText = 'Future'; break;
            case 'past-future': badgeColor = 'background: #EDE9FE; color: #8B5CF6;'; badgeText = 'Past Future'; break;
        }

        card.innerHTML = `
            <div class="card-category" style="${badgeColor} display:inline-block; padding:3px 10px; border-radius:12px; font-size:0.75rem; margin-bottom:10px;">
                ${badgeText}
            </div>
            <h3 class="card-title">${tense.name}</h3>
            <p class="card-preview">${tense.function}</p>
            <div class="read-more">Lihat Rumus & Contoh <i class="fa-solid fa-arrow-right"></i></div>
        `;
        card.addEventListener('click', () => openModal(tense));
        tensesContainer.appendChild(card);
    });
}

function openModal(tense) {
    document.getElementById('modal-title').textContent = tense.name;
    document.getElementById('modal-function').textContent = tense.function;
    
    let badgeColor, badgeText;
    switch(tense.category) {
        case 'present': badgeColor = 'background: #D1FAE5; color: #10B981;'; badgeText = 'Present'; break;
        case 'past': badgeColor = 'background: #FEF3C7; color: #F59E0B;'; badgeText = 'Past'; break;
        case 'future': badgeColor = 'background: #DBEAFE; color: #3B82F6;'; badgeText = 'Future'; break;
        case 'past-future': badgeColor = 'background: #EDE9FE; color: #8B5CF6;'; badgeText = 'Past Future'; break;
    }
    const modalCat = document.getElementById('modal-category');
    modalCat.style.cssText = badgeColor;
    modalCat.textContent = badgeText;

    document.getElementById('modal-formula-pos').textContent = tense.formula.pos;
    document.getElementById('modal-formula-neg').textContent = tense.formula.neg;
    document.getElementById('modal-formula-int').textContent = tense.formula.int;

    document.getElementById('modal-ex-pos').textContent = tense.example.pos;
    document.getElementById('modal-ex-neg').textContent = tense.example.neg;
    document.getElementById('modal-ex-int').textContent = tense.example.int;

    let mainColor;
    switch(tense.category) {
        case 'present': mainColor = '#10B981'; break;
        case 'past': mainColor = '#F59E0B'; break;
        case 'future': mainColor = '#3B82F6'; break;
        case 'past-future': mainColor = '#8B5CF6'; break;
    }
    
    document.querySelectorAll('.formula-box, .example-box').forEach(box => {
        box.style.borderLeftColor = mainColor;
    });
    
    document.querySelectorAll('.info-group h3, .formula-box strong, .example-box strong').forEach(el => {
        el.style.color = mainColor;
    });

    modal.classList.add('active');
}

closeModal.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('active'); });

tensesFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tensesFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderTensesCards(btn.getAttribute('data-filter'));
    });
});

// ==========================================
// 4. QUIZ LOGIC
// ==========================================
let currentQuizFormat = '';
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

const quizControls = document.querySelector('.quiz-controls');
const quizArea = document.getElementById('quiz-area');
const quizResult = document.getElementById('quiz-result');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizFormatSelect = document.getElementById('quiz-format'); 

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQNum = document.getElementById('current-q-num');
const totalQNum = document.getElementById('total-q-num');
const submitAnswerBtn = document.getElementById('submit-answer-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');

startQuizBtn.addEventListener('click', () => {
    currentQuizFormat = quizFormatSelect.value;
    
    // Check if quizData is available (from quiz-data.js)
    if (typeof quizData === 'undefined' || !quizData[currentQuizFormat]) {
        alert("Data soal belum tersedia. Pastikan quiz-data.js sudah dimuat.");
        return;
    }

    currentQuizQuestions = [...quizData[currentQuizFormat]];
    // Shuffle
    currentQuizQuestions.sort(() => Math.random() - 0.5);
    
    if(currentQuizQuestions.length === 0) {
        alert("Belum ada soal untuk format ini.");
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    
    quizControls.classList.add('hidden');
    quizResult.classList.add('hidden');
    quizArea.classList.remove('hidden');
    
    loadQuestion();
});

function loadQuestion() {
    selectedOption = null;
    submitAnswerBtn.disabled = true;
    submitAnswerBtn.classList.remove('hidden');
    nextQuestionBtn.classList.add('hidden');
    
    if (currentQuizFormat === 'essay') {
        submitAnswerBtn.textContent = 'Lihat Jawaban Benar';
        submitAnswerBtn.disabled = false;
    } else {
        submitAnswerBtn.textContent = 'Jawab';
    }
    
    const currentQ = currentQuizQuestions[currentQuestionIndex];
    currentQNum.textContent = currentQuestionIndex + 1;
    totalQNum.textContent = currentQuizQuestions.length;
    
    questionText.innerHTML = '';
    optionsContainer.innerHTML = '';

    if (currentQuizFormat === 'multiple_choice') {
        questionText.textContent = currentQ.q;
        currentQ.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => {
                if (submitAnswerBtn.classList.contains('hidden')) return;
                document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedOption = index;
                submitAnswerBtn.disabled = false;
            };
            optionsContainer.appendChild(btn);
        });
    } else if (currentQuizFormat === 'fill_blank') {
        questionText.textContent = currentQ.q;
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'quiz-input';
        input.placeholder = 'Ketik jawaban Anda di sini...';
        input.oninput = () => {
            submitAnswerBtn.disabled = input.value.trim() === '';
        };
        optionsContainer.appendChild(input);
    } else if (currentQuizFormat === 'error_ident') {
        let textParts = currentQ.q.split(/(\{[^}]+\})/g);
        let qContainer = document.createElement('div');
        qContainer.style.fontSize = '1.2rem';
        qContainer.style.lineHeight = '2';
        
        let optIndex = 0;
        textParts.forEach(part => {
            if (part.startsWith('{') && part.endsWith('}')) {
                let word = part.slice(1, -1);
                let span = document.createElement('span');
                span.className = 'error-word';
                span.textContent = word;
                let currentIndex = optIndex;
                span.onclick = () => {
                    if (submitAnswerBtn.classList.contains('hidden')) return;
                    document.querySelectorAll('.error-word').forEach(s => s.classList.remove('selected'));
                    span.classList.add('selected');
                    selectedOption = currentIndex;
                    submitAnswerBtn.disabled = false;
                };
                qContainer.appendChild(span);
                optIndex++;
            } else {
                qContainer.appendChild(document.createTextNode(part));
            }
        });
        questionText.appendChild(qContainer);
    } else if (currentQuizFormat === 'essay') {
        questionText.textContent = currentQ.q;
        const textarea = document.createElement('textarea');
        textarea.className = 'quiz-input';
        textarea.rows = 4;
        textarea.placeholder = 'Ketik uraian Anda di sini...';
        optionsContainer.appendChild(textarea);
    }
}

submitAnswerBtn.addEventListener('click', () => {
    const currentQ = currentQuizQuestions[currentQuestionIndex];
    submitAnswerBtn.classList.add('hidden');
    nextQuestionBtn.classList.remove('hidden');

    if (currentQuizFormat === 'multiple_choice') {
        const optionsBtns = document.querySelectorAll('.option-btn');
        if (selectedOption === currentQ.correct) {
            optionsBtns[selectedOption].classList.add('correct');
            score++;
        } else {
            optionsBtns[selectedOption].classList.add('wrong');
            optionsBtns[currentQ.correct].classList.add('correct');
        }
    } else if (currentQuizFormat === 'fill_blank') {
        const input = document.querySelector('.quiz-input');
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = currentQ.answer.toLowerCase();
        
        if (userAnswer === correctAnswer) {
            input.style.borderColor = 'var(--secondary)';
            input.style.backgroundColor = '#d1fae5';
            score++;
        } else {
            input.style.borderColor = '#ef4444';
            input.style.backgroundColor = '#fee2e2';
            
            const ref = document.createElement('div');
            ref.className = 'ref-answer-box';
            ref.innerHTML = `<h4>Jawaban Benar:</h4><p>${currentQ.answer}</p>`;
            optionsContainer.appendChild(ref);
        }
        input.disabled = true;
    } else if (currentQuizFormat === 'error_ident') {
        const errorWords = document.querySelectorAll('.error-word');
        if (selectedOption === currentQ.correct) {
            errorWords[selectedOption].classList.add('correct');
            score++;
        } else {
            errorWords[selectedOption].classList.add('wrong');
            errorWords[currentQ.correct].classList.add('correct');
        }
    } else if (currentQuizFormat === 'essay') {
        const ref = document.createElement('div');
        ref.className = 'ref-answer-box';
        ref.innerHTML = `<h4>Referensi Jawaban Benar:</h4><p>${currentQ.ref_answer}</p>`;
        optionsContainer.appendChild(ref);
    }
    
    if (currentQuestionIndex === currentQuizQuestions.length - 1) {
        nextQuestionBtn.textContent = 'Lihat Hasil';
    } else {
        nextQuestionBtn.textContent = 'Selanjutnya';
    }
});

nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizArea.classList.add('hidden');
    quizResult.classList.remove('hidden');
    
    const percentage = Math.round((score / currentQuizQuestions.length) * 100);
    
    if (currentQuizFormat === 'essay') {
        document.getElementById('final-score').textContent = "- ";
        document.getElementById('score-message').textContent = 'Latihan Uraian selesai! Evaluasi jawaban Anda secara mandiri.';
    } else {
        document.getElementById('final-score').textContent = percentage;
        let message = '';
        if (percentage === 100) message = 'Sempurna! Anda sangat menguasai materi ini.';
        else if (percentage >= 70) message = 'Kerja Bagus! Terus tingkatkan.';
        else message = 'Jangan menyerah! Silakan pelajari materinya lagi.';
        document.getElementById('score-message').textContent = message;
    }
}

document.getElementById('restart-quiz-btn').addEventListener('click', () => {
    quizResult.classList.add('hidden');
    quizControls.classList.remove('hidden');
});

// Initialize first view
renderTensesCards();
