import React, { useState } from "react";
import "./styles.css";

export default function App() {
    // TODO: Store selected target currency for conversion
    const [selectedCurrency] = useState("USD");

    // TODO: Store the total converted balance in the selected currency
    const [totalConverted] = useState(0);

    return (
        <div className="App">
            <h1>Hello Wallet</h1>

            {/* Balances */}
            <h2>Balances</h2>
            <ul>
                {/* TODO: Render user balances here */}
            </ul>

            {/* Static Exchange Rates */}
            <h2>Exchange Rates (Static)</h2>
            <ul>
                {/* TODO: Render static exchange rates here */}
            </ul>

            {/* Live Exchange Rates */}
            <h2>Live Exchange Rates</h2>
            <ul>
                {/* TODO: Render live exchange rates here */}
            </ul>

            {/* TODO: Implement a button to manually refresh live exchange rates */}
            <button>Refresh Live Exchange Rates</button>

            {/* Currency Conversion Feature */}
            <h2>Convert Balances</h2>
            <label>Select Target Currency:</label>
            <select
                value={selectedCurrency}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>

            {/* TODO: Implement the button to trigger balance conversion */}
            <button >Convert Balances</button>

            {/* Display Total Converted Balance */}
            {totalConverted > 0 && (
                <h3>
                    Total in {selectedCurrency}: {totalConverted}
                </h3>
            )}
        </div>
    );
}
