
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import About from './routes/about/about.component'
import AddRecipe from './routes/add-recipe/add-recipe.component'
import FindMeal from './routes/find-meal/find-meal.component'
import GroceryList from './routes/grocery-list/grocery-list.component'
import CookbookShop from './routes/cookbook-shop/cookbook-shop.component'
import './App.scss'
import SignIn from './routes/sign-in/sign-in.component';



const App = () => {

  return (
    
    <Routes className = 'App'>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="add-recipe" element={<AddRecipe />} />
        <Route path="find-meal" element={<FindMeal />} />
        <Route path="grocery-list" element={<GroceryList />} />
        <Route path="cookbook-shop" element={<CookbookShop />} />
        <Route path="sign-in" element={<SignIn/>} />
        </Route>
    </Routes>
  
  );
};

export default App;
