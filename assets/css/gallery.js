document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const fullscreen = document.createElement('div');
        fullscreen.classList.add('fullscreen');
        fullscreen.innerHTML = `<img src="${img.src}" alt=""><span class="close">&times;</span>`;
        document.body.appendChild(fullscreen);
        fullscreen.querySelector('.close').onclick = () => fullscreen.remove();
    });
});