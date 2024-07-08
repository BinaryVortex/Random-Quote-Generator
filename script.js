const quoteElement = document.getElementById('quoteText');
const authorElement = document.getElementById('author');
const generateButton = document.getElementById('generateButton');
const endpoint = 'https://api.quotable.io/random';

async function generateQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        quoteElement.textContent = data.content;
        authorElement.textContent = `- ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error.message);
        quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
        authorElement.textContent = '';
    }
}

generateButton.addEventListener('click', generateQuote);
