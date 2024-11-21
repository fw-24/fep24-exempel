
/** 
 *  Form-events (experimentera med dessa!): 
 *  change = när fältet har ändrats
 *  input = när fältet ändrar
 *  focus = när man väljer ett fält (klickar i det)
 *  blur = när man väljer ett annat fält
 * */ 

document.querySelector('#formfields').addEventListener('change', (evt) => {
    const field = evt.target;
    console.log(`${field.tagName} ${field.getAttribute('type')}: ${field.value}`)
});