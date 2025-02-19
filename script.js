import quotes from './quotes.js'

const quoteElement = document.getElementById('quote')
const quoteAuthorElement = document.getElementById('quote-author')
const generateBtn = document.getElementById('generate-btn')
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn')
const favoritesContainer = document.getElementById('favorites-container')

let currentQuoteIndex

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[currentQuoteIndex]
  const { quote, author } = randomQuote

  //Так как мы деструктурируем код, переменная quoteAuthor будет создана и ее значение будет undefined. В браузере не будет показан автор. В таком случае будет найдено свойство в объекте randomQuote, но переменная будет создала с именем quoteAuthor. Иными словами новая переменная quoteAuthor возьмет значение свойства author

  //Верхний код на 55 строке - деструктуризация двух нижних кодов. Иными словами код один и тот же, но мы его сокращаем:

  // const quote = randomQuote.quote
  // const quoteAuthor = randomQuote.author

  quoteElement.textContent = quote
  quoteAuthorElement.textContent = author
  toggleFavoriteBtn.textContent = randomQuote.isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites'

  toggleFavoriteBtn.style.display = 'inline-block'
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex]
  currentQuote.isFavorite = !currentQuote.isFavorite
  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites'
  //Или же вместо тернарного оператора можно воспользоваться условной инструкцией:
  // if (toggleFavoriteBtn.textContent === 'Add to favorites') {
  //   toggleFavoriteBtn.textContent = 'Remove from favorites'
  // } else {
  //   toggleFavoriteBtn.textContent = 'Add to favorites'
  // }
  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div')
    favoriteCard.classList.add('favorite-card')
    favoriteCard.innerHTML = `<p>${currentQuote.quote}</p>
    <p class="author">${currentQuote.author}</p>
    `
    favoritesContainer.appendChild(favoriteCard)
  } else {
    const favoriteCards = document.querySelectorAll('.favorite-card')
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove()
      }
    })
  }
}

generateBtn.addEventListener('click', generateRandomQuote)
toggleFavoriteBtn.addEventListener('click', toggleFavorite)
generateRandomQuote()
