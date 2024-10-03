import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BalanceTable from '../../components/BalanceTable/BalanceTable.jsx'; 

function Balance() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        function fetchBalances() {
            axios.get('http://localhost:8080/balance')
                .then(function(response) {
                    setUsers(response.data);
                    setLoading(false);
                })
                .catch(function(err) {
                    setError('Error fetching balances');
                    setLoading(false);
                });
        }

        fetchBalances();
    }, []);

    if (loading) return <div className="balance__loading">Loading...</div>;
    if (error) return <div className="balance__error">{error}</div>;

    return (
        <div className="balance">
            <h1 className="balance__title">User Balances</h1>
            <BalanceTable users={users} /> 
        </div>
    );
}

export default Balance;
