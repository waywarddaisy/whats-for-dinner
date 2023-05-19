
import './season.styles.scss';

const recipeList = [{ name: "Homemade Pizza", season: "Warm", serves: 4, ingredients: [{ name: "tomato-sauce", largeIncrement: 2, smallIncrement: 1 / 2, measureMethod: "Cups", category: "Canned/Jarred Goods" }, { name: "dough", largeIncrement: 1, smallIncrement: 1 / 4, measureMethod: "Tablespoon", category: "Bakery" }] },
{ name: "Crunchy Citrus and Chicories with Turmeric Tahini Dressing", season: "Cool", serves: 6, ingredients: [{ name: "lettuce", largeIncrement: 2, smallIncrement: 1 / 2, measureMethod: "Cups", category: "Produce" }, { name: "sunflower seeds", largeIncrement: 1, smallIncrement: 1 / 4, measureMethod: "Tablespoon", category: "Dry Goods" }] },
{ name: "Tomato Soup", season: "Both", serves: 2, ingredients: [{ name: "garlic", largeIncrement: 2, smallIncrement: 1 / 2, measureMethod: "Cups", category: "Produce" }, { name: "basil", largeIncrement: 1, smallIncrement: 1 / 4, measureMethod: "Tablespoon", category: "Produce" }] },
{ name: "Roasted Spring Chicken", season: "Warm", serves: 4, ingredients: [{ name: "shredded chicken", largeIncrement: 2, smallIncrement: 1 / 2, measureMethod: "Cups", category: "Deli" }, { name: "stock", largeIncrement: 1, smallIncrement: 1 / 4, measureMethod: "Tablespoon", category: "Canned/Jarred Goods" }] },
{ name: "Bacon & Fig Jam Sandwich", season: "Cool", serves: 1, ingredients: [{ name: "ham", largeIncrement: 2, smallIncrement: 1 / 2, measureMethod: "Cups", category: "Deli" }, { name: "cheese", largeIncrement: 1, smallIncrement: 1 / 4, measureMethod: "Tablespoon", category: "Deli" }] }];


const Season = ()=> {

    const findSeason = () => {
        let season = document.getElementById('season').value;
        let myOptions = [];
        if (season === "Cool") {
            myOptions = recipeList.filter(item => item.season === "Cool" || item.season === "Both");
            console.log(myOptions);
        } else if (season === "Warm") {
            myOptions = recipeList.filter(item => item.season === "Warm" || item.season === "Both");
            console.log(myOptions);
        }
        else if (season === "All") {
            myOptions = recipeList;
            console.log(myOptions);
        }
        return myOptions;
    };

    return (
        <div className="season-container">
                <div className="season-input">
                    <label htmlFor="season">Season</label>
                    <select name="season" id="season">
                        <option value="Warm">Warm</option>
                        <option value="Cool">Cool</option>
                        <option value="All">All</option>
                    </select>
                    <button id="findmeals" type="button" className="large-button" onClick={() => {findSeason()}}>Find Recipes</button>
                </div>
                </div>
    )
};

export default Season;