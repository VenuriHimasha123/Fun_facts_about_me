const facts = [
    "I love travelling.",
    "I am an avid coder and love to code often",
    "I once baked a cake",
    "I speak three languages fluentlys.",
    "I’m learning to play the violin in my free time."
];

function generateFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}