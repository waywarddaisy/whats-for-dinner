const recipeList = [{ name: "Homemade Pizza", season: "Warm", serves: 4, ingredients: [{ name: "tomato-sauce", largeIncrement: 2, smallIncrement: 1 / 2, measureMethod: "Cups", category: "Canned/Jarred Goods" }, { name: "dough", largeIncrement: 1, smallIncrement: 1 / 4, measureMethod: "Tablespoon", category: "Bakery" }] },
{ name: "Crunchy Citrus and Chicories with Turmeric Tahini Dressing", season: "Cool", serves: 6, ingredients: [{ name: "lettuce", largeIncrement: 2, smallIncrement: 1 / 2, measureMethod: "Cups", category: "Produce" }, { name: "ham", largeIncrement: 2, smallIncrement: 1 / 2, measureMethod: "Cups", category: "Deli" }, { name: "cheese", largeIncrement: 1, smallIncrement: 1 / 2, measureMethod: "Tablespoon", category: "Deli" }, { name: "sunflower seeds", largeIncrement: 1, smallIncrement: 1 / 4, measureMethod: "Tablespoon", category: "Dry Goods" }] },
{ name: "Tomato Soup", season: "Both", serves: 2, ingredients: [{ name: "garlic", largeIncrement: 2, smallIncrement: 1 / 2, measureMethod: "Cups", category: "Produce" }, { name: "basil", largeIncrement: 1, smallIncrement: 1 / 4, measureMethod: "Tablespoon", category: "Produce" }] },
{ name: "Roasted Spring Chicken", season: "Warm", serves: 4, ingredients: [{ name: "shredded chicken", largeIncrement: 2, smallIncrement: 1 / 2, measureMethod: "Cups", category: "Deli" }, { name: "stock", largeIncrement: 1, smallIncrement: 1 / 4, measureMethod: "Tablespoon", category: "Canned/Jarred Goods" }] },
{ name: "Bacon & Fig Jam Sandwich", season: "Cool", serves: 1, ingredients: [{ name: "ham", largeIncrement: 2, smallIncrement: 1 / 2, measureMethod: "Cups", category: "Deli" }, { name: "cheese", largeIncrement: 1, smallIncrement: 1 / 4, measureMethod: "Tablespoon", category: "Deli" }] }];

const ingredientsList = ()=>{
    ingList =[];
    recipeList.forEach(recipe=> {
        recipe.ingredients.forEach(ingredient=> {ingList.push(ingredient)})
    });
    ingList.forEach(ingredient => {
        ingredient.amount = ingredient.largeIncrement+ ingredient.smallIncrement;
        delete ingredient.largeIncrement;
      delete ingredient.smallIncrement;
    //   console.log(ingredient);
})
    return ingList
    
};

let allIngredients = ingredientsList();



const getGroceryList=()=>{


    // for(let i=0; i<allIngredients.length;i++){

       
    //     let fixItList = allIngredients.filter((item) => {
            
    //         allIngredients[i].name === item.name 
    //         && allIngredients[i].measureMethod ===item.measureMethod;
    //     });
           
    // }
 
};

getGroceryList();

// const getGroceryList=()=>{
//     let allIngredients = ingredientsList();

//     for(let i=0; i<allIngredients.length;i++){
//         allIngredients.forEach(ingredient => { 
//             if (allIngredients[i].name === ingredient.name 
//                 && allIngredients[i].measureMethod ===ingredient.measureMethod) {
//                     let amount = allIngredients[i].largeIncrement+allIngredients[i].smallIncrement+
//                     ingredient.largeIncrement+ingredient.smallIncrement;
                 
//                 console.log(allIngredients[i].name, 'found a match', amount);
//             }
//         else {
//             console.log(allIngredients[i].name, 'no match');
//         }});       
//     }

// };

 /*
    this is the object you are creating (will be empty before looping)
       const ingredients = {
        milk: {
           amount:
           unit:
        }
       }
    const items = [{name: "milk", amount: 5, unit: 'cups'}]
    items.forEach(ing => {
         if (ingredients[ing.name] && ingredient[ing.name].unit === ing.unit) {
          ingredients[ing.name].amount += ing.amount
        } else {
         ingredients[ing.name] = { amount: ing.amount, unit: ing.unit}
        }
    
    })
       */