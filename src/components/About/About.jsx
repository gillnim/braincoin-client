import React from 'react';
import { coins } from '../CoinCard/CoinCard';
import CoinCard from '../CoinCard/CoinCard';
import './About.sass';

const About = () => {
    return (
        <div className="about-page">
            <h1>About BrainCoins</h1>
            <div className="coins-container">
                {coins.map((coin, index) => (
                    <CoinCard key={index} coin={coin} />
                ))}
            </div>
        </div>
    );
};

export default About;
