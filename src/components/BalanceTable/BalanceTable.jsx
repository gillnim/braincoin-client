import React from 'react';

function BalanceTable({ users }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Umer Coins</th>
                    <th>Mark Bucks</th>
                    <th>Kowsiya</th>
                    <th>CorgiCoins</th>
                    <th>Neo Coins</th>
                    <th>Total Value in Mark Bucks</th>
                </tr>
            </thead>
            <tbody>
                {users.map(function(user, index) {
                    const totalValue = (user['Umer coins'] || 0) * (100 / 500) +
                                       (user['Mark bucks'] || 0) +
                                       (user['Kowsiya'] || 0) * (500) +
                                       (user['CorgiCoins'] || 0) * (500) +
                                       (user['Neo Coins'] || 0) * (1000);

                    return (
                        <tr key={index}>
                            <td>{user.name}</td><td>{user['Umer coins']}</td>
                            <td>{user['Mark bucks']}</td><td>{user['Kowsiya']}</td>
                            <td>{user['CorgiCoins']}</td><td>{user['Neo Coins']}</td>
                            <td>{totalValue.toFixed(2)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default BalanceTable;
