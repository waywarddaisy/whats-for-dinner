
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import About from './routes/about/about.component'
import AddRecipe from './routes/add-recipe/add-recipe.component'
import FindMeals from './routes/find-meal/find-meal.component'
import CookbookShop from './routes/cookbook-shop/cookbook-shop.component'
import Contact from './routes/contact/contact.component';
import './App.scss'
import Authentication from './routes/authentication/authentication.component';
import ParentPrint from './components/react-to-print.component/parent-print.component';
import ProductPage from './routes/product-page/product-page.component';
import { useState } from 'react';



const App = () => {

  const [shoppingCart, setShoppingCart]= useState([]);

  const addToCart =(cartItem)=>{
    setShoppingCart([...shoppingCart, cartItem])
  };


  return (
    
    <Routes className = 'App'>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="add-recipe" element={<AddRecipe />} /> */}
        <Route path="find-meals" element={<FindMeals />} />
        <Route path="cooking-shop" element={<CookbookShop />} />
        <Route path="product-page/:id" element={<ProductPage addToCart={addToCart}/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="print" element={<ParentPrint />} />
        {/* <Route path="auth" element={<Authentication/>} /> */}
        </Route>
    </Routes>
  
  );
};

export default App;
