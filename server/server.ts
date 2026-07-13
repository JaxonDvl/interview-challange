import express from "express";
import cors from "cors";

const app = express();
const PORT = 5001;

app.use(cors());

// TODO: add a middleware that logs each incoming request (method + path).

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

// TODO: support optional query params on 'GET /exchange-rates', e.g.
//  '/exchange-rates?from=USD&to=EUR', returning only the matching rates.

// TODO: add a new endpoint 'GET /exchange-rates/live',
//  that returns the exchange rates fluctuated by a random delta in [ -0.025, 0.025 ]
//  relative to the current rate.

app.get("/balances", (req, res) => {
    res.json(balances);
});

// TODO: add 'POST /balances/deposit' with body { currency, amount } that adds
//  amount to the matching balance. Reject a missing/negative amount with 400.

// TODO: add a new endpoint 'POST /convert' that converts every balance into a
//  target currency and returns the per-currency amounts plus the summed total.


app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
});
