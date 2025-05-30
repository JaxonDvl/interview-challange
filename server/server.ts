import express from "express";
import cors from "cors";

const app = express();
const PORT = 5001;

app.use(cors());

let exchangeRates = [
    { from: "USD", to: "EUR", rate: 0.85 },
    { from: "USD", to: "GBP", rate: 0.73 },
    { from: "EUR", to: "USD", rate: 1.18 },
    { from: "EUR", to: "GBP", rate: 0.87 },
    { from: "GBP", to: "USD", rate: 1.37 },
    { from: "GBP", to: "EUR", rate: 1.15 },
    { from: 'RON', to: 'EUR', rate: null },
];

const balances = [
    { currency: "USD", amount: 100 },
    { currency: "EUR", amount: 200 },
    { currency: "GBP", amount: 50 }
];

app.get("/exchange-rates", (req, res) => {
    res.json(exchangeRates);
});

// TODO: add a new endpoint 'exchange-rates/live',
//  that will fluctuate the exchange rates with [ -0.025, 0.025 ] the current rate

app.get("/balances", (req, res) => {
    res.json(balances);
});


app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
});
