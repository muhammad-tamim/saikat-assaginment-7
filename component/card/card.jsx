


const Card = (card) => {

    return (
        <div className="card">
            <img src={card.card.recipe_image} alt="" />
            <h3>{card?.card?.recipe_name}</h3>
            {/* <p>{card.short_description}</p> */}
            <hr />
            <h4>
                Ingredients:{card.card.ingredients.length}
            </h4>
            <ul>
                <li>500g ground beef</li>
                <li>1 onion, chopped</li>
                <li>2 cloves garlic, minced</li>
            </ul>
            <div className="time-calories">
                <p>{card.card.preparing_time}</p>
                <p>{card.card.calories}</p>
            </div>
            <button>Want to cook</button>
        </div>
    );
};

export default Card;