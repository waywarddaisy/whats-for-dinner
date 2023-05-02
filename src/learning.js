const smallNumbers = [1,2,3,4];
const largeNumbers = [10,11,12,13,14];
console.log(typeof smallNumbers);
const bothNumbers = smallNumbers + largeNumbers;
console.log(bothNumbers, typeof bothNumbers);

const numbersTogether = [...smallNumbers, ...largeNumbers];
console.log(numbersTogether, typeof numbersTogether);

const person = {
    heartBeating: true,
    noArms: 2,
    noFingers: 10,

}

const archie = {
    hair: 'blonde',
    eyes: 'blue',
    age: 14,
    name: 'Archie',
}

const archieBoy = {...person, ...archie};

console.log(archieBoy, archieBoy.name);

const {name, age, eyes}= archieBoy;

console.log(name, age, eyes);

const allRecipes = [{name:'pizza'}, {name: 'salad'}, {name: 'roast-chicken'}];

const myRecipes = [{name: 'mac n cheese'}, {name: 'spaghetti'}, {name: 'hamburger'}];

const userOneRecipes = [...allRecipes, ...myRecipes];

const recipeNameList = ()=>{
    userOneRecipes.forEach(recipe => console.log(recipe.name));
};

recipeNameList();