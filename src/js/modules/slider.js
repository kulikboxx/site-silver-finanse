function slider(sliderSelector, itemSelector, prevSelector, nextSelector, activeClass, timeInterval) {
    try {
        const mainSlider = document.querySelector(sliderSelector),
            slides = mainSlider.querySelectorAll(itemSelector),
            prev = document.querySelector(prevSelector),
            next = document.querySelector(nextSelector);

        let slideIndex = 0,
            timerId;

        const startInterval = () => {
            timerId = setInterval(() => showSlides(1), timeInterval);
        };

        const restartInterval = () => {
            clearInterval(timerId);
            startInterval();
        };

        const bulletsWrapper = document.createElement('div');
        bulletsWrapper.classList.add('slider__bullets');
        mainSlider.append(bulletsWrapper);

        slides.forEach((item) => {
            const bullet = document.createElement('span');
            bullet.classList.add('slider__bullet');
            bulletsWrapper.append(bullet);
        });

        const bullets = [...bulletsWrapper.children];

        function showSlides(n = 0) {
            slideIndex += n;

            if (slideIndex > slides.length - 1) slideIndex = 0;
            if (slideIndex < 0) slideIndex = slides.length - 1;

            slides.forEach((slide) => slide.classList.remove(activeClass));
            bullets.forEach((bullet) => bullet.classList.remove(activeClass));

            slides[slideIndex].classList.add(activeClass);
            bullets[slideIndex].classList.add(activeClass);
        }

        prev.addEventListener('click', () => {
            showSlides(-1);
            restartInterval();
        });

        next.addEventListener('click', () => {
            showSlides(1);
            restartInterval();
        });

        bullets.forEach((bullet, i) => {
            bullet.addEventListener('click', () => {
                slideIndex = i;
                showSlides();
                restartInterval();
            });
        });

        showSlides();
        startInterval();

        function touchStart(e) {
            mainSlider.addEventListener('touchmove', touchMove);
            mainSlider.addEventListener('touchend', touchEnd);

            let x1 = e.touches[0].clientX;
            let x2;

            function touchMove(e) {
                x2 = e.changedTouches[0].clientX;
            }

            function touchEnd() {
                mainSlider.removeEventListener('touchmove', touchMove);
                mainSlider.removeEventListener('touchend', touchEnd);

                let res = (x2 - x1) / 100;

                if (!isNaN(res) && res < -0.4) {
                    showSlides(-1);
                    restartInterval();
                }

                if (!isNaN(res) && res > 0.4) {
                    showSlides(1);
                    restartInterval();
                }
            }
        }

        mainSlider.addEventListener('touchstart', touchStart);
    } catch (e) {}
}

export default slider;
