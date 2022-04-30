/* Iteración 1 */
function compare(numberOne , numberTwo) {
    if (numberOne < numberTwo) {
        console.log(numberTwo);
    } else {
        console.log(numberOne);
    }
};
compare(100, 120);

/* Iteración 2 */
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let longestWord;
    avengers.forEach(function (element) {
        if (!longestWord) {
            longestWord = element;
        };
        if (longestWord.length < element.length) {
            longestWord = element;
        }
    });
    return(longestWord);
};

const longestWordInArray = findLongestWord();

/* Iteración 3 */
const numbers = [1, 2, 3, 5, 45, 37, 58];
let sum = 0;

function sumAll() {
    numbers.forEach(function (element) {
        sum += element;
    });
    return sum;
};

console.log(sumAll());

/* Iteración 4 */
const numbers2 = [12, 21, 38, 5, 45, 37, 6];
let averageResult;
let sum2 = 0;

function average() {
    numbers2.forEach(function (element) {
        sum2 += element;
    });
    averageResult = sum2 / numbers2.length;
    return averageResult;
};
console.log(average());