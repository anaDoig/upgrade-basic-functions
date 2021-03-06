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

/* Iteración 5 */
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
let numberSum = 0;
let stringSum = 0;

function averageWord(param) {
    param.forEach(function (element) {
        if (typeof element === 'number') {
            numberSum += element;
        } else if (typeof element === 'string') {
            stringSum += element.length;
        }
    });
}
averageWord(mixedElements);

/* Iteración 6 */
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];
let checkDuplicate;
function removeDuplicates(param) {
    param.forEach(function (element) {
        checkDuplicate = param.shift();
        console.log(checkDuplicate);
        if(!param.includes(checkDuplicate)) {
            param.push(checkDuplicate);
        }
        
    });
}
removeDuplicates(duplicates);

/* Iteración 7 */
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function finderName(param, name) {
    for (let key in param) {
        if(param.includes(name)) {
            return true;
        } else {
            return false;
        }
    }
};
finderName(nameFinder, 'Bruce');

console.log('------------');

/* Iteración 8 */
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
let counter = 0;
let word;
function repeatCounter(param) {
    param.forEach(function (element) {
        if(!word) {
            word = element;
        }
        if(word === element) {
            counter ++;
        }
    });
    console.log(`La palabra '${word}' se repite ${counter} veces`);
    counter = 0;
    word = undefined;
};

repeatCounter(counterWords);