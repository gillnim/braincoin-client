import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import TopTen from '../../components/TopTen/TopTen.jsx';
import './TopTenPage.scss';

function TopTenPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        function fetchTopTen() {
            axios.get('http://localhost:8080/top-ten')
                .then(function(response) {
                    setUsers(response.data);
                    setLoading(false);
                })
                .catch(function(err) {
                    setError('Error fetching top ten users');
                    setLoading(false);
                });
        }

        fetchTopTen();
    }, []);

    if (loading) return <div className="top-ten__loading">Loading...</div>;
    if (error) return <div className="top-ten__error">{error}</div>;

    return (
        <div className="top-ten-page">
            <h1 className="top-ten-page__title">Richest of the Rich 💰</h1>
            <TopTen users={users}/>
        </div>
    );
}

export default TopTenPage;
