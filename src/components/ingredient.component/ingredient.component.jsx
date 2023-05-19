import './ingredient.styles.scss';

const Ingredient = ({name, amount, unit, deleteIngredient, ing})=>{


    return (
        <div className="ingredient">
            {name} {amount} {unit} <button onClick={()=>{deleteIngredient(ing)}}>x</button>
        </div>
    )
};

export default Ingredient;