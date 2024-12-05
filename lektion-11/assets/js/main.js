
// Självexekverande anonym funktion (IIFE - Immediately Invoked Function Expression)
(async () => {
    const resp = await fetch(`./assets/footer.html`);
    const footer = await resp.text();
    document.querySelector('#footer').innerHTML = footer;
})();

async function getPage(pageName) {
    const resp = await fetch(`./assets/pages/${pageName}.json`);
    const page = await resp.json();

    console.log(page);
    document.querySelector('#page-title').innerHTML = page.title;
    document.querySelector('#page-content').innerHTML = page.content;
    
    // Ternary expression:  (if true) ? do this : else do that;
    const imgTag = (page.image) ? `<img src="./assets/img/${page.image}">` : '';

    document.querySelector('#page-image').innerHTML = imgTag;

}
getPage('page1');


// Bootstrap-menyn
if (document.querySelector('#nav-links')) {

    document.querySelector('#nav-links').addEventListener('click', (evt) => {
        
        // 1. ta bort active-klassen från alla element i menyn
        for (const link of document.querySelectorAll('#nav-links a')) {
            link.classList.remove('active');
        }
        // 2. Gör det elemet jag valt aktivt
        evt.target.classList.add('active');

        // Dölj menyn:
        document.querySelector('.navbar-collapse').classList.remove('show');

        if (!evt.target.getAttribute('data-page')) return; 
        getPage(evt.target.getAttribute('data-page'));

        

    });
}

// för icke-bootstrap-versionen
if (document.querySelector('#menu')) {
    document.querySelector('#menu').addEventListener('click', (evt) => {
        document.querySelector('#menu').style.display = 'none';
    
        if (!evt.target.getAttribute('data-page')) return; 
        getPage(evt.target.getAttribute('data-page'));
    
    });
    document.querySelector('#hamburger').addEventListener('click', () => {
        document.querySelector('#menu').style.display = 'block';
    });
}

