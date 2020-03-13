let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();


let appData = {
    buget:  money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();

appData.moneyPerDay = (appData.buget / 30).toFixed();

alert("Ежедневный бюджет :" + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//     console.log("Это минимальный уровень достатка!");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log("Это средний уровень достатка!");
// } else if (appData.moneyPerDay > 2000) {
//     console.log("Это высокий уровень достатка!");
// } else {
//     console.log("Произошла ошибка");
// }

console.log(appData);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Каково сумма накоплений?"),
            percent = +prompt("Под каким процентом?");

        appData.moneyIncome = save/100/12*percent;
        
        alert("Доход в месяц с вашего депозита:" + appData.moneyIncome );
    }
}

checkSavings();


function detectDayBudget() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под каким процентом?");

        appData.moneyIncomePerDay = save/100/12/30*percent;
        
        alert("Доход в день с вашего депозита:" + appData.moneyIncomePerDay );
    }
}

detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        chooseOptAdded = prompt("Статья необязательных расходов?");

        appData.optionalExpenses[i] = chooseOptAdded;
    }
}

chooseOptExpenses();