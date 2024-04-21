import React, { useState, useEffect } from 'react';

const Wallet = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const getAccountInfo = async () => {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Get the accounts
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        // Set the first account as the connected account
        setAccount(accounts[0]);

        // Get balance
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [accounts[0], 'latest'], // Get the balance of the connected account
        });

        // Convert balance from Wei to Ether
        const balanceInEther = window.web3.utils.fromWei(balance, 'ether');
        setBalance(balanceInEther);
      } catch (error) {
        console.error('Error fetching account info:', error);
      }
    };

    // Check if MetaMask is installed
    if (window.ethereum) {
      getAccountInfo();
    } else {
      console.log('MetaMask not detected');
    }
  }, []);

  return (
    <div>
      <h2>Wallet Section</h2>
      <p>Connected Account: {account}</p>
      <p>Balance: {balance} ETH</p>
    </div>
  );
};

export default Wallet;
