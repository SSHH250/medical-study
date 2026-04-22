// content.js - с поддержкой новых типов вопросов
window.MEDICAL_CONTENT = {
    chemistry: {
        name: "Химия",
        icon: "🧪",
        color: "#10B981",
        topics: [
            { 
                id: "chem_1", 
                title: "Органическая химия", 
                description: "Углеводороды, спирты, альдегиды", 
                difficulty: "medium", 
                isAvailable: true,
                content: [
                    { type: "text", value: "<strong>Органическая химия</strong> — это раздел химии, изучающий соединения углерода." }
                ]
            },
            { 
                id: "chem_2", 
                title: "Неорганическая химия", 
                description: "Кислоты, основания, соли", 
                difficulty: "easy", 
                isAvailable: true,
                content: [
                    { type: "text", value: "<strong>Неорганическая химия</strong> изучает элементы и их соединения, кроме органических." }
                ]
            },
            { 
                id: "chem_3", 
                title: "Фенолы", 
                description: "Ароматические спирты", 
                difficulty: "hard", 
                isAvailable: true,
                content: [
                    { type: "text", value: "<strong>Фенолы</strong> — органические соединения, содержащие гидроксильную группу, связанную с бензольным кольцом." }
                ]
            }
        ],
        tests: [
            { 
                id: "test_chem_1", 
                name: "Основы органической химии", 
                points: 100,
                numberOfQuestions: 3,
                questionBanks: [
                    {
                        topic: "Алканы",
                        questions: [
                            { type: "choice", text: "Какая формула у метана?", options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"], correct: 0, explanation: "Метан — CH₄" },
                            { type: "choice", text: "Какая формула у этана?", options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"], correct: 1, explanation: "Этан — C₂H₆" },
                            { type: "choice", text: "Какая формула у пропана?", options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"], correct: 2, explanation: "Пропан — C₃H₈" }
                        ]
                    },
                    {
                        topic: "Индикаторы",
                        questions: [
                            { type: "choice", text: "Какой цвет у лакмуса в кислой среде?", options: ["Красный", "Синий", "Фиолетовый", "Зелёный"], correct: 0, explanation: "Лакмус в кислой среде красный" },
                            { type: "choice", text: "Какой цвет у лакмуса в щелочной среде?", options: ["Красный", "Синий", "Фиолетовый", "Зелёный"], correct: 1, explanation: "Лакмус в щелочной среде синий" }
                        ]
                    }
                ]
            },
            { 
                id: "test_chem_2", 
                name: "Химические реакции", 
                points: 80,
                numberOfQuestions: 3,
                questionBanks: [
                    {
                        topic: "Типы реакций",
                        questions: [
                            { type: "choice", text: "Какой тип реакции: 2H₂ + O₂ → 2H₂O?", options: ["Соединение", "Разложение", "Замещение", "Обмен"], correct: 0, explanation: "Из простых веществ образуется сложное — реакция соединения" },
                            { type: "choice", text: "Что такое эндотермическая реакция?", options: ["С поглощением тепла", "С выделением тепла", "Без изменения тепла", "Взрывная"], correct: 0, explanation: "Эндотермическая реакция идёт с поглощением тепла" },
                            { type: "text-input", text: "Как называется реакция между кислотой и основанием?", correct: "нейтрализация", caseSensitive: false, explanation: "Кислота + основание = соль + вода" }
                            ]
                    }
                ]
            },
            { 
                id: "test_chem_3", 
                name: "Фенолы и ароматические соединения", 
                points: 120,
                numberOfQuestions: 1,
                questionBanks: [
                    {
                        topic: " ",
                        questions: [
                            { 
                                type: "image-text-input", 
                                text: "Какой паразит на фото?", 
                                image: "images/lambliaIntestinalis.jpg",
                                correct: "lamblia intestinalis",
                                caseSensitive: false,
                                explanation: " "
                            }
                          
                        ]
                           





                        
                    }
                ]
            }
        ],
        games: []
    },
    
    // ========== АНАТОМИЯ ==========
    anatomy: {
        name: "Анатомия",
        icon: "❤️",
        color: "#EF4444",
        topics: [
            { 
                id: "anat_1", 
                title: "Скелет человека", 
                description: "Кости, суставы, соединения", 
                difficulty: "easy", 
                isAvailable: true,
                content: [
                    { type: "text", value: "<strong>Скелет человека</strong> состоит из 206 костей и выполняет опорную, защитную и двигательную функции." }
                ]
            },
            { 
                id: "anat_2", 
                title: "Мышечная система", 
                description: "Мышцы, сухожилия", 
                difficulty: "medium", 
                isAvailable: true,
                content: [
                    { type: "text", value: "<strong>Мышечная система</strong> отвечает за движение тела. В теле человека около 640 мышц." }
                ]
            }
        ],
        tests: [
            { 
                id: "test_anat_1", 
                name: "Кости и суставы", 
                points: 100,
                numberOfQuestions: 3,
                questionBanks: [
                    {
                        topic: "Скелет",
                        questions: [
                            { type: "choice", text: "Сколько костей в теле взрослого человека?", options: ["200", "206", "210", "215"], correct: 1, explanation: "Взрослый человек имеет 206 костей." },
                            { type: "choice", text: "Какая самая длинная кость в теле человека?", options: ["Бедренная", "Большеберцовая", "Плечевая", "Локтевая"], correct: 0, explanation: "Бедренная кость — самая длинная." },
                            { type: "text-input", text: "Как называется подвижное соединение костей?", correct: "сустав", caseSensitive: false, explanation: "Сустав — это подвижное соединение костей." }
                        ]
                    }
                ]
            }
            ],
        games: []
    },
    
    biology: {
        name: "Биология",
        icon: "🧬",
        color: "#3B82F6",
        topics: [],
        tests: [],
        games: []
    },
    
    histology: {
        name: "Гистология",
        icon: "🔬",
        color: "#8B5CF6",
        topics: [],
        tests: [],
        games: []
    }
};

console.log("✅ content.js загружен с поддержкой новых типов вопросов");
