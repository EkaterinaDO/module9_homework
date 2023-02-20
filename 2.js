const jsonString = `
    {
        "list": [
        {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
        },
        {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
        }
    ]
    }
    `;

// console.log('jsonString', jsonString);

const data = JSON.parse(jsonString);

// console.log('data', data);

const list = data.list;

// console.log(list);

let finish = {}
let result = []

list.forEach(elem => {
    result.push ({
        name: elem.name,
        age: Number(elem.age),
        prof: elem.prof,
    })
    });

    // console.log(result);

    finish['List'] = result;

    console.log(finish);