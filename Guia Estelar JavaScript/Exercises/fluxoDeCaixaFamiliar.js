/*

    Sistema de gastos familiar

*/

let family = {
    incomes: [2600, 1000, 3000],
    expenses: [320.40, 278.20, 500]
}

function sum(array) {
    let total = 0;

    for (let item of array) total += item;

    return total;
}

function calculateBalance() {
    const totalIncomes = sum(family.incomes);
    const totalExpenses = sum(family.expenses);

    const total = totalIncomes - totalExpenses;
    const itsOk = total >= 0;

    let balanceText = "negative";

    if (itsOk) balanceText = "positive";

    console.log(balanceText);
}

calculateBalance();