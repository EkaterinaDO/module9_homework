const submit = document.querySelector('.submit');

function checkInput() {
    const value = +document.querySelector('.input').value;

    if (typeof value != 'number' || isNaN(value) || typeof value === "string") {
        console.log('Вы ввели не число');
    } else if (value === 0 || value > 10) {
        submit.insertAdjacentHTML("beforebegin", `<span class="text">Число не в диапазоне от 1 до 10</span>`);
    } else {
        useRequest(displayResult, value);
    }
};



function useRequest(callback, value) {
    let xhr = new XMLHttpRequest();
    xhr.open (
        'GET',
        `https://picsum.photos/v2/list/?limit=${value}`,
        true
    );

    xhr.onload = function() {
        if (xhr.status = !200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            let apiData = JSON.parse(xhr.response);
            if (callback) {
                callback(apiData);
            }
        }
    };

    xhr.onerror = function () {
        console.log("Ошибка! Статус ответа: ", xhr.status);
    };

    xhr.send();

};


function displayResult(apiData) {

    let resultNode = document.querySelector('.result-request');
    let cards = "";

    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
        <img 
        src = "${item.download_url}" 
        class="card-image"
        >
        <p>${item.author}</p>
        </div>
        `;

        cards = cards + cardBlock;
    });


    resultNode.innerHTML = cards;
}


submit.addEventListener('click', checkInput);












// URL с параметрами
// Чтобы добавить к URL параметры, вида ?name=value, и корректно закодировать их, можно использовать объект URL:

// let url = new URL('https://google.com/search');
// url.searchParams.set('q', 'test me!');

// // параметр 'q' закодирован
// xhr.open('GET', url); // https://google.com/search?q=test+me%21



// let num = prompt('Введите число');
// if (typeof (+num) != 'number' || isNaN(+num) || num == '') {
//     console.log('Упс, вы ошиблись')
// } else if (num % 2 === 0) {
//     console.log('Четное число')
// } else {
//     console.log('Нечетное число')
// }