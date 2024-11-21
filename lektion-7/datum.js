const idag = new Date();
const julafton = new Date(2024, 11, 24);

const dagar = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
const manader = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];

// Tar emot ett datumobjekt och returnerar finlandssvensk text
function fiSvDag(d) {
    return `
        ${dagar[d.getDay()].toLowerCase()}
        ${d.getDate()}
        ${manader[d.getMonth()]}
        ${d.getFullYear()}
    `;
}

document.querySelector('#tid').innerHTML = `I dag är det ${fiSvDag(idag)}`;
document.querySelector('#jul').innerHTML = `Julafton är ${fiSvDag(julafton)}`;


