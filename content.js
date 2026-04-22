// content.js - с поддержкой случайных вопросов по темам

window.MEDICAL_CONTENT = {
    chemistry: {
        name: "Химия",
        icon: "🧪",
        color: "#10B981",
        topics: [
            { id: "chem_1", title: "Органическая химия", description: "Углеводороды, спирты", difficulty: "medium", isAvailable: true, contentFile:"topics/chemistry/chem_1.json"},
            { id: "chem_2", title: "Неорганическая химия", description: "Кислоты, основания", difficulty: "easy", isAvailable: true , contentFile:"topics/chemistry/chem_2.json"}
        ],
        tests: [
            { 
                id: "test_chem_1", 
                name: "Основы органической химии", 
                points: 100,
                timeLimit: 300,
                difficulty: "easy",
                completedBy: [],
                // Количество вопросов в тесте
                numberOfQuestions: 5,
                // БАНКИ ВОПРОСОВ ПО ТЕМАМ
                questionBanks: [
                    {
                        topic: "Алканы",
                        // Из этой темы будет выбран 1 случайный вопрос
                        questions: [
                            {
                                type: "choice",
                                text: "Какая формула у метана?",
                                options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
                                correct: 0,
                                explanation: "Метан - простейший алкан с формулой CH₄"
                            },
                            {
                                type: "choice",
                                text: "Какая формула у этана?",
                                options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
                                correct: 1,
                                explanation: "Этан - второй алкан, формула C₂H₆"
                            },
                            {
                                type: "choice",
                                text: "Какая формула у пропана?",
                                options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
                                correct: 2,
                                explanation: "Пропан - третий алкан, формула C₃H₈"
                            },
                            {
                                type: "choice",
                                text: "Какая формула у бутана?",
                                options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
                                correct: 3,
                                explanation: "Бутан - четвёртый алкан, формула C₄H₁₀"
                            },
                            {
                                type: "text-input",
                                text: "Напишите формулу метана",
                                correct: "CH4",
                                caseSensitive: false,
                                explanation: "Метан - CH₄"
                            },
                            {
                                type: "image-choice",
                                text: "Какая молекула изображена на рисунке?",
                                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Methane-3D-balls.png/200px-Methane-3D-balls.png",
                                options: ["Метан", "Этан", "Пропан", "Бутан"],
                                correct: 0,
                                explanation: "Это метан - простейший углеводород"
                            }
                        ]
                    },
                    {
                        topic: "Химические индикаторы",
                        questions: [
                            {
                                type: "choice",
                                text: "Какой цвет у лакмуса в кислой среде?",
                                options: ["Красный", "Синий", "Фиолетовый", "Зелёный"],
                                correct: 0,
                                explanation: "Лакмус в кислой среде становится красным"
                            },
                            {
                                type: "choice",
                                text: "Какой цвет у лакмуса в щелочной среде?",
                                options: ["Красный", "Синий", "Фиолетовый", "Зелёный"],
                                correct: 1,
                                explanation: "Лакмус в щелочной среде становится синим"
                            },
                            {
                                type: "choice",
                                text: "Какой индикатор в кислой среде становится жёлтым?",
                                options: ["Метилоранж", "Лакмус", "Фенолфталеин", "Бромтимоловый синий"],
                                correct: 0,
                                explanation: "Метилоранж в кислой среде красный/розовый, в щелочной - жёлтый"
                            },
                            {
                                type: "choice",
                                text: "Какой индикатор в щелочной среде становится малиновым?",
                                options: ["Фенолфталеин", "Лакмус", "Метилоранж", "Универсальный"],
                                correct: 0,
                                explanation: "Фенолфталеин в щелочной среде малиновый"
                            },
                            {
                                type: "text-input",
                                text: "Какой индикатор в кислой среде красный, а в щелочной синий?",
                                correct: "лакмус",
                                caseSensitive: false,
                                explanation: "Лакмус - классический индикатор"
                            }
                        ]
                    },
                    {
                        topic: "Химические реакции",
                        questions: [
                            {
                                type: "choice",
                                text: "Что такое катализатор?",
                                options: ["Вещество, ускоряющее реакцию", "Вещество, замедляющее реакцию", "Продукт реакции", "Исходное вещество"],
                                correct: 0,
                                explanation: "Катализатор ускоряет реакцию, но сам не расходуется"
                            },
                            {
                                type: "choice",
                                text: "Какой тип реакции: 2H₂ + O₂ → 2H₂O?",
                                options: ["Соединение", "Разложение", "Замещение", "Обмен"],
                                correct: 0,
                                explanation: "Из простых веществ образуется сложное - реакция соединения"
                            },
                            {
                                type: "choice",
                                text: "Что такое эндотермическая реакция?",
                                options: ["С поглощением тепла", "С выделением тепла", "Без изменения тепла", "Взрывная"],
                                correct: 0,
                                explanation: "Эндо - внутрь, тепло поглощается"
                            },
                            {
                                type: "choice",
                                text: "Что такое экзотермическая реакция?",
                                options: ["С выделением тепла", "С поглощением тепла", "Без изменения тепла", "Медленная"],
                                correct: 0,
                                explanation: "Экзо - наружу, тепло выделяется"
                            }
                        ]
                        },
                    {
                        topic: "Кислоты и основания",
                        questions: [
                            {
                                type: "choice",
                                text: "Что такое pH меньше 7?",
                                options: ["Кислая среда", "Щелочная среда", "Нейтральная среда", "Не определяется"],
                                correct: 0,
                                explanation: "pH < 7 - кислая среда"
                            },
                            {
                                type: "choice",
                                text: "Что такое pH больше 7?",
                                options: ["Щелочная среда", "Кислая среда", "Нейтральная среда", "Не определяется"],
                                correct: 0,
                                explanation: "pH > 7 - щелочная среда"
                            },
                            {
                                type: "choice",
                                text: "Какая среда у чистой воды?",
                                options: ["Нейтральная", "Кислая", "Щелочная", "Амфотерная"],
                                correct: 0,
                                explanation: "pH чистой воды = 7 - нейтральная среда"
                            },
                            {
                                type: "text-input",
                                text: "Как называется реакция между кислотой и основанием?",
                                correct: "нейтрализация",
                                caseSensitive: false,
                                explanation: "Кислота + основание = соль + вода"
                            }
                        ]
                    },
                    {
                        topic: "Сложные эфиры и жиры",
                        questions: [
                            {
                                type: "choice",
                                text: "Из чего состоят жиры?",
                                options: ["Глицерин и жирные кислоты", "Глюкоза", "Аминокислоты", "Нуклеотиды"],
                                correct: 0,
                                explanation: "Жиры - сложные эфиры глицерина и жирных кислот"
                            },
                            {
                                type: "text-input",
                                text: "Какая реакция характерна для жиров?",
                                correct: "омыление",
                                caseSensitive: false,
                                explanation: "Омыление - гидролиз жиров в щелочной среде"
                            }
                        ]
                    }
                ]
            id: "test_chem_2", 
                name: "Формулы", 
                points: 50,
                timeLimit: 300,
                difficulty: "easy",
                completedBy: [],
                // Количество вопросов в тесте
                numberOfQuestions: 1,
                // БАНКИ ВОПРОСОВ ПО ТЕМАМ
                questionBanks: 
                [
                     {
                        topic: "Формулы",
                        // Из этой темы будет выбран 1 случайный вопрос
                        questions: [
                            {
                                type: "text-input-image",
                                text: "что на картинке?",
                                image:"images/phenol.png",
                                correct:"фенол",
                                explanation: "Метан - простейший алкан с формулой CH₄"
                            },
                    
                ]}
        ],
        games: []
    }
};

// Остальные предметы (анатомия, биология, гистология) пока пустые
window.MEDICAL_CONTENT.anatomy = {
    name: "Анатомия",
    icon: "🫀",
    color: "#EF4444",
    topics: [ { id: "chem_1", title: "Анатомическое строение сердца", description: "Внешнее строение", difficulty: "medium", isAvailable: true, contentFile:"topics/chemistry/anat_1.json"},
            { id: "chem_2", title: "Перикард, вены и артерии сердца, топография сердца", description: "артерии и вены сердца, перикард",difficulty: "easy", isAvailable: true , contentFile:"topics/chemistry/anat_2.json"}
        
    ],
    tests: 
    [

            { 
                id: "test_anat_1", 
                name: "Внешнее строение сердца", 
                points: 150,
                timeLimit: 300,
                difficulty: "easy",
                completedBy: [],
                // Количество вопросов в тесте
                numberOfQuestions: 1,
                  questionBanks: 
               [
                    {
                        topic: "Алканы",
                        // Из этой темы будет выбран 1 случайный вопрос
                        questions: [
                            {
                               type: "choice",
                                text: "Чего нет у сердца?",
                                options: ["Верхушки", "Основания", "Дна", "Желудочков"],
                                correct: 2,
                                explanation: "У сердца нет дна"

                            },
                            {
                              type: "choice",
                                text: "Какая борозда отделяет предсердия от желудочков?",
                                options: ["Передняя межжелудочковая", "Задняя межжелудочковая", "Венечная", "Медиальная"],
                                correct: 2,
                                explanation: "Венечная борозда отделяет предсердия от желудочков"

                            },
                            {
                               type: "text-input",
                                text: "Во что сливаются передняя и задняя межжелудочковая борозды в области верхушки сердца ?(Ответ дать на латыни 3-мя словами)",
                                correct: "incisura apicis cordis",
                                caseSensitive: false,
                                explanation: "Верхушка сердца"

                            },
                            {
                               type: "choice",
                                text: "4 камеры в сердце человека, какие?",
                                options: ["3", "2", "4", "1"],
                                correct: 2,
                                explanation: "4"

                            },
                            {
                                type: "text-input",
                                text: "Напишите формулу метана",
                                correct: "CH4",
                                caseSensitive: false,
                                explanation: "Метан - CH₄"
                            },
                            {
                                type: "image-choice",
                                text: "Какая молекула изображена на рисунке?",
                                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Methane-3D-balls.png/200px-Methane-3D-balls.png",
                                options: ["Метан", "Этан", "Пропан", "Бутан"],
                                correct: 0,
                                explanation: "Это метан - простейший углеводород"
                            }
                        ]
                    }
                ]
            }
    ],
             
    games: []
};

window.MEDICAL_CONTENT.biology = {
    name: "Биология",
    icon: "🧬",
    color: "#3B82F6",
    topics: [],
    tests: [],
    games: []
};

window.MEDICAL_CONTENT.histology = {
    name: "Гистология",
    icon: "🔬",
    color: "#8B5CF6",
    topics: [],
    tests: [],
    games: []
};

console.log("✅ content.js загружен с банками вопросов!");
