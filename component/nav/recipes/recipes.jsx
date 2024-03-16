import { useState } from 'react';
import './recipes.css'
import { useEffect } from 'react';
import Card from '../../card/card';
import RecipeOrder from '../../recipe-order/recipe-order';


// const recipes = () => {

// }



const Recipes = () => {

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/muhammad-tamim/saikat-assaginment-7-api/main/api.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])

    return (
        <div className="recipes-section">
            <div className="recipe-description">
                <h1 >Our Recipes</h1>
                <p>
                    Indulge in the exquisite flavors of our signature recipe, meticulously crafted to tantalize your taste buds with every bite. Elevate your culinary experience with our culinary masterpiece.
                </p>
            </div>
            <div className="recipe-content">
                <div className="recipe-card">
                    {
                        recipe.map(card => <Card key={card?.card?.id} card={card}></Card>)
                    }

                </div>
                <RecipeOrder></RecipeOrder>
            </div>
        </div>
    );
};

export default Recipes;