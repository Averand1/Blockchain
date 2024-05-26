import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../market.css'; // Import the CSS file for styling

const Market = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        // Access the environment variable directly from import.meta.env
        const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;

        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
          {
            headers: {
              'accept': 'application/json',
              'x-cg-demo-api-key': apiKey // Use the environment variable here
            }
          }
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };
  
    fetchCryptoData();
  }, []);

  return (
    <div className="market-container">
      <h1>Top Cryptocurrencies</h1>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={index}>
              <td><img src={crypto.image} alt={crypto.name} style={{ width: '50px' }} /></td>
              <td>{crypto.symbol.toUpperCase()}</td>
              <td>${crypto.current_price}</td>
              <td>${crypto.total_volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Market;
