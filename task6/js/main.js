'use strict';

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSaving = document.getElementsByClassName('monthsavings')[0],
    monthSavingValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('.expenses-item'),

    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    savings = document.getElementById('savings'),

    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),

    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');




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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.buget / 30).toFixed();
        alert("Ежедневный бюджет :" + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Каково сумма накоплений?"),
                percent = +prompt("Под каким процентом?");
    
            appData.moneyIncome = save/100/12*percent;
            
            alert("Доход в месяц с вашего депозита:" + appData.moneyIncome );
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let chooseOptAdded = prompt("Статья необязательных расходов?");
    
            appData.optionalExpenses[i] = chooseOptAdded;
        }
    },
    choseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принисет дополнительный доход? (Перечисли через запятую)", "");
    
            if ( (typeof(items)) === 'string' && items != '' && (typeof(items)) != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
                appData.income.forEach(function(item, itemNumber){
                    console.log('Способы доп. заработка ' + (itemNumber+1) + ': ' + item);
                });
            } else {
                alert("Введите данные");
                i--;
            }
        }
    }
};


appData.choseIncome();

console.log(appData);

for ( let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' с такими параметрами :' + appData[key]);
}

 