import { getResources } from '../services/requests';

function offers(wrapperSelector, url) {
  const offersWrapper = document.querySelector(wrapperSelector);

  try {
    function renderCards(offersWrapper, url) {
      getResources(url)
        .then((response) => {
          response.offers.cards.forEach(({ src, alt, title, description, link }) => {
            const card = document.createElement('div');
            card.classList.add('offers__card', 'card');
            card.innerHTML = `
                    <img src="${src}" alt="${alt}" class="card__img">
                    <div class="card__content">
                        <h3 class="card__title">${title}</h3>
                        <p class="card__description">${description}</p>
                        <a href="${link}" class="card__btn">Zobacz więcej</a>
                    </div>
                `;

            offersWrapper.append(card);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (window.location.pathname == '/') {
      renderCards(offersWrapper, url);
    }
  } catch (e) {}
}

export default offers;
