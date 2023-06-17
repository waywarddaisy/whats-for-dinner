import React from 'react';
import './react-to-print.styles.scss';

const Print = React.forwardRef(({ myMeals, groceryCategories }, ref) => {
    console.log(myMeals)
    console.log(groceryCategories, 'gc from print')

    return (
        <div ref={ref} className ="container">
            <div className='meal-plan'>
                <h1>Meal Plan</h1>
                {myMeals.map((meal) => { return <div>-{meal.name}, from {meal.source}, by {meal.author}, Serves {meal.serves}, {meal.page}</div> })}
            </div>
            <h1>Grocery List</h1>
            <div className='groceries'>
                

                {groceryCategories.map((category) => {
                    if (category.length > 0) {
                        return <div className='aisle-cat-container'><h4>{category[0].category}</h4><div>{category.map((item)=>{return <div>{item.name} {item.amount} {item.unit}</div>})}</div></div>
                    } else { return null }
                })}
            </div>
        </div>
    )
});

export default Print;