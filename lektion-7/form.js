
/** 
 *  Form-events (experimentera med dessa!): 
 *  change = när fältet har ändrats
 *  input = när fältet ändrar
 *  focus = när man väljer ett fält (klickar i det)
 *  blur = när man väljer ett annat fält
 * */ 

document.querySelector('#formfields').addEventListener('input', (evt) => {
    const field = evt.target;
    let fieldVal = field.value;
    let fieldType = field.getAttribute('type');

    if (field.getAttribute('type') == "checkbox") {
        fieldVal = field.checked;
    } else if (field.tagName == "SELECT") {
        fieldType = "";
    }


    document.querySelector('#form-out').innerHTML = `
        ${field.tagName} ${fieldType}: ${fieldVal}
    `;
});

document.querySelector('#btn-text').addEventListener('click', () => {
    document.querySelector('#form-out')
        .innerHTML = document.querySelector('#min-text').value;
});