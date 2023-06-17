
import { useState, useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './find-meal.styles.scss';
import OptionsCard from '../../components/options-card.component/options-card.component';
import MyMealsCard from '../../components/mymeals-card.component/mymeals-card.component';
import GroceryCategory from '../../components/grocery-category.component/grocery-category.component';
import Print from '../../components/react-to-print.component/react-to-print';
import ParentPrint from '../../components/react-to-print.component/parent-print.component';
import { Link } from 'react-router-dom';


const FindMeals = () => {

    const printRef = useRef();
    const [season, setSeason] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [myMeals, setMyMeals] = useState([]);
    const [ingredientsList, setIngredientsList] = useState([]);
    const [groceryCategories, setGroceryCategories] = useState([]);
    const [showPrint, setShowPrint] = useState(false);

    useEffect(() => {
        const getRecipes = async () => {
            const response = await fetch('http://localhost:3005/recipes');
            const data = await response.json();
            console.log(data);
            setRecipeList(data);
        }
        getRecipes();
    }, []);

    const myOptions = season === "All"
        ? recipeList : (season === '')
            ? []
            : recipeList.filter(item => item.season === season || item.season === "both");

    const addToMeals = (recipe) => {
        setMyMeals([...myMeals, recipe])
    };

    const deleteMeal = (meal) => {
        let deleteId = meal.id;
        setMyMeals([...myMeals.filter(item => item.id !== meal.id)])
    };

    const doubleHalfRecipe = (meal, num) => {
        const myNewMapArray = myMeals.map(item => {
            if (item.id === meal.id) {
                item.serves *= num
                item.ingredientsList.forEach(ing => {
                    ing.largeIncrement = ing.largeIncrement * num;
                    ing.smallIncrement = ing.smallIncrement * num;
                })
            }
            return item;
        })

    
        setMyMeals(myNewMapArray);
    };

    const getGroceryList = () => {
   
        const ingredients = {
            'fake': {
                amount: 0,
                unit: '',
                category: ''
            }
        };
        myMeals.forEach(meal => meal.ingredientsList.forEach(ing => {
            if (ingredients[ing.name] && ingredients[ing.name].unit === ing.measureMethod) {
                ingredients[ing.name].amount += Number(ing.largeIncrement) + Number(ing.smallIncrement);


            } else {
                ingredients[ing.name] = { amount: Number(ing.largeIncrement) + Number(ing.smallIncrement), unit: ing.measureMethod, category: ing.category }
            }

        }));
        delete ingredients.fake;
//changes ingredients back into an array
        let makeObjectsIntoArray = Object.entries(ingredients);
        let ingOnList = {
            name: '',
            amount:0,
            unit:'',
            category:''
        }
        let newList=[];
        for (let i=0; i<makeObjectsIntoArray.length;i++) {
            ingOnList.name = makeObjectsIntoArray[i][0];
            ingOnList.amount = makeObjectsIntoArray[i][1].amount;
            ingOnList.unit = makeObjectsIntoArray[i][1].unit;
            ingOnList.category = makeObjectsIntoArray[i][1].category;
            let clone = {...ingOnList};
            newList.push(clone)
        }
        

        return newList;
    };

    const deleteIngredient = (key, item) => {
         let tempList =[...groceryCategories];
         let listIndex = tempList.indexOf(item);
         let deleteIndex = tempList[listIndex].indexOf(key);
        tempList[listIndex].splice(deleteIndex, 1);
        setGroceryCategories(tempList);
    };

    const aisleCategories =()=>{
        const newList = getGroceryList();
        setIngredientsList(newList); 
        let produce = newList.filter(item => item.category === 'Produce');
        let spiceOils = newList.filter(item => item.category === "Spice/Oils");
        let dairy = newList.filter(item => item.category === 'Dairy');
        let meatSeafood = newList.filter(item => item.category === "Meat/Seafood");
        let deli = newList.filter(item => item.category === "Deli");
        let dryGoods = newList.filter(item => item.category === "Dry Goods");
        let cannedJarredGoods = newList.filter(item => item.category === "Canned/Jarred Goods");
        let frozenFoods = newList.filter(item => item.category === "Frozen Foods");
        let bakery = newList.filter(item => item.category === "Bakery");
        let condiments = newList.filter(item => item.category === "Condiment/s");
        let refrigerated = newList.filter(item => item.category === "Refrigerated");

        let categories = [];
        categories.push(produce, spiceOils, dairy, meatSeafood, deli, dryGoods, cannedJarredGoods, frozenFoods, bakery, condiments, refrigerated);
        setGroceryCategories(categories);
        setShowPrint(true);
    };


    return (
        <div className='find-meals-container'>

            <div className="filter-meals">
                <h2>1. Select Meal Season</h2>
                <div className="season-input">
                    <label htmlFor="season">Season</label>
                    <select name="season" id="season" onChange={(e) => setSeason(e.target.value)}>
                        <option value="">Choose Season</option>
                        <option value="Warm">warm</option>
                        <option value="Cool">cool</option>
                        <option value="All">all</option>
                    </select>
                    <button id="findmeals" type="button" className="large-button" onClick={() => { setShowOptions(true) }}>Find Recipes</button>
                </div>


                <div className='my-options' id='my-options'>
                    <h2>2. My Options</h2>
                    <div className='options-container' id='options-container'>
                        {showOptions && myOptions.map((option) => {
                             return <OptionsCard recipe={option} addToMeals={addToMeals} />
                            
                        })}

                    </div>

                </div>


                <div className='meals-section' >
                    <h2>3. My Meals</h2>
            
                    <div id='my-meals'>
                        {myMeals.map((meal) => {
                             return <MyMealsCard recipe={meal} doubleHalfRecipe={doubleHalfRecipe} deleteMeal ={deleteMeal}/>

                        })}
                    </div>
                </div>
                <div className='grocery-list'>
                    <button type='button' className ="large-button" onClick={() => { aisleCategories() }}>View Grocery List</button>
                    <div className='plan-grocery-container'>

                        {/* {ingredientsList.map(item => <div>{item.name} {item.amount} {item.unit} <button type="button" onClick={()=>{deleteIngredient(item)}}>x</button></div>)} */}

                      {groceryCategories.map((item)=> {if (item.length>0){
                      return <GroceryCategory category = {item[0].category} item = {item} deleteIngredient={deleteIngredient} 
                      groceryCategories={groceryCategories} setGroceryCategories={setGroceryCategories}/>}})}
                    

                 
                    </div>
                    <div>
                        {showPrint && <Link to="/print" state={{myMeals, groceryCategories}} ><button className ="large-button" type="button">Preview Meal Plan & Grocery List</button></Link>}

                    </div>
                </div>


            </div>

        </div>
    )
};

export default FindMeals