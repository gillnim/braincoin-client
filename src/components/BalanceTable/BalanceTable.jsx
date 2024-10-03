import React from 'react';
import './BalanceTable.scss'; 

function BalanceTable({ users }) {
    return (
        <table className="balance-table">
            <thead className="balance-table__header">
                <tr>
                    <th className="balance-table__header-cell">Name</th>
                    <th className="balance-table__header-cell">Umer Coins</th>
                    <th className="balance-table__header-cell">Mark Bucks</th>
                    <th className="balance-table__header-cell">K-Coins</th>
                    <th className="balance-table__header-cell">CorgiCoins</th>
                    <th className="balance-table__header-cell">Neo Coins</th>
                    <th className="balance-table__header-cell">Total Value in Mark Bucks</th>
                </tr>
            </thead>
            <tbody className="balance-table__body">
                {users.map(function(user, index) {
                    const totalValue = (user['Umer coins'] || 0) * (100 / 500) +
                                       (user['Mark bucks'] || 0) +
                                       (user['Kcoins'] || 0) * (500) +
                                       (user['CorgiCoins'] || 0) * (500) +
                                       (user['Neo Coins'] || 0) * (1000);

                    return (
                        <tr className="balance-table__row" key={index}>
                            <td className="balance-table__cell">{user.name}</td>
                            <td className="balance-table__cell">{user['Umer coins']}</td>
                            <td className="balance-table__cell">{user['Mark bucks']}</td>
                            <td className="balance-table__cell">{user['Kcoins']}</td>
                            <td className="balance-table__cell">{user['CorgiCoins']}</td>
                            <td className="balance-table__cell">{user['Neo Coins']}</td>
                            <td className="balance-table__cell">{totalValue.toFixed(2)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default BalanceTable;
