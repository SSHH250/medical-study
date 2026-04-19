// Инициализация данных
let currentUser = null;

// Загрузка пользователей из localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Данные по предметам (без изменений)
const subjectsData = {
    chemistry: {
        name: 'Химия',
        topics: ['Органическая химия', 'Неорганическая химия', 'Биохимия', 'Физическая химия'],
        tests: [
            { id: 1, name: 'Основы органической химии', questions: 10, points: 100 },
            { id: 2, name: 'Химические реакции', questions: 8, points: 80 },
            { id: 3, name: 'Биохимия человека', questions: 12, points: 120 }
        ],
        games: [
            { id: 1, name: 'Химическая викторина', points: 50 },
            { id: 2, name: 'Составь формулу', points: 30 },
            { id: 3, name: 'Химический пазл', points: 40 }
        ]
    },
    anatomy: {
        name: 'Анатомия',
        topics: ['Скелет человека', 'Мышечная система', 'Сердечно-сосудистая система', 'Нервная система'],
        tests: [
            { id: 1, name: 'Кости и суставы', questions: 10, points: 100 },
            { id: 2, name: 'Мышцы тела', questions: 8, points: 80 },
            { id: 3, name: 'Органы и системы', questions: 15, points: 150 }
        ],
        games: [
            { id: 1, name: 'Анатомический конструктор', points: 60 },
            { id: 2, name: 'Найди орган', points: 40 },
            { id: 3, name: 'Системы организма', points: 50 }
        ]
    },
    biology: {
        name: 'Биология',
        topics: ['Клеточная биология', 'Генетика', 'Эволюция', 'Экология'],
        tests: [
            { id: 1, name: 'Строение клетки', questions: 10, points: 100 },
            { id: 2, name: 'Основы генетики', questions: 8, points: 80 },
            { id: 3, name: 'Экосистемы', questions: 10, points: 100 }
        ],
        games: [
            { id: 1, name: 'Клеточная память', points: 45 },
            { id: 2, name: 'Генетическая лотерея', points: 55 },
            { id: 3, name: 'Эко-баланс', points: 35 }
        ]
    },
    histology: {
        name: 'Гистология',
        topics: ['Эпителиальные ткани', 'Соединительные ткани', 'Мышечные ткани', 'Нервные ткани'],
        tests: [
            { id: 1, name: 'Типы тканей', questions: 10, points: 100 },
            { id: 2, name: 'Микроскопия', questions: 8, points: 80 },
            { id: 3, name: 'Органы и ткани', questions: 12, points: 120 }
        ],
        games: [
            { id: 1, name: 'Тканевой детектив', points: 50 },
            { id: 2, name: 'Микро-головоломка', points: 40 },
            { id: 3, name: 'Гистологический квиз', points: 60 }
        ]
    }
};

// Инициализация рейтингов
let ratings = JSON.parse(localStorage.getItem('ratings')) || {
    chemistry: [],
    anatomy: [],
    biology: [],
    histology: []
};

// ========== ФУНКЦИИ АВТОРИЗАЦИИ ==========

function switchTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(t => t.classList.remove('active'));
    if (tab === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        document.querySelector('.tab-btn:first-child').classList.add('active');
    } else {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
        document.querySelector('.tab-btn:last-child').classList.add('active');
    }
}

// РЕГИСТРАЦИЯ
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('regFullname').value.trim();
        const username = document.getElementById('regUsername').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        
        // Валидация
        if (!fullname  !username  !email || !password) {
            document.getElementById('regError').textContent = 'Заполните все поля';
            return;
        }
        
        if (password !== confirmPassword) {
            document.getElementById('regError').textContent = 'Пароли не совпадают';
            return;
        }
        
        if (password.length < 4) {
            document.getElementById('regError').textContent = 'Пароль должен быть не менее 4 символов';
            return;
        }
        
        // Проверка существующего пользователя
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(u => u.username === username)) {
            document.getElementById('regError').textContent = 'Пользователь с таким именем уже существует';
            return;
        }
        
        if (users.find(u => u.email === email)) {
            document.getElementById('regError').textContent = 'Пользователь с таким email уже существует';
            return;
        }
        
        // Создание нового пользователя
        const newUser = {
            id: Date.now(),
            fullname: fullname,
            username: username,
            email: email,
            password: password,
            totalPoints: 0,
            completedTests: 0,
            subjectPoints: {
                chemistry: 0,
                anatomy: 0,
                biology: 0,
                histology: 0
            }
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        alert('✅ Регистрация успешна! Теперь войдите в систему.');
        registerForm.reset();
        switchTab('login');
    });
}

// ВХОД
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;
        
        if (!username || !password) {
            document.getElementById('loginError').textContent = 'Введите имя пользователя и пароль';
            return;
        }
        
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            window.location.href = 'main.html';
        } else {
            document.getElementById('loginError').textContent = 'Неверное имя пользователя или пароль';
        }
    });
}

// ========== ФУНКЦИИ ГЛАВНОЙ СТРАНИЦЫ ==========

