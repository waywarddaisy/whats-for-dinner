
import './grocery-category.styles.scss';
import AddIngredient from '../add-ingredient.component/add-ingredient.component';



const GroceryCategory=({category, item, deleteIngredient, groceryCategories, setGroceryCategories})=>{
   

    return (
        <div className='grocery-category-item'>
            <div className='text-container'>
            <h4>{category}</h4>
            <div className='grocery-items'>
            {item.map(ing =>  <div className='ingredients'>{ing.name} {ing.amount} {ing.unit} <button className="smallXButton" onClick={()=>{deleteIngredient(ing, item)}}>x</button></div>)}
            </div>
            <button type="button" className="add-ingredient-button">Add Ingredient</button>
           <AddIngredient groceryCategories={groceryCategories} setGroceryCategories ={setGroceryCategories} item={item}/>
            </div>
        </div>
    )
};

export default GroceryCategory;