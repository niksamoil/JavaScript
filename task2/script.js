let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    buget:  money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50) {  
        console.log("Done!");
        appData.expenses[a] = b;
    } else  {
        alert("Ошибка, вам нужно ввести данные");
        console.log("Ошибка, вам нужно ввести данные");
        i--;
    }
}


// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//     && a != '' && b != '' && a.length < 50) {  
//         console.log("Done!");
//         appData.expenses[a] = b;
//     } else  {
//         alert("Ошибка, вам нужно ввести данные");
//         console.log("Ошибка, вам нужно ввести данные");
//         i--;
//     }
//     i++;
// }

// let i = 0;

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//     && a != '' && b != '' && a.length < 50) {  
//         console.log("Done!");
//         appData.expenses[a] = b;
//     } else  {
//         alert("Ошибка, вам нужно ввести данные");
//         console.log("Ошибка, вам нужно ввести данные");
//         i--;
//     }

//     i++;
// }

// while (i < 2);


appData.moneyPerDay = appData.buget / 30;

alert("Consumul zilnic :" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log("Это высокий уровень достатка!");
} else {
    console.log("Произошла ошибка");
}

console.log(appData);