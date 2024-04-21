import React from 'react';
import '../tutorial.css'

const Tutorials = () => {
  const tutorials = [
    {
      title: "Introduction to Cryptocurrency",
      description: "Learn the basics of cryptocurrency, including what it is, how it works, and why it's important.",
      link: "https://www.investopedia.com/terms/c/cryptocurrency.asp"
    },
    {
      title: "How to Buy Bitcoin",
      description: "Step-by-step guide on how to buy Bitcoin, from choosing a wallet to making your first purchase.",
      link: "https://www.coinbase.com/buy-bitcoin"
    },
    {
      title: "Understanding Blockchain Technology",
      description: "Explore the fundamentals of blockchain technology and its applications beyond cryptocurrencies.",
      link: "https://www.ibm.com/blockchain/what-is-blockchain"
    },
    {
        title: "Getting Started with MetaMask",
        description: "Learn how to set up and use MetaMask, a popular Ethereum wallet and gateway to decentralized applications.",
        link: "https://learn.metamask.io/overview"
    }
    // Add more tutorials as needed
  ];

  return (
    <div>
      <h2>Tutorial Section</h2>
      <div className="tutorial-list">
        {tutorials.map((tutorial, index) => (
          <div className="tutorial-item" key={index}>
            <h3>{tutorial.title}</h3>
            <p>{tutorial.description}</p>
            <a href={tutorial.link} target="_blank" rel="noopener noreferrer">Read Full Tutorial</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
