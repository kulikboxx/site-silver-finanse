function navbar(
    navbarSelector,
    navigationSelector,
    chevronSelector,
    burgerSelector,
    showClass,
    rotateClass,
    scrollClass,
    dataSection
) {
    const navbarParent = document.querySelector(navbarSelector);
    const navigation = navbarParent.querySelector(navigationSelector);
    const chevronButton = navbarParent.querySelector(chevronSelector);
    const burgerButton = navbarParent.querySelector(burgerSelector);
    const navigationLinks = navigation.querySelectorAll(`a:not(${chevronSelector})`);
    const sections = document.querySelectorAll(dataSection);

    const itemHeight = chevronButton.nextElementSibling.children[0].clientHeight;
    const itemsLength = chevronButton.nextElementSibling.children.length;
    const height = itemHeight * itemsLength;

    const addActiveClass = (element, activeClass) => element.classList.add(activeClass);
    const removeActiveClass = (element, activeClass) => element.classList.remove(activeClass);
    const changeElementStyle = (element, prop, value) => (element.style[prop] = value);

    try {
        navigationLinks.forEach((link) => {
            if (link.getAttribute('data-current') === sections[0].getAttribute('data-section')) {
                addActiveClass(link, 'active');
            }
        });
    } catch (e) {}

    burgerButton.addEventListener('click', () => {
        if (burgerButton.classList.contains(rotateClass)) {
            removeActiveClass(navigation, showClass);
            removeActiveClass(burgerButton, rotateClass);
            removeActiveClass(chevronButton, rotateClass);
            changeElementStyle(chevronButton.nextElementSibling, 'maxHeight', '0px');
        } else {
            addActiveClass(navigation, showClass);
            addActiveClass(burgerButton, rotateClass);
        }
    });

    chevronButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (chevronButton.classList.contains(rotateClass)) {
            removeActiveClass(chevronButton, rotateClass);
            changeElementStyle(chevronButton.nextElementSibling, 'maxHeight', '0px');
        } else {
            addActiveClass(chevronButton, rotateClass);
            changeElementStyle(chevronButton.nextElementSibling, 'maxHeight', `${height}px`);
        }
    });

    navigationLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            // e.preventDefault();

            setTimeout(() => {
                removeActiveClass(navigation, showClass);
                removeActiveClass(burgerButton, rotateClass);
            }, 500);
        });
    });

    window.addEventListener('scroll', () => {
        if (document.documentElement.clientWidth >= 992 && window.scrollY >= 125) {
            addActiveClass(navbarParent, scrollClass);
        } else {
            removeActiveClass(navbarParent, scrollClass);
        }

        let current;

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const navbarHeight = navbarParent.getBoundingClientRect().height;

            if (sectionTop <= navbarHeight) {
                current = section.getAttribute('data-section');
            }
        });

        navigationLinks.forEach((link) => {
            removeActiveClass(link, 'active');

            if (link.getAttribute('data-current') === current) {
                addActiveClass(link, 'active');
            }
        });
    });

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth >= 992) {
            removeActiveClass(navigation, showClass);
            removeActiveClass(burgerButton, rotateClass);
            removeActiveClass(chevronButton, rotateClass);
            changeElementStyle(chevronButton.nextElementSibling, 'maxHeight', '0px');
        }
    });
}

export default navbar;
