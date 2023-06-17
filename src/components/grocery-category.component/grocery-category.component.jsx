
import './grocery-category.styles.scss';
import AddIngredient from '../add-ingredient.component/add-ingredient.component';
import { useState } from 'react';



const GroceryCategory=({category, item, deleteIngredient, groceryCategories, setGroceryCategories})=>{
const [isShown, setIsShown]= useState(false);   

const handleClick = (event)=> {
    setIsShown(true);
};

    return (
        <div className='grocery-category-item'>
            <div className='text-container'>
            <h4>{category}</h4>
            <div className='grocery-items'>
            {item.map(ing =>  <div className='ingredients'>{ing.name} {ing.amount} {ing.unit} <button className="smallXButton" onClick={()=>{deleteIngredient(ing, item)}}>x</button></div>)}
            </div>
            <button type="button" className="add-ingredient-button" onClick ={handleClick}>Add Ingredient</button>
          { isShown && <AddIngredient groceryCategories={groceryCategories} 
          setGroceryCategories ={setGroceryCategories} item={item} isShown={isShown} setIsShown={setIsShown}/>}
            </div>
        </div>
    )
};

export default GroceryCategory;