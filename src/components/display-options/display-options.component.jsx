
// import './display-options.styles.scss';


// const DisplayOptions = ()=> {

//     const addToMyMeals = (event) => {
//             console.log(event.target.id, 'event.target.id');
            
//             // let myOptions = findSeason();
//             let myMeals = myOptions.filter(item => item.name === event.target.id);
//             console.log(myMeals, 'myMeals');
//             return myMeals
//     }

//     const displayOptions = () => {
//             // let myOptions = findSeason();
//             myOptions.forEach((item) => {
//                 let optionButton = document.createElement('div');
//                 optionButton.className = 'meal-option';
//                 optionButton.id = item.name;
//                 let header = document.createElement('h4');
//                 header.innerHTML = item.name;
//                 optionButton.appendChild(header);
//                 let button = document.createElement('button');
//                 button.type = "button";
//                 button.innerHTML = "Add";
//                 button.addEventListener("click", addToMyMeals);
//                 optionButton.appendChild(button);
//                 let myOptionsSection = document.getElementById('options-container');
//                 myOptionsSection.appendChild(optionButton);
//             })
//         }

//     return (
//         // <div className='options-container' id='options-container'></div>

//         <div className='meal-option'>
//             <h4></h4>
//             <button type='button'>Add</button>
//         </div>
//     )
// };

// export default DisplayOptions;