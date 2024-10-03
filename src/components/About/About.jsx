import React, { useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import './About.sass';

const About = () => {
    const coins = [
        {
            name: 'Umer Coins',
            description: 'Earned by answering questions in class.',
            conversionRateToMarkBucks: 0.2,
        },
        {
            name: 'Mark Bucks',
            description: 'Base currency for all conversions.',
            conversionRateToMarkBucks: 1,
        },
        {
            name: 'Kowsiya\'s K-Bar',
            description: '1 K-Bar = 500 Mark Bucks.',
            conversionRateToMarkBucks: 500,
        },
        {
            name: 'Michelle\'s CorgiCoin',
            description: '1 CorgiCoin = 500 Mark Bucks.',
            conversionRateToMarkBucks: 500,
        },
        {
            name: 'Jim\'s Neo Coin',
            description: '1 Neo Coin = 1000 Mark Bucks.',
        },
    ];

    const [selectedCoin, setSelectedCoin] = useState(null);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = (coin, flipped) => {
        if (flipped) {
            setSelectedCoin(coin);
        } else {
            setSelectedCoin(null);
        }
        setIsFlipped(flipped);
    };

    return (
        <div className="about-page">
            <h1>About BrainCoins</h1>

            <div className="coins-inline">
                {coins.map((coin, index) => (
                    <CoinCard key={index} coin={coin} onFlip={handleFlip} />
                ))}
            </div>
            {selectedCoin && isFlipped && (
                <div className="coin-info-dropdown">
                    <h3>{selectedCoin.name}</h3>
                    <p>{selectedCoin.description}</p>
                    <p>Value: {selectedCoin.conversionRateToMarkBucks} Mark Bucks</p>
                </div>
            )}

            <div className="about-app">
                <h2>What is BrainCoins?</h2>
                <p>BrainCoins is a fun, virtual currency system created for students to track their learning progress and reward engagement during the class...</p>
            </div>
        </div>
    );
};

export default About;
