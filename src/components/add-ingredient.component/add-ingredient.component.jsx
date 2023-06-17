import './add-ingredient.styles.scss';
import { useState } from 'react';

const AddIngredient = ({ groceryCategories, setGroceryCategories, isShown, setIsShown }) => {

    const [ingName, setIngName] = useState('');
    const [ingCategory, setIngCategory] = useState('');
    const [largeIncrement, setLargeIncrement] = useState(0);
    const [smallIncrement, setSmallIncrement] = useState(0);
    const [measureMethod, setMeasureMethod] = useState('');

    const onSubmit = () => {
        let newIng = {
            name: ingName,
            amount: Number(largeIncrement) + Number(smallIncrement),
            unit: measureMethod,
            category: ingCategory,
        };
        let tempList = [...groceryCategories];

        tempList = tempList.filter(arr => arr.length > 0);

        let addIndex = 'empty';
        let combineIndex = 'empty';


        tempList.forEach((cat) => {
            if (cat[0].category === newIng.category) {
                addIndex = tempList.indexOf(cat);
                console.log(addIndex);
            }
        }
        );


        if (addIndex > -1) {

            tempList[addIndex].forEach(item => {
                if (item.name === newIng.name && item.unit === newIng.unit) {
                    item.amount += newIng.amount;
                    combineIndex = 'match';
                } else {
                    if (combineIndex === 'match') {
                    } else {
                        combineIndex = 0;
                    }
                }
            })
        };

        if (combineIndex === 0 && addIndex > -1) {
            tempList[addIndex].push(newIng);
        } else if (addIndex === 'empty') {
            tempList.push([newIng]);
        }

        setGroceryCategories(tempList);

        setIngName('');
        setIngCategory('');
        setLargeIncrement(0);
        setSmallIncrement(0);
        setMeasureMethod('');

        setIsShown(false);
        
    }


    return (

        <div className="add-ingredient-container">
            <div className='add-ing-top-row'>
                <label>Ingredient</label>
                <input type="text"
                    required
                    onChange={(e) => { setIngName(e.target.value) }}
                    value={ingName} />

                <label >Category</label>
                <select
                    name="category"
                    value={ingCategory}
                    onChange={(e) => { setIngCategory(e.target.value) }} >
                    <option value="none" selected>Select Category</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Spice/Oils">Spice/Oils</option>
                    <option value="Produce">Produce</option>
                    <option value="Meat/Seafood">Meat/Seafood</option>
                    <option value="Deli">Deli</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Canned/Jarred Goods">Canned/Jarred Goods</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Condiment/s">Condiment/s</option>
                    <option value="Refrigerated">Refrigerated</option>
                </select>
            </div>
            <div className='add-ing-second-row'>
                <label htmlFor="increment">Increment</label>
                <input type="text"
                    value={largeIncrement}
                    onChange={(e) => { setLargeIncrement(e.target.value) }} />

                <select
                    value={smallIncrement}
                    onChange={(e) => { setSmallIncrement(e.target.value) }}  >
                    <option value="0">0</option>
                    <option value=".25">1/4</option>
                    <option value="1/3">1/3</option>
                    <option value=".5">1/2</option>
                    <option value=".75">3/4</option>
                </select>

                <label htmlFor="unit">Unit</label>
                <select
                    value={measureMethod}
                    onChange={(e) => { setMeasureMethod(e.target.value) }}  >
                    <option value="none" selected>Select Measurement</option>
                    <option value="Ingredient/s">Ingredient/s</option>
                    <option value="Cup/s">Cup/s</option>
                    <option value="Teaspoon/s">Teaspoon/s</option>
                    <option value="Tablespoon/s">Tablespoon/s</option>
                    <option value="Pinch/es">Pinch/es</option>
                    <option value="Handful/s">Handful/s</option>
                    <option value="Head/s">Head/s</option>
                    <option value="Can/s">Can/s</option>
                    <option value="Ounce/s">Ounce/s</option>
                    <option value="Gram/s">Gram/s</option>
                    <option value="Pound/s">Pound/s</option>
                    <option value="Pint/s">Pint/s</option>
                    <option value="Bunch/es">Bunch/es</option>
                    <option value="Clove/s">Clove/s</option>
                    <option value="Bag/s">Bag/s</option>
                    <option value="Milliliters">Milliliters</option>
                    <option value="Kilogram/s">Kilogram/s</option>
                    <option value="Container/s">Container/s</option>
                </select>
            </div>


            <button type="button" onClick={onSubmit}>Add</button>

        </div>
    )
};

export default AddIngredient;