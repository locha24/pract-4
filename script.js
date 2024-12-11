// Завдання 1: Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("Поточний браузер: ", navigator.userAgent);
})();

// Завдання 2: Обробка масивів методом reduce
function countTotalCharacters(stringsArray) {
    return stringsArray.reduce((total, str) => total + str.length, 0);
}

const strings = ["hello", "world", "JavaScript", "is", "awesome"];
console.log("Загальна кількість символів: ", countTotalCharacters(strings));

// Завдання 3: Об'єднання масивів за допомогою Spread Operator
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const combinedArray = [...array1, ...array2];
console.log("Об'єднаний масив: ", combinedArray);

// Завдання 4: Робота з Map
const studentScores = new Map([
    ["John", 85],
    ["Jane", 92],
    ["Alex", 78],
    ["Maria", 88]
]);

for (const [student, score] of studentScores) {
    console.log(`Студент: ${student}, Бал: ${score}`);
}

// Завдання 5: Зміна контексту функції за допомогою call та apply
const person1 = { firstName: "John", lastName: "Doe" };
const person2 = { firstName: "Jane", lastName: "Smith" };

function greet() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
}

greet.call(person1);
greet.apply(person2); 

// Завдання 6: Створення функції із замиканням (closure)
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const multiplyByTwo = createMultiplier(2);
const multiplyByFive = createMultiplier(5);

console.log("2 x 5 =", multiplyByTwo(5));
console.log("5 x 10 =", multiplyByFive(10));
