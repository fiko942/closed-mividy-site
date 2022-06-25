window.onload = () => {
    const developer = {
        name: 'Wiji Fiko Teren'
    };
    if(images !== undefined) {
        const imageContainer = document.querySelector('.imgs');
        images.forEach(image => {
            let i = document.createElement('img');
            i.setAttribute('src', image);
            i.setAttribute('alt', developer.name);
            i.setAttribute('title', developer.name);
            i.classList.add('galeri-footer-image');
            imageContainer.appendChild(i);
        });
    }
}