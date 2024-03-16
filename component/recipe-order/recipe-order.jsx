
const RecipeOrder = () => {
    return (
        <div className="recipe-order">
            <h3>Want to cook: 01</h3>
            <hr />
            <table>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                <tr>
                    <td>Chicken Caesar Salad</td>
                    <td>20 minutes</td>
                    <td>400 calories</td>
                    <td><button>Preparing</button></td>
                </tr>
            </table>
            <h3>Currently cooking: 02</h3>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                <tr>
                    <td>Spaghetti Bolognese</td>
                    <td>30 minutes</td>
                    <td>600 calories</td>
                </tr>
            </table>
        </div>
    );
};

export default RecipeOrder;