function showThanksModal(message, error = false) {
  const modal = document.createElement('div');
  modal.innerHTML = `
                <div class="modal__dialog">
                        <p class="modal__text">${message}</p>
                </div>
        `;

  if (error) {
    modal.firstElementChild.style.color = '#ffffff';
    modal.firstElementChild.style.backgroundColor = '#e12449';
  }

  document.body.append(modal);
  modal.classList.add('modal');

  setTimeout(() => modal.classList.add('show'), 200);
  setTimeout(() => {
    modal.classList.remove('show');
    setTimeout(() => modal.remove(), 1000);
  }, 5000);
}

export { showThanksModal };
