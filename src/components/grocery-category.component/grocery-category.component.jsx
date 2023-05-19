
import './grocery-category.styles.scss';
import Ingredient from '../ingredient.component/ingredient.component';

const GroceryCategory=({category, item, deleteIngredient})=>{
    const addIngredient =()=>{};

    return (
        <div className='grocery-category-item'>
            <div className='text-container'>
            <h4>{category}</h4>
            <div className='grocery-items'>
            {item.map(ing =>  <div className='ingredients'>{ing.name} {ing.amount} {ing.unit} <button className="smallXButton" onClick={()=>{deleteIngredient(ing, item)}}>x</button></div>)}
            </div>
            <button type="button" className="add-ingredient-button">Add Ingredient</button>
            </div>
        </div>
    )
};

export default GroceryCategory;