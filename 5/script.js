

const submit = document.querySelector('.submit');

if (localStorage.getItem('images')) {
    outputImages(JSON.parse(localStorage.getItem('images')))
}


function checkInput() {
    const value1 = +document.querySelector('.input1').value;
    const value2 = +document.querySelector('.input2').value;

    if (typeof value1 != 'number' || isNaN(value1) || value1 < 1 || value1 > 10) {
        submit.insertAdjacentHTML("beforebegin", `<span class="text">Номер страницы вне диапазона от 1 до 10</span>`);
    } else if (typeof value2 != 'number' || isNaN(value2) || value2 < 1 || value2 > 10) {
        submit.insertAdjacentHTML("beforebegin", `<span class="text">Лимит вне диапазона от 1 до 10</span>`);
    } else if (typeof value1 != 'number' || isNaN(value1) || value1 < 1 || value1 > 10 && typeof value2 != 'number' || isNaN(value2) || value2 < 1 || value2 > 10) {
        submit.insertAdjacentHTML("beforebegin", `<span class="text">Номер страницы и лимит вне диапазона от 1 до 10</span>`);
    } else {
        useRequest(value1, value2);
    }
}

function useRequest(value1, value2) {

    fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
        .then((response) => { 
            return response.json() 
        })
        .then((data) => {
            console.log(data);

            localStorage.setItem('images', JSON.stringify(data));
            outputImages(data)
        })
        .catch((error) => { console.log('error') })
}


function outputImages(data) {


        let resultNode = document.querySelector('.result-request');
        let cards = "";

        data.forEach(item => {
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


        resultNode.insertAdjacentHTML("beforebegin", cards)
}




submit.addEventListener("click", checkInput);

























// мой предыдущий работающий пример без localStorage:



// const submit = document.querySelector('.submit');

// function checkInput() {
//     const value1 = +document.querySelector('.input1').value;
//     const value2 = +document.querySelector('.input2').value;

//     if (typeof value1 != 'number' || isNaN(value1) || value1 < 1 || value1 > 10) {
//         submit.insertAdjacentHTML("beforebegin", `<span class="text">Номер страницы вне диапазона от 1 до 10</span>`);
//     } else if (typeof value2 != 'number' || isNaN(value2) || value2 < 1 || value2 > 10) {
//         submit.insertAdjacentHTML("beforebegin", `<span class="text">Лимит вне диапазона от 1 до 10</span>`);
//     } else if (typeof value1 != 'number' || isNaN(value1) || value1 < 1 || value1 > 10 && typeof value2 != 'number' || isNaN(value2) || value2 < 1 || value2 > 10) {
//         submit.insertAdjacentHTML("beforebegin", `<span class="text">Номер страницы и лимит вне диапазона от 1 до 10</span>`);
//     } else {
//         useRequest(value1, value2);
//     }
// }

// function useRequest(value1, value2) {

//     let resultNode = document.querySelector('.result-request');

//     fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
//         .then((response) => { return response })
//         .then((response) => {
//             const result = response.json();
//             console.log('result', result);
//             return result;
//         })
//         .then((data) => {
//             console.log(data);

//             let cards = "";

//             data.forEach(item => {
//                 const cardBlock = `
//                 <div class="card">
//                 <img
//                 src = "${item.download_url}"
//                 class="card-image"
//                 >
//                 <p>${item.author}</p>
//                 </div>
//                 `;

//                 cards = cards + cardBlock;
//             });


//             resultNode.insertAdjacentHTML("beforebegin", cards);
//         })
//         .catch((error) => { console.log('error') })
// }









// submit.addEventListener("click", checkInput);
