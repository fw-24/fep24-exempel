
/** 
 *  Form-events (experimentera med dessa!): 
 *  change = när fältet har ändrats
 *  input = när fältet ändrar
 *  focus = när man väljer ett fält (klickar i det)
 *  blur = när man väljer ett annat fält
 * */ 

document.querySelector('#formfields').addEventListener('input', (evt) => {
    const field = evt.target;
    document.querySelector('#form-out').innerHTML = `
        ${field.tagName} ${field.getAttribute('type')}: ${field.value}
    `;
});

document.querySelector('#btn-text').addEventListener('click', () => {
    document.querySelector('#form-out')
        .innerHTML = document.querySelector('#min-text').value;
});