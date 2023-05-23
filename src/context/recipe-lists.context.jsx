// import { createContext } from "react";

// //as the actual value you want to access

// export const RecipeContext = createContext({
// currentRecipesList: null,
// setCurrentRecipesList: ()=> null,

// });

// export const RecipeProvider = ({children})=> {
//     const [currentRecipesList, setCurrentRecipesList] = useState(null);
//     const value = {currentRecipesList, setCurrentRecipesList};

//     return <RecipeProvider.Provider value={value}>{children}</RecipeProvider.Provider>
// };