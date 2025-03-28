// #1 Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let firstArray = [9, 5, 7];
firstArray[2] = 10;
console.log("Третє число було 7", firstArray);
//#2 Створити масив із трьох рядків. Додати до масиву ще одну рядків.
let messageArray = ["I", "love", "JavaScript"];
messageArray[3] = "!!";
console.log(messageArray);
//3 Створити скрипт який поверне суму всіх чисел в масиві.
const def = [2, 1, 5, 10];
let sum = 0;
for (let i = 0; i < def.length; i += 1) {
    sum += def[i];
}
console.log(sum);
//4 Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const numbers = [5, 6, 2, 9];
for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Індекс ${i}, значення ${numbers[i]}`);
}

//5 Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const message = ["¡Hola!", "les", "gustan", "minecraft", "?"];

for (let i of message) {
    if (i.length > 5){
        console.log(i);
        
    }
}

//6 Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const request = [4, 3, 6, 234, 22, 12, 222, 88, 99, 1];
let max = 0;
for (let answer of request) {
    if (answer > max) {
        max = answer;
    }
}
console.log(`Максимальне значення: ${max}`);

//7 Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i of numbersArray) {
    if (i % 2 === 0) {
        console.log(`Парне число: ${i}`);
    }
}   
