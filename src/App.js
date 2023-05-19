
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import About from './routes/about/about.component'
import AddRecipe from './routes/add-recipe/add-recipe.component'
import FindMeals from './routes/find-meal/find-meal.component'
import GroceryList from './routes/grocery-list/grocery-list.component'
import CookbookShop from './routes/cookbook-shop/cookbook-shop.component'
import Contact from './routes/contact/contact.component';
import './App.scss'
import Authentication from './routes/authentication/authentication.component';



const App = () => {

  return (
    
    <Routes className = 'App'>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="add-recipe" element={<AddRecipe />} /> */}
        <Route path="find-meals" element={<FindMeals />} />
        <Route path="grocery-list" element={<GroceryList />} />
        <Route path="cooking-shop" element={<CookbookShop />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="auth" element={<Authentication/>} /> */}
        </Route>
    </Routes>
  
  );
};

export default App;
