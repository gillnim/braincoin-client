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

                        return (
                            <tr key={user.name}>
                                <td className="top-ten__cell">{index + 1}</td>
                                <td className="top-ten__cell">{user.name}</td>
                                <td className="top-ten__cell">{user.totalValueInMarkBucks}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TopTen;
