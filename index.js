import inquirer from "inquirer";
const exchangerates = {
    'USD': 1.0758,
    'JPY': 160.55,
    'BGN': 1.9558,
    'CZK': 24.954,
    'DKK': 7.4562,
    'GBP': 0.85378,
    'HUF': 387.03,
    'PLN': 4.3375,
    'RON': 4.9771,
    'SEK': 11.2705,
    'CHF': 0.9409,
    'ISK': 149.50,
    'NOK': 11.4120,
    'TRY': 32.9243,
    'AUD': 1.6569,
    'BRL': 5.3546,
    'CAD': 1.4505,
    'CNY': 7.7420,
    'HKD': 8.4139,
    'IDR': 16843.42,
    'ILS': 3.9612,
    'INR': 89.2765,
    'KRW': 1433.01,
    'MXN': 18.3777,
    'MYR': 5.1310,
    'NZD': 1.7668,
    'PHP': 60.148,
    'SGD': 1.4489,
    'THB': 38.621,
    'ZAR': 20.3930,
};
console.log("WELCOME TO CURRENCY CONVERTOR!");
async function currencyConvertor() {
    const questions = [
        {
            type: 'number',
            name: 'amount',
            message: 'Enter the ammount'
        },
        {
            type: 'list',
            name: 'fromCurrency',
            message: 'Enter the current currency ',
            choices: Object.keys(exchangerates)
        },
        {
            type: 'list',
            name: 'toCurrency',
            message: 'Enter the target currency',
            choices: Object.keys(exchangerates)
        }
    ];
    const answers = await inquirer.prompt(questions);
    const amount = parseFloat(answers.amount);
    const inputCurrency = answers.fromCurrency;
    const outputCurrency = answers.toCurrency;
    if (!(inputCurrency in exchangerates) || !(outputCurrency in exchangerates)) {
        console.log("Invalid Currency");
    }
    const rateFrom = exchangerates[inputCurrency];
    const rateTo = exchangerates[outputCurrency];
    const convertedAmount = (amount / rateFrom) * rateTo;
    console.log(`${amount} ${inputCurrency} is equal to ${convertedAmount} ${outputCurrency}`);
}
currencyConvertor();
