import './mymeals-card.styles.scss';



const MyMealsCard = ({recipe, doubleHalfRecipe, deleteMeal })=>{
    return (
        <div className='my-meals-card'>
            <div className='my-meals-card-text'>
                <div className='x-button-div'><button className='small-x-button' onClick={()=>{deleteMeal(recipe)}}>X</button></div>
            <h5>{recipe.name}</h5>
            <p>Serves {recipe.serves}</p>
            <div className='buttons-div'>
            <button type="button" onClick={()=>{doubleHalfRecipe(recipe, 2)}}>Double It!</button> <button type="button" onClick={()=>{doubleHalfRecipe(recipe, .5)}}>Half It!</button>
            </div>
            </div>
        </div>
    )
};

export default MyMealsCard;