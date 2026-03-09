const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = 'Dark Mode';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'Dark Mode';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'Light Mode';
    }
});

generateBtn.addEventListener('click', () => {
    const lottoNumbers = new Set();
    while (lottoNumbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

    numberElements.forEach((element, index) => {
        element.textContent = sortedNumbers[index];
    });
});