document.querySelector('#gallery').addEventListener('click', (evt) => {
    if (evt.target.localName === "img") {
        const imgFile = evt.target.getAttribute('src');
        console.log(imgFile);

        const lightbox = document.querySelector('#lightbox');
        lightbox.style.display = 'block';
        lightbox.innerHTML = `
            <img src="${imgFile}">
        `; 
    }

    document.querySelector('#lightbox').addEventListener('click', () => {
        document.querySelector('#lightbox').style.display = 'none';
    })
});