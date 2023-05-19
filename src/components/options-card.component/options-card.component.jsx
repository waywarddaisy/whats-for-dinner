import './options-card.styles.scss';



const OptionsCard = ({recipe, addToMeals})=>{
    return (
        <div className='options-card'>
            <div className='options-card-text'>
            <h5>{recipe.name}</h5>
            <p>by {recipe.author}</p>
            <button type="button" onClick={()=>{addToMeals(recipe)}}>Add</button>
            </div>
        </div>
    )
};

export default OptionsCard;