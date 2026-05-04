const images = document.querySelectorAll(`.header-slider ul img`);
const previousBtn = document.querySelector(`.control_prev`);
const nextBtn = document.querySelector(`.control_next`);

let n = 0;

const changeSlide = () => {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = `none`;
    }
    images[n].style.display = `block`;
};
changeSlide();

previousBtn.addEventListener(`click`, (e) => {
    if(n > 0) {
        n--;
    } else {
        n = images.length - 1;
    }
    changeSlide();
    console.log(n);
});

nextBtn.addEventListener(`click`, (e) => {
    if(n < images.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
    console.log(n);
});

const scrollContainer = document.querySelectorAll(`.products`);

for(const item of scrollContainer) {
    item.addEventListener(`wheel`, (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
};