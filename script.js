Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', e => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', e => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const scrollSpeed = 3;
    const walk = (x - startX) * scrollSpeed;
    slider.scrollLeft = scrollLeft - walk;
})

// COLLAGE POP-UP

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const lightboxImg = document.querySelectorAll(".collage-img");
lightboxImg.forEach((lightboxImg) => {
    lightboxImg.addEventListener("click", (e) => {
        lightbox.classList.add("active");

        const img = document.createElement("img");
        img.src = lightboxImg.src;

        // Captions
        let caption = document.createElement("div");
        caption.classList.add("caption");
        img.alt = lightboxImg.alt;
        caption.innerText = img.alt;

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
        if(img.alt) {
            lightbox.appendChild(caption);
        }
    })
})

lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
})




