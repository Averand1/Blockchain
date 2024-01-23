import React, { useState, useEffect } from 'react';
import '../market.css'; // Import the CSS file for styling

const Market = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch('https://api.coincap.io/v2/markets');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();

        if (data && data.data) {
          const sortedData = data.data.slice().sort((a, b) => {
            return a.baseId.localeCompare(b.baseId);
          });
          setMarketData(sortedData);
        }
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div className="market-container">
      <h1>Cryptocurrency Market</h1>
      <table className="coin-table">
        <thead>
          <tr>
            <th>Coin Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Quote Symbol</th>
          </tr>
        </thead>
        <tbody>
          {marketData.map((coin, index) => (
            <tr className="coin-item" key={index}>
              <td>{coin.baseId}</td>
              <td>{coin.baseSymbol}</td>
              <td>{coin.priceUsd}</td>
              <td>{coin.quoteSymbol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Market;
