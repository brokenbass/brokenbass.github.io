'use strict';

let numberOfFilms;
function start (){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}
start();



const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actorus: {},
    genres: [],
    privat: false
};




function writeYouGeneres (){
    for (let i = 1; i < 4; i++){

        let ganr = prompt(`Ваш любимый жанр под номером ${i}` )
        personalMovieDb.genres[i - 1] = ganr;
        
    }
}
writeYouGeneres ();


function rememberMyFilms (){
    for (let i = 0; i <=1; i++){
        const a = prompt('Один из последних просмотреных фильмов?'),
              b = prompt('На сколько оцените его?');
    
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDb.movies[a] = b;
        } else {
            i--;
            alert('Попробуйте снова');
        };
    
    };
}
rememberMyFilms ();

function detectPersonalLevel (){
    if (personalMovieDb.count <=10){
        alert('Просмотрено довольно мало фильмов')
    }  else if (personalMovieDb.count > 10 && personalMovieDb.count <= 30){
        alert('Вы классический зритель')
    } else if (personalMovieDb.count > 30){
        alert('Вы киноман')
    } else {
        alert('Введите корректное число')
    };
}

detectPersonalLevel();

function shovMyDb (hidden){
    if (!hidden){
        console.log(personalMovieDb)
    }
}
shovMyDb (personalMovieDb.privat);



// // -----------------
// let money, time;

// function start(){

//     money = +prompt('Ваш бюджет на месяц?', "");
//     time = prompt('Введите дату в формате YYYY-MM-DD', "");

//     while (isNaN(money) || money =="" || money == null) {
//         alert('Введите данные корректно')
//         money = +prompt('Ваш бюджет на месяц?', "");
//     };
// }
// start();


// let appData = {
//     budget: money,
//     timeData: time,
//     expenses : {},
//     optionalExpenses: {},
//     income : [],
//     savings: true
// };

// function chooseExpences() {
//     for (let i = 1; i < 3; i++) {
//         let mandatoryExpense = prompt('Введите обязательную статью расходов в этом месяце', "");
//         let priceTag = prompt('Во сколько обойдется?', "");

//         if ((typeof(mandatoryExpense)) === "string" && (typeof(mandatoryExpense)) != null && (typeof(priceTag)) != null
//             && mandatoryExpense != "" && priceTag != ""){
//             appData.expenses[mandatoryExpense] = priceTag;
//         } else {
//             alert('Какая-то из строк выше пустая, повторите попытку')
//             i--
//         }

//     };
// }
// chooseExpences();

// function chooseOptExpenses() {

//     for (let i = 1; i < 4; i++) {
//         let optionalPriceTag = prompt("Статья необязательных расходов?", "");
//         let number = 1;

//         if ((typeof(optionalPriceTag)) === "string" && (typeof(optionalPriceTag)) != null && optionalPriceTag != ""){

//             appData.optionalExpenses[number] = optionalPriceTag;

//         } else {
//             alert('Какая-то из строк выше пустая, повторите попытку')
//             i--
//         }


//     };

// };
// chooseOptExpenses();


// function detectDayBudget (){
//     appData.moneyPerDay =  (appData.budget / 30).toFixed();
// }
// detectDayBudget();

// function detectLevel(){
//     if (appData.moneyPerDay < 1000){
//         console.log('Минимальный уровень достатка' );
//     } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000){
//         console.log('Средний достаток');
//     } else if (appData.moneyPerDay > 2000) {
//         console.log("Высокий уровень достатка")
//     } else {
//         console.log("Произошла ошибка")
//     };
// }


// function checkSavings() {
//     if (appData.savings == true){
//         let save = +prompt("Какова сумма накоплений?", ""),
//             persent = +prompt("Под какой процент?", "");

//         if ((typeof(save)) != "" && (typeof(save)) != null && (typeof(persent)) != "" && (typeof(persent)) != null
//             && persent != null && save != null) {
//             appData.monthIncome = (save /100/12*persent).toFixed();
//             alert("Доход в месяц с вашего депозита " + appData.monthIncome);
//         }


//         else {
//             alert("Введите корректные данные");
//             checkSavings();
//         };

//     };
// };

// checkSavings();

