import { getResources } from '../services/requests';

function advantages(cardsSelector, url) {
  const cardsHolder = document.querySelector(cardsSelector);

  function renderCards(cardsHolder, url) {
    getResources(url).then((response) => {
      try {
        response.advantages.cards.forEach(({ icon, count, title, text }) => {
          const card = document.createElement('div');
          card.classList.add('advantages__card', 'card');
          card.innerHTML = `
            <div class="card__img">${icon}</div>
            <span class="card__count">${count}</span>
            <h3 class="card__title">${title}</h3>
            <p class="card__text">${text}</p>
        `;

          try {
            cardsHolder.append(card);
          } catch (e) {}
        });
      } catch (e) {}
    });
  }

  if (window.location.pathname == '/') {
    renderCards(cardsHolder, url);
  }
}

export default advantages;
