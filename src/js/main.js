import slider from './modules/slider';
import navbar from './modules/navbar';
import offers from './modules/offers';
import advantages from './modules/advantages';
import footer from './modules/footer';
import forms from './modules/forms';
import cookie from './modules/cookie';
import popup from './modules/popup';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    navbar(
        '.header__navbar',
        '.header__nav',
        '.nav__chevron',
        '.header__burger',
        'show',
        'rotate',
        'fixed',
        '[data-section]'
    );

    slider('.header__slider', '.slider__item', '.slider__prev', '.slider__next', 'active', 8000);

    offers('.offers__wrapper', 'assets/db.json');

    advantages('.advantages__cards', 'assets/db.json');

    try {
        forms('#contact__form', '.contact__input', 'assets/contact.php');
    } catch (e) {}

    try {
        forms('#application__form', '.application__input', 'assets/application.php');
    } catch (e) {}

    footer('.current__year');

    cookie();

    popup(
        'Szanowni Klienci! <br> Niestety, z powodu pandemii COVID-19, byliśmy zmuszeni zawiesić naszą działalność. <br> Działalność pozostaje zawieszona do odwołania.'
    );
});
