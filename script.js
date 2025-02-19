import quotes from './quotes.js'

const quoteElement = document.getElementById('quote')
const quoteAuthorElement = document.getElementById('quote-author')
const generateBtn = document.getElementById('generate-btn')

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  const { quote, author: quoteAuthor } = randomQuote

  //Так как мы деструктурируем код, переменная quoteAuthor будет создана и ее значение будет undefined. В браузере не будет показан автор. В таком случае будет найдено свойство в объекте randomQuote, но переменная будет создала с именем quoteAuthor. Иными словами новая переменная quoteAuthor возьмет значение свойства author

  //Верхний код на 55 строке - деструктуризация двух нижних кодов. Иными словами код один и тот же, но мы его сокращаем:

  // const quote = randomQuote.quote
  // const quoteAuthor = randomQuote.author

  quoteElement.textContent = quote
  quoteAuthorElement.textContent = quoteAuthor
}

generateBtn.addEventListener('click', generateRandomQuote)
