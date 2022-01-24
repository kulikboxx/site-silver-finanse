function popup(message) {
    const popupEl = document.createElement('div');
    popupEl.classList.add('popup');
    popupEl.innerHTML = `
            <div class="popup__dialog">
                <span class="popup__close"><i class="fas fa-times"></i></span>
                <p class="popup__text">${message}</p>
            </div>
        `;

    document.body.append(popupEl);

    setTimeout(() => (popupEl.style.display = 'flex'), 1000);

    document.querySelector('.popup__close').addEventListener('click', (e) => {
        if (e.target.classList.contains('popup__close') || e.target.classList.contains('fa-times')) {
            popupEl.style.display = 'none';
        }
    });
}

export default popup;
