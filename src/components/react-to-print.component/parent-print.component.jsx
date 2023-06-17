
import ReactToPrint from 'react-to-print';
import Print from "./react-to-print";
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './parent.print.styles.scss';

const ParentPrint = ()=>{
    const printRef = useRef();
    const location = useLocation();
    const myMeals = location.state.myMeals;
    const groceryCategories = location.state.groceryCategories;
    console.log(myMeals);
    console.log(groceryCategories, 'grocery categories');

    return (
        <div className='print-page-container'>
            
            <Print ref = {printRef} myMeals={myMeals} groceryCategories={groceryCategories}/>
            <ReactToPrint
                    trigger={()=> <button className="large-button">Print</button>}
                    content ={()=>printRef.current}
                    documentTitle ='Meal Plan and Grocery List'
                    pageStyle = "print"
                    />
         
        </div>
    )
};



export default ParentPrint;