if (window.location.pathname.includes('main.html')) {
    loadMainPage();
}

function loadMainPage() {
    const savedUser = localStorage.getItem('currentUser');
    if (!savedUser) {
        window.location.href = 'index.html';
        return;
    }
    
    currentUser = JSON.parse(savedUser);
    
    // Обновляем данные пользователя из актуального списка
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUser = users.find(u => u.id === currentUser.id);
    if (updatedUser) {
        currentUser = updatedUser;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    
    document.getElementById('profileName').textContent = currentUser.fullname;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('totalPoints').textContent = currentUser.totalPoints;
    document.getElementById('completedTests').textContent = currentUser.completedTests;
    document.getElementById('userNameDisplay').innerHTML = 👤 ${currentUser.fullname};
    
    // Проверка на показ подсказки
    if (!localStorage.getItem('onboardingShown')) {
        setTimeout(() => {
            const overlay = document.getElementById('onboardingOverlay');
            if (overlay) overlay.style.display = 'flex';
        }, 500);
    }
}

let currentStep = 1;

function nextOnboardingStep() {
    currentStep++;
    if (currentStep > 3) {
        skipOnboarding();
        return;
    }
    
    for (let i = 1; i <= 3; i++) {
        const step = document.getElementById(step${i});
        if (step) step.style.display = 'none';
    }
    const nextStep = document.getElementById(step${currentStep});
    if (nextStep) nextStep.style.display = 'block';
}

function skipOnboarding() {
    const overlay = document.getElementById('onboardingOverlay');
    if (overlay) overlay.style.display = 'none';
    localStorage.setItem('onboardingShown', 'true');
}

function goToSubject(subject) {
    window.location.href = ${subject}.html;
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// ========== ФУНКЦИИ СТРАНИЦ ПРЕДМЕТОВ ==========

if (window.location.pathname.includes('chemistry.html') ||
    window.location.pathname.includes('anatomy.html') ||
    window.location.pathname.includes('biology.html') ||
    window.location.pathname.includes('histology.html')) {
    loadSubjectPage();
}

function getCurrentSubject() {
    if (window.location.pathname.includes('chemistry')) return 'chemistry';
    if (window.location.pathname.includes('anatomy')) return 'anatomy';
    if (window.location.pathname.includes('biology')) return 'biology';
    return 'histology';
}

function loadSubjectPage() {
    const savedUser = localStorage.getItem('currentUser');
    if (!savedUser) {
        window.location.href = 'index.html';
        return;
    }
    
    currentUser = JSON.parse(savedUser);
    const subject = getCurrentSubject();
    const data = subjectsData[subject];
    
    document.getElementById('userNameDisplay').innerHTML = 👤 ${currentUser.fullname};
    document.getElementById('subjectPoints').textContent = currentUser.subjectPoints[subject] || 0;
    
    // Загрузка тем
    const topicsList = document.getElementById('topicsList');
    if (topicsList) {
        topicsList.innerHTML = '';
        data.topics.forEach(topic => {
            topicsList.innerHTML += 
                <div class="topic-item">
                    <span>📖 ${topic}</span>
                    <span class="topic-status" style="color: #48bb78;">✅ Доступно</span>
                </div>
            ;
        });
    }
    
    // Загрузка тестов
    const testsList = document.getElementById('testsList');
    if (testsList) {
        testsList.innerHTML = '';
        data.tests.forEach(test => {
            testsList.innerHTML += 
                <div class="test-item">
                    <div>
                        <strong>${test.name}</strong>
                        <div style="font-size: 14px; color: #666;">${test.questions} вопросов | +${test.points} очков</div>
                    </div>
                    <button class="start-test-btn" onclick="startTest('${subject}', ${test.id})">Начать тест →</button>
                </div>
            ;
        });
    }
    
    // Загрузка игр
    const gamesList = document.getElementById('gamesList');
    if (gamesList) {
        gamesList.innerHTML = '';
        data.games.forEach(game => {
            gamesList.innerHTML += `
                <div class="game-item">
                <div>
                        <strong>🎮 ${game.name}</strong>
                        <div style="font-size: 14px; color: #666;">+${game.points} очков</div>
                    </div>
                    <button class="play-game-btn" onclick="startGame('${subject}', ${game.id})">Играть →</button>
                </div>
            ;
        });
    }
    
    // Загрузка таблицы лидеров
    loadLeaderboard(subject);
}

function startTest(subject, testId) {
    const test = subjectsData[subject].tests.find(t => t.id === testId);
    const modal = document.getElementById('testModal');
    const content = document.getElementById('testContent');
    
    if (!modal || !content) return;
    
    content.innerHTML = 
        <h2>📝 ${test.name}</h2>
        <p>📊 Количество вопросов: ${test.questions}</p>
        <p>🏆 Награда: ${test.points} очков</p>
        <p style="margin: 20px 0;">⭐ Это демо-тест. В полной версии здесь будут реальные вопросы!</p>
        <button onclick="completeTest('${subject}', ${test.points})" style="padding: 12px 24px; background: #48bb78; color: white; border: none; border-radius: 8px; cursor: pointer;">✅ Завершить тест и получить очки</button>
    ;
    
    modal.style.display = 'block';
}

function completeTest(subject, points) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUserData = JSON.parse(localStorage.getItem('currentUser'));
    
    const userIndex = users.findIndex(u => u.id === currentUserData.id);
    if (userIndex !== -1) {
        users[userIndex].subjectPoints[subject] += points;
        users[userIndex].totalPoints += points;
        users[userIndex].completedTests += 1;
        
        // Обновляем рейтинг
        let ratings = JSON.parse(localStorage.getItem('ratings')) || {
            chemistry: [], anatomy: [], biology: [], histology: []
        };
        
        const existingRating = ratings[subject].find(r => r.userId === users[userIndex].id);
        if (existingRating) {
            existingRating.points = users[userIndex].subjectPoints[subject];
            existingRating.username = users[userIndex].fullname;
        } else {
            ratings[subject].push({
                userId: users[userIndex].id,
                username: users[userIndex].fullname,
                points: users[userIndex].subjectPoints[subject]
            });
        }
        
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('ratings', JSON.stringify(ratings));
        localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
        
        alert(🎉 Поздравляем! Вы получили ${points} очков по предмету ${getSubjectName(subject)}!);
        closeTestModal();
        location.reload();
    }
}

function startGame(subject, gameId) {
    const game = subjectsData[subject].games.find(g => g.id === gameId);
    const modal = document.getElementById('gameModal');
    const content = document.getElementById('gameContent');
    
    if (!modal || !content) return;
    
    content.innerHTML = 
        <h2>🎮 ${game.name}</h2>
        <p>🏆 Выигрыш: ${game.points} очков</p>
        <p style="margin: 20px 0;">🎲 Это демо-игра. В полной версии здесь будет настоящий игровой процесс!</p>
        <button onclick="completeGame('${subject}', ${game.points})" style="padding: 12px 24px; background: #48bb78; color: white; border: none; border-radius: 8px; cursor: pointer;">🎯 Завершить игру и получить очки</button>
    `;
    
    modal.style.display = 'block';
}

function completeGame(subject, points) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUserData = JSON.parse(localStorage.getItem('currentUser'));
    
    const userIndex = users.findIndex(u => u.id === currentUserData.id);
    if (userIndex !== -1) {
        users[userIndex].subjectPoints[subject] += points;
        users[userIndex].totalPoints += points;
        
        let ratings = JSON.parse(localStorage.getItem('ratings')) || {
            chemistry: [], anatomy: [], biology: [], histology: []
        };
        
        const existingRating = ratings[subject].find(r => r.userId === users[userIndex].id);
        if (existingRating) {
            existingRating.points = users[userIndex].subjectPoints[subject];
            existingRating.username = users[userIndex].fullname;
        } else {
            ratings[subject].push({
                userId: users[userIndex].id,
                username: users[userIndex].fullname,
                points: users[userIndex].subjectPoints[subject]
            });
        }
        
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('ratings', JSON.stringify(ratings));
        localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
        
        alert(🎉 Поздравляем! Вы получили ${points} очков в игре!);
        closeGameModal();
        location.reload();
    }
}

function getSubjectName(subject) {
    const names = {
        chemistry: 'Химии',
        anatomy: 'Анатомии',
        biology: 'Биологии',
        histology: 'Гистологии'
    };
    return names[subject];
}

function loadLeaderboard(subject) {
    const leaderboard = document.getElementById('leaderboard');
    if (!leaderboard) return;
    
    let ratings = JSON.parse(localStorage.getItem('ratings')) || {
        chemistry: [], anatomy: [], biology: [], histology: []
    };
    
    const sortedRatings = [...ratings[subject]].sort((a, b) => b.points - a.points);
    
    if (sortedRatings.length === 0) {
        leaderboard.innerHTML = '<div class="leaderboard-row">🏆 Пока нет участников. Будьте первым!</div>';
        return;
    }
    
    let html = 
        <div class="leaderboard-row leaderboard-header">
            <div>#</div>
            <div>👤 Игрок</div>
            <div>⭐ Очки</div>
        </div>
    ;
    
    sortedRatings.forEach((rating, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : ${index + 1};
        html += 
            <div class="leaderboard-row">
                <div>${medal}</div>
                <div>${rating.username}</div>
                <div>⭐ ${rating.points}</div>
            </div>
        ;
    });
    
    leaderboard.innerHTML = html;
}

function closeTestModal() {
    const modal = document.getElementById('testModal');
    if (modal) modal.style.display = 'none';
}

function closeGameModal() {
    const modal = document.getElementById('gameModal');
    if (modal) modal.style.display = 'none';
}

// Закрытие модальных окон по клику вне области
window.onclick = function(event) {
    const testModal = document.getElementById('testModal');
    const gameModal = document.getElementById('gameModal');
    if (event.target === testModal) closeTestModal();
    if (event.target === gameModal) closeGameModal();
}
