window.onload = () => {
    const d = {
        name: 'Wiji Fiko Teren'
    };
    if(images !== undefined) {
        const imageContainer = document.querySelector('.imgs');
        images.forEach(image => {
            let element = document.createElement('img');
            element.setAttribute('src', image);
            element.setAttribute('alt', d.name);
            element.setAttribute('title', d.name);
            element.classList.add('galeri-footer-image');
            imageContainer.appendChild(element);
        });
    }


    document.querySelectorAll('button[href]').forEach(btn => {
        btn.addEventListener('click', () => {
            window.open(btn.getAttribute('href'), '_blank');
        });
    });
}