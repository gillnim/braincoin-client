import './TopTen.scss';

function TopTen({users}) {

    return (
        <div className="top-ten">
            <h1 className="top-ten__title">Top Ten Richest Users</h1>
            <table className="top-ten__table">
                <thead>
                    <tr>
                        <th className="top-ten__header-cell">Rank</th>
                        <th className="top-ten__header-cell">Name</th>
                        <th className="top-ten__header-cell">Total Value in Mark Bucks</th>
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
                            <tr key={user.name}>
                                <td className="top-ten__cell">{index + 1}</td>
                                <td className="top-ten__cell">{user.name}</td>
                                <td className="top-ten__cell">{totalValue.toFixed(2)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TopTen;
