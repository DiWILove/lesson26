//1 Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
// и следующие функции для работы с этим объектом:

// let car = {
//     manufacturer: "BMW",
//     model: "730 XDrive",
//     "year of issue": 2016,
//     speed: 100
// }

//1.1 Функция для вывода на экран информации об автомобиле;

// for (let key in car) {
//    console.log(key);
//    console.log(car[key])
// }

// const i = +prompt('?', 0);
// console.log(getInfo(i));
// console.log(car);

//1.2 Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
//Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// function calcSpeed(x) {
//     hh = x / car.speed;
//     h1 = '';
//     if (hh % 4 === 0 && hh !== 4) {
//         h1 = -1;
//     };
//     if (hh > 4) {
//         hh = hh + Math.floor(hh / 4);
//     };
//     return (+hh.toFixed(2) + h1)
// }
// const dist = +prompt("Расстояние", 0);

// console.log(calcSpeed(dist));

//2 Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и 
//следующие функции для работы с этим объектом: 

// let d1 = {
//     num1: 1,
//     den1: 2
// };
// let d2 = {
//     num2: +prompt('num', 0),
//     den2: +prompt('den', 0)
// };

//Функция сложения 2-х объектов-дробей;

// function calcAdd(x, y) {
//     if (y > d1.den1 || d1.den1 > y) {
//         den3 = d1.den1 * y;
//         num3 = (d1.num1 * y) + (x * d1.den1);
//     } else if (y == d1.den1) {
//         den3 = y;
//         num3 = x + d1.num1;
//     }
//     if (num3 == den3) {
//         return (1)
//     }
//     i = den3;
//     while (i > 0) {
//         if (num3 % i === 0 && den3 % i === 0) {
//             num3 = num3 / i;
//             den3 = den3 / i;
//             break
//         }
//         i--;
//     }
//     c = 0;
//     while (num3 > den3) {
//         c = c + 1;
//         num3 = num3 - den3;
//     }
//     return (`${c} цел. ${num3} / ${den3}`);
// }

// console.log(calcAdd(d2.num2, d2.den2));

// Функция вычитания 2-х объектов-дробей;

// function calcSub(x, y) {
//     if (y > d1.den1 || d1.den1 > y) {
//         den3 = d1.den1 * y;
//         num3 = (d1.num1 * y) - (x * d1.den1);
//     } else if (y == d1.den1) {
//         den3 = y;
//         num3 = x - d1.num1;
//     }
//     if (num3 == den3) {
//         return (1)
//     }
//     if (num3 === 0) {
//         return (0)
//     }
//     i = den3;
//     while (i > 0) {
//         if (num3 % i === 0 && den3 % i === 0) {
//             num3 = num3 / i;
//             den3 = den3 / i;
//             break
//         }
//         i--;
//     }
//     c = 0;
//     while (num3 > den3) {
//         c = c + 1;
//         num3 = num3 - den3;
//     }
//     return (`${c} цел. ${num3} / ${den3}`);
// }
// console.log(calcSub(d2.num2, d2.den2));

// Функция умножения 2-х объектов-дробей;

// function calcMult(x, y) {

//     den3 = d1.den1 * y;
//     num3 = d1.num1 * x;
//     if (num3 == den3) {
//         return (1)
//     }
//     i = den3;
//     while (i > 0) {
//         if (num3 % i === 0 && den3 % i === 0) {
//             num3 = num3 / i;
//             den3 = den3 / i;
//             break
//         }
//         i--;
//     }
//     c = 0;
//     while (num3 > den3) {
//         c = c + 1;
//         num3 = num3 - den3;
//     }
//     if (num3 == den3) {
//         return (c + 1)
//     }
//     return (`${c} цел. ${num3} / ${den3}`);
// }
// console.log(calcMult(d2.num2, d2.den2));

// Функция деления 2-х объектов-дробей;

// function calcDiv(x, y) {

//     den3 = d1.den1 * x;
//     num3 = d1.num1 * y;
//     if (num3 == den3) {
//         return (1)
//     }
//     i = den3;
//     while (i > 0) {
//         if (num3 % i === 0 && den3 % i === 0) {
//             num3 = num3 / i;
//             den3 = den3 / i;
//             break
//         }
//         i--;
//     }
//     c = 0;
//     while (num3 > den3) {
//         c = c + 1;
//         num3 = num3 - den3;
//     }
//     if (num3 == den3) {
//         return (c + 1)
//     }
//     return (`${c} цел. ${num3} / ${den3}`);
// }
// console.log(calcDiv(d2.num2, d2.den2));

// Функция сокращения объекта-дроби.

// function calcRed(x, y) {
//     i = y;
//     while (i > 0) {
//         if (x % i === 0 && y % i === 0) {
//             x = x / i;
//             y = y / i;
//             break
//         }
//         i--;
//     }
//     c = 0;
//     while (x > y) {
//         c = c + 1;
//         x = x - y;
//     }
//     if (x == y) {
//         return (c + 1)
//     }
//     return (`${c} цел. ${x} / ${y}`);
// }
// console.log(calcRed(d2.num2, d2.den2));

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие
// функции для работы с этим объектом: 

let time = {
    sec: 10,
    min: 10,
    hours: 10
}
// Функция изменения времени на переданное количество секунд;

function calcSec(x) {
    x1 = +prompt('How many seconds add?', 0);
    x = x + x1
    while (x > 60) {
        time.min = time.min + 1;
        x = x - 60;
    }
    return (x)
}

// Функция изменения времени на переданное количество минут;

function calcMin(y) {
    y1 = +prompt('How many minutes add?', 0);
    y = y + y1
    while (y > 60) {
        time.hours = time.hours + 1;
        y = y - 60;
    }
    return (y)
}

//Функция изменения времени на переданное количество часов. 

function calcHours(z) {
    z1 = +prompt('How many hours add?', 0);
    z = z + z1
    while (z > 24) {
        z = z - 24;
    }
    return (z)
}
// Функция вывода времени на экран;

function getTime(z, y, x) {
    return (`${z}:${y}:${x}`)
}
alert(getTime(calcHours(time.hours), calcMin(time.min), calcSec(time.sec)));


