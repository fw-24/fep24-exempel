
const arrayOfObjects = [
    { text: "Första", num: 1 },
    { text: "Andra", num: 2},
    { text: "Tredje", num: 3}
]
for (const li of arrayOfObjects) {
    const liHTML = `<li>${li.num} - ${li.text}</li>`; // <li>Första</li>
    document.querySelector('#lista').innerHTML += liHTML;
}


// vi loopar igenom alla list-element
document.querySelectorAll('#lista li').forEach(function(li) {

    // li innehåller list-elementet: <li>...</li>
    // vi skapar en lyssnare på varje li:
    li.addEventListener('click', function() {
        document.querySelector('#list-out').innerHTML = `Du klickade på ${li.innerHTML}`;
    })
});

document.querySelector('#links-container')
    .addEventListener('click', function(evt) {

    console.log(evt.target); // det jag klickar på
    console.log(evt.currentTarget.id); // det som har lyssnaren

});

document.querySelector('#links-container')
    .addEventListener('mouseover', function (evt) {

    evt.currentTarget.style.backgroundColor = '#ffffaa';
    
    if (evt.target.localName == "a") {
        evt.target.parentElement.style.backgroundColor = '#99ccff';
    }

    console.log(evt.target)
    if (evt.target.classList.contains('link')) {
        evt.target.style.fontWeight = 'bold';
    }

});


document.querySelector('#links-container')
    .addEventListener('mouseout', (evt) => {

    evt.currentTarget.style.backgroundColor = 'white';
    
    if (evt.target.localName == "a") {
        evt.target.parentElement.style.backgroundColor = 'white'
    }
    if (evt.target.classList.contains('link')) {
        evt.target.style.fontWeight = 'normal';
    }

});
    
// det är OK att ha vanliga funtionsdeklarationer trots att vi använder
// pilsyntax i callbacks!
function myFunction() {
    return 1;
}
// Funkar men reknommenderas ej i denna kurs:
const myArrowFunction = () => {
    return 2;
}



let seconds = 0;
const secondsTimer = setInterval(function () {
    seconds++;
    //console.log(seconds);
    document.querySelector('#seconds').innerText = seconds;
}, 1000)


document.querySelector('#btn')
    .addEventListener('click', () => clearInterval(secondsTimer));

// setTimeout funkar på samma sätt, men kör bara en gång
setTimeout(() => console.log('Det har gått 3 sekunder!'), 3000)


/**
 * Code Challenge: Kitchen timer
 */
