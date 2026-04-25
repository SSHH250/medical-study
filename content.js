window.MEDICAL_CONTENT = {
    chemistry: {
        name: "Химия",
        icon: "🧪",
        color: "#10B981",
        topics: [
            { id: "chem_1", title: "Органическая химия", description: "Углеводороды", difficulty: "medium", isAvailable: true }
        ],
        testFiles: [
            "tests/chemistry/test_chem_1.json"
        ],
        games: []
    },
    anatomy: {
        name: "Анатомия",
        icon: "🧪",
        color: "#10B981",
        topics: [
            { id: "anat_1", title: "Органическая химия", description: "Углеводороды", difficulty: "medium", isAvailable: true }
        ],
        testFiles: [
            "tests/chemistry/test_chem_1.json"
        ],
        games: []
    },
    biology: {
        name: "Биология",
        icon: "🧪",
        color: "#10B981",
        topics: [
            { id: "bio_1", title: "Органическая химия", description: "Углеводороды", difficulty: "medium", isAvailable: true }
        ],
        testFiles: [
            "tests/chemistry/test_chem_1.json"
        ],
        games: []
    },
    histology: {
        name: "Гистология",
        icon: "🧪",
        color: "#10B981",
        topics: [
            { id: "hist_1", title: "Органическая химия", description: "Углеводороды", difficulty: "medium", isAvailable: true }
        ],
        testFiles: [
            "tests/chemistry/test_chem_1.json"
        ],
        games: []
    },
    // ... остальные предметы
};

console.log("✅ content.js загружен с поддержкой новых типов вопросов");
