'use strict';

function loadJSON(callback) {
    var XMLObj = new XMLHttpRequest();
    XMLObj.open('GET', 'data.json', true);
    XMLObj.onreadystatechange = function () {
        if (XMLObj.readyState === 4 && XMLObj.status === 200) {
            var myArr = JSON.parse(this.responseText);
            callback(myArr);
        }
    };
    XMLObj.send();
}
loadJSON(function (arr) {
    var count = 0;
    var age = 0;
    var averageAge;

    function countAverageAge(arr) {
        for(var person of arr) {
            if(person.age) {
                age += person.age;
                count++;
            } 
            if(person.friends) {
                countAverageAge(person.friends)
            }
        }
        return age/count;   
    }
    averageAge = Math.round(countAverageAge(arr));
    console.log(`Средний возраст всех участников = ${averageAge};`, `Количесвто человек = ${count};`,`Сумарный возраст всех людей = ${age};`);
});
