import React, { useState } from 'react';
import './CoinCard.scss';

const CoinCard = ({ coin, onFlip }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
        onFlip(coin, !flipped);
    };
    const instructorImages = {
        'Umer Coins': '../../src/images/umer.png',
        'Mark Bucks': '../../src/images/mark.png',
        'Jim\'s Neo Coin': '../../src/images/jim.png',
        'Kowsiya\'s K-Bar': '../../src/images/kowsiya.png',
        'Michelle\'s CorgiCoin': '../../src/images/michelle.png'

    };

    const instructorImage = instructorImages[coin.name];

    return (
        <div className="coin-card-wrapper">
            <div className={`coin-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
                <div className="coin-card-front">
                    <h3>{coin.name || 'Unknown Coin'}</h3>
                </div>
                <div className="coin-card-back">
                    {instructorImage ? (
                        <img
                            src={instructorImage}
                            alt={coin.name}
                            className="instructor-image"
                        />
                    ) : (
                        <h3>No Image Available</h3>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoinCard;
