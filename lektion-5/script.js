
const arrayOfObjects = [
    { text: "Första", num: 1 },
    { text: "Andra", num: 2},
    { text: "Tredje", num: 3}
]
for (const li of arrayOfObjects) {
    const liHTML = `<li>${li.num} - ${li.text}</li>`; // <li>Första</li>
    document.querySelector('#lista').innerHTML += liHTML;
}


//               0      1        2
const colors = [ "red", "green", "blue"];
console.log(colors[2])
for (let i = 0; i < colors.length; i++) {
    console.log(`color: ${colors[i]}`)

    const listElements = document.querySelector('#lista').children;
    listElements[i].style.color = colors[i];
}
document.querySelector('#lista').style.backgroundColor = 'pink';

// for of-loop ger varje element
const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
for (const day of days) {
    console.log(day);
    document.querySelector('#days').innerHTML += `<li>${day}</li>`
}
// for in-loop ger index-nummer
for (const i in colors) {
    console.log(`${i}: ${colors[i]}`);
    document.querySelector('#lista')
        .children[i].innerHTML += ` (${colors[i]})`;
}

// Objekt - man kommer åt elementen med deras nycklar
// OBS: ingen bestämd ordning
const person = {
    name: "Linus",
    age: 50,
    inventions: ["Linux", "Git"]
}
console.log(person.name, person.age, person.inventions)
console.log(person.inventions[1])

// forEach-loop funkar med en callback-funktion
colors.forEach(function (color) {
    console.log(color);
});
// Man kan ha index som andra argument om man behöver det!
days.forEach(function (day, i) {
    console.log(`forEach: ${i} ${day}`);
});

const linkUrl = document.querySelector('#my-link').getAttribute('href');
console.log(linkUrl);
console.log(document.querySelector('#my-link').getAttribute('data-info'));
console.log(document.querySelector('#bild').getAttribute('src'));

// Funkar, men bara för första träffen:
document.querySelector('.infotext').style.color = 'blue';
// Funkar för alla som matchar selektorn!
document.querySelectorAll('.infotext').forEach(function(elem, i) {
    console.log(elem)
    elem.style.backgroundColor = "silver";
    elem.innerHTML = `${i+1}. ${elem.innerHTML}`;
});

// motsvarar onclick="" i html:
document.querySelector('#btn').addEventListener('click', function() {
    console.log("du tryckte på knappen!")
});

document.querySelectorAll('#lista li').forEach(function(li) {

    li.addEventListener('click', function(evt) {
        console.log(evt.target); // ger det element jag klickade på
        document.querySelector('#list-out').innerHTML = `Du klickade på ${evt.target.innerHTML}`;
    })
});
    












