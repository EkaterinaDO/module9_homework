const submit = document.querySelector('.submit');

function checkInput() {
    const value = +document.querySelector('.input-width').value;
    const value2 = +document.querySelector('.input-height').value;

    if (typeof value != 'number' || isNaN(value) || typeof value === "string") {
        console.log('Неверный формат данных');
    } else if (typeof value2 != 'number' || isNaN(value2) || typeof value2 === "string") {
        console.log('Неверный формат данных');
    } else if (value < 100 || value > 300) {
        submit.insertAdjacentHTML("beforebegin", `<span class="text">Число не в диапазоне от 100 до 300</span>`);
    } else if (value2 < 100 || value2 > 300) {
        submit.insertAdjacentHTML("beforebegin", `<span class="text">Число не в диапазоне от 100 до 300</span>`);
    } else {
        useRequest(value, value2);
    }
};


function useRequest(value, value2) {

    let resultNode = document.querySelector('.result-request');

    fetch(`https://picsum.photos/${value}/${value2}`)
        .then((response) => { return response })
        .then((data) => { resultNode.insertAdjacentHTML("beforebegin", `<img src="${data.url}">`) })
        .catch((error) => { console.log('error') });
}


submit.addEventListener('click', checkInput);