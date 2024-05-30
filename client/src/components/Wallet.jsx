import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const Wallet = () => {
  const { currentAccount, balance, connectWallet } = useContext(TransactionContext);

  return (
    <div>
      <h2>Wallet Section</h2>
      {currentAccount ? (
        <div>
          <p>Connected Account: {currentAccount}</p>
          <p>Balance: {balance} ETH</p>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Wallet;
