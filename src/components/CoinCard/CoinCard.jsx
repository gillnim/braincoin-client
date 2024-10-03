import React, { useState } from 'react';
import './CoinCard.scss';

const CoinCard = ({ coin }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="coin-card" onClick={() => setExpanded(!expanded)}>
            <img src={coin.image} alt={coin.name} className="coin-image" />
            <h3>{coin.name}</h3>
            {expanded && (
                <div className="coin-details">
                    <p>{coin.description}</p>
                    <p>Conversion Rate to Mark Bucks: {coin.conversionRateToMarkBucks}</p>
                </div>
            )}
        </div>
    );
};

export default CoinCard;
