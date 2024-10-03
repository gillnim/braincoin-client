import React, { useState } from 'react';
import './CoinCard.scss';

const CoinCard = ({ coin, onFlip }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
        onFlip(coin, !flipped);
    };

    return (
        <div className="coin-card-wrapper">
            <div className={`coin-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
                <div className="coin-card-front">
                    <h3>{coin.name || 'Unknown Coin'}</h3>
                </div>
            </div>
        </div>
    );
};

export default CoinCard;
