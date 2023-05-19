

const AddIngredient = () => {

    return( 
        <div>
            <label for="ingredients">Ingredient/s</label>
            <input type="text" id="ingredient" />

            <label for="increment">Increment</label>
            <input type="text" id="largeincrement" />

            <select name="increment" id="smallincrement">
                <option value="0">0</option>
                <option value=".25">1/4</option>
                <option value="1/3">1/3</option>
                <option value=".5">1/2</option>
                <option value=".75">3/4</option>
            </select>

            <label for="measurement unit">Type of Measurement</label>
            <select name="measurement" id="measuremethod">
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
            <br>
                <br>
                    <br>
                        <label for="category">Category</label>
                        <select name="category" id="category">
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

                        <br><br>
                            <br><br>
                                <button id="add" type="button" class="largeButton">Add Ingredient</button>

    </div>

                                
 )                               
};