function generateCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const allChars = letters + numbers;

    let code = '';
    code += letters[Math.floor(Math.random() * letters.length)];
    code += numbers[Math.floor(Math.random() * numbers.length)];

    while (code.length < 6) {
        code += allChars[Math.floor(Math.random() * allChars.length)];
    }

    return code.split('').sort(() => 0.5 - Math.random()).join('');
}

const codeEl = document.getElementById('randomCode');
const copiedText = document.getElementById('copiedText');
const newCode = generateCode();
codeEl.firstChild.textContent = newCode;

let copyTimeout; // 🆕 this tracks the last timeout

codeEl.addEventListener('click', () => {
    const text = codeEl.firstChild.textContent.trim();
    navigator.clipboard.writeText(text).then(() => {
        copiedText.classList.add('show');

        // 🧹 clear any existing timeout to prevent flicker
        clearTimeout(copyTimeout);

        // 🕒 fade out after 1.5s
        copyTimeout = setTimeout(() => {
            copiedText.classList.remove('show');
        }, 1500);
    });
});