const parser = new DOMParser();

const xmlString = `
    <list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>
    `;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = xmlDOM.querySelectorAll("student");


let finish = {}
let result = [] 

studentNode.forEach(item => { 
    result.push({
        name: item.querySelector('first').textContent,
        lang: item.querySelector('name').getAttribute("lang"),
        age: item.querySelector('age').textContent,
        prof: item.querySelector('prof').textContent
    })
})

// console.log(result);

finish['List'] = result;

console.log(finish);