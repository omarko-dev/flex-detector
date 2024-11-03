const flexWords = [
    "luxury", "expensive", "vacation", "designer", "VIP", "bling", "rich", "millionaire",
    "yacht", "private jet", "lamborghini", "gucci", "prada", "rolex", "ferrari", "mansion",
    "penthouse", "first class", "exclusive", "elite", "high-end", "opulent", "lavish", "extravagant",
    "wealthy", "affluent", "prosperous", "loaded", "baller", "big shot", "high roller", "mogul",
    "tycoon", "boss", "influencer", "celebrity", "star", "icon", "legend", "champion", "winner",
    "alpha", "king", "queen", "prince", "princess", "duke", "duchess", "lord", "lady", "squire",
    "gentleman", "noble", "aristocrat", "baron", "baroness", "count", "countess", "earl", "viscount",
    "marquess", "marquis", "peer", "peeress", "knight", "dame", "sir", "madam", "honourable", "right honourable",
    "muscle", "biceps", "triceps", "abs", "six-pack", "pecs", "delts", "quads", "glutes", "calves",
    "ripped", "shredded", "jacked", "swole", "buff", "cut", "toned", "fit", "strong", "powerful",
    "athletic", "bodybuilder", "gym rat", "fitness freak", "workout", "training", "exercise", "lifting",
    "weights", "bench press", "deadlift", "squat", "cardio", "HIIT", "crossfit", "personal trainer",
    "lit", "savage", "goat", "fam", "bae", "dope", "fire", "slay", "yeet", "vibe", "flex", "gucci",
    "boujee", "clout", "drip", "hype", "squad", "woke", "extra", "snatched", "stan", "thicc", "lowkey",
    "highkey", "salty", "shook", "tea", "mood", "basic", "bet", "cap", "no cap", "ghost", "shade",
    "savage", "sus", "turnt", "vibe", "whip", "yolo", "zaddy", "peng", "innit", "bruv", "mate",
    "chuffed", "knackered", "gutted", "cheeky", "dodgy"
];

function detectFlexing() {
    const userText = document.getElementById("userInput").value.toLowerCase();
    let flexDetected = false;
    let flexCount = 0;
    flexWords.forEach(word => {
        if (userText.includes(word)) {
            flexDetected = true;
            flexCount++;
        }
    });
    const resultElement = document.getElementById("result");
    resultElement.innerText = flexDetected ? "Flex detected! 🎉" : "No flexing detected.";
    resultElement.style.color = flexDetected ? "green" : "gray";

    if (flexDetected) {
        startEmojiRain();
        updateFlexMeter(flexCount);
    } else {
        updateFlexMeter(0);
    }
}

function startEmojiRain() {
    const emojiContainer = document.getElementById("emojiRain");
    const themes = [
        ["💪", "💰", "👑"], 
        ["💪"],             
        ["💵"]              
    ];
    const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
    
    for (let i = 0; i < 30; i++) {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = selectedTheme[Math.floor(Math.random() * selectedTheme.length)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.animationDuration = `${Math.random() * 2 + 3}s`;
        emojiContainer.appendChild(emoji);

        emoji.addEventListener("animationend", () => {
            emoji.remove();
        });
    }

    setTimeout(() => {
        while (emojiContainer.firstChild) {
            emojiContainer.removeChild(emojiContainer.firstChild);
        }
    }, 5000);
}

function updateFlexMeter(flexCount) {
    const meterFill = document.querySelector('.meter-fill');
    const flexLevel = document.getElementById('flex-level');
    const flexPercentage = Math.min(flexCount * 10, 100);
    meterFill.style.width = `${flexPercentage}%`;
    flexLevel.innerText = `Flex Level: ${flexPercentage}%`;
}

document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        detectFlexing();
    }
});