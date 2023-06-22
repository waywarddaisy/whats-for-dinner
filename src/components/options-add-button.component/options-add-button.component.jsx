import { Fragment } from 'react';
import './options-add-button.styles.scss';

const OptionsAddButton = ({recipe, addToMeals, myMeals})=> {

    const isAdded = myMeals.find(item => item.id === recipe.id);

    return (
        <>
        <button onClick={()=>{addToMeals(recipe)}}>{isAdded ? 'Added': 'Add'}</button>
        
        </>    
    )


};

export default OptionsAddButton;