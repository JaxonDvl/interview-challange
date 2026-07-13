# interview-challange — Backend Exercise

A small "Hello Wallet" API built with **Express + TypeScript**. Your task is to
extend the API in `server/server.ts` by implementing the endpoints marked with
`TODO`.

## Getting started

```bash
cd server
yarn install
yarn start
```

The API runs at `http://localhost:5001`.

## Existing endpoints

| Method | Path              | Description                       |
| ------ | ----------------- | --------------------------------- |
| GET    | `/exchange-rates` | Static list of exchange rates.    |
| GET    | `/balances`       | The user's balances per currency. |

The seed data lives in `server/server.ts`. Note that one rate is intentionally
`null` (`RON -> EUR`) — treat it as "unavailable".

## Your tasks

1. **`GET /exchange-rates/live`** — return the exchange rates, each fluctuated by
   a random delta in `[-0.025, +0.025]` relative to its current rate. Keep the
   `null` rate as `null` (don't turn it into `NaN`).

2. **`POST /convert`** — given a request body `{ "targetCurrency": "USD" }`,
   convert every balance into the target currency and return the per-currency
   amounts plus the summed total.
   - You'll first need to enable JSON body parsing (see the TODO near the top of
     `server/server.ts`).
   - Same-currency conversions (e.g. `USD -> USD`) have no rate entry — treat the
     rate as `1`.
   - Invalid input (unknown `targetCurrency`, a missing rate pair, or a `null`
     rate) should return a proper `400` with a clear message — not a crash or
     `NaN`.

3. **Request logging middleware** — log the method and path of each incoming
   request.

4. **Filter `GET /exchange-rates`** — support optional `?from=` / `?to=` query
   params that return only the matching rates.

5. **`POST /balances/deposit`** — given `{ currency, amount }`, add the amount to
   the matching balance. Reject a missing/negative amount with a `400`.

Follow the `TODO` comments in `server/server.ts` for details.
