import './options-card.styles.scss';
import OptionsAddButton from '../options-add-button.component/options-add-button.component';



const OptionsCard = ({recipe, addToMeals, optionAdd, setOptionAdd, myMeals})=>{
    return (
        <div className='options-card'>
            <div className='options-card-text'>
            <h5>{recipe.name}</h5>
            <p>{recipe.source}</p>
            <p>by {recipe.author}</p>
            {/* <button type="button" onClick={()=>{addToMeals(recipe)}}>{optionAdd}</button> */}
            <OptionsAddButton recipe = {recipe} addToMeals={addToMeals} myMeals={myMeals}/>
            </div>
        </div>
    )
};

export default OptionsCard;