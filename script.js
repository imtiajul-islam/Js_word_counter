let valuer = document.querySelector('#input');
let submit = document.querySelector('#submit');
let result = document.querySelector('#result');

submit.addEventListener('click', () => {
    if (valuer.value == '') {
        alert('Please enter some text!!')
        return;
    }
    let word = valuer.value;
    word = word.split(' ');
    const arrFiltered = word.filter(el => {
    return el != null && el != '';
    });
    word = arrFiltered;
     console.log(arrFiltered)
        word = word.length;
 
    result.innerHTML = `You have enterded ${word} word!`;
})
