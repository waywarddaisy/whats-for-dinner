
import './about.styles.scss';
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div className='about-page'>
            <div className="about-container">
                <div className='about-text'>


                    <p><span>T</span>he making of the dinner itself is its own kind of ordeal but it doesn't come close to the
                        stress of planning ahead and grocery shopping which often require one to use brain cells that are not available for use at the end of a busy day.</p>

                    <p>When I became a developer I decided to make a program that was going to solve this problem once and for all.</p>

                    <p>This site is built around my personal preference which is to cook from my favorite cookbooks, moderately healthy, curated meals from authors that I love.
                        Its a great excuse to continue to hoard cookbooks guilt-free!  </p>

                    <h1>How it Works</h1>

                    <p><span>1. </span>When you visit the <Link to="/find-meals">What's for Dinner?</Link> page, you'll first choose the season you are in. It includes meal options for cold weather and warm weather,
                        and recipes that work for both seasons.
                    </p>

                    <p><span>2. </span>From there you will select the recipes for your dinners that week. </p>

                    <p><span>3. </span>Meal Options. Here you can double or halve a recipe, depending on how many you are serving. </p>

                    <p>Now at the click of a button you will generate an automatic shopping list where you will get an organized list of each ingredient in the recipe and
                        the amounts of each ingredient required. At this point you are free to remove items you already have on hand,
                        add new ingredients to the list, etc. The list will be sorted by grocery aisle so you can easily navigate your grocery experience! </p>

                    <p>When you print your list, it will also include a Meal Plan at the top of the page, along with the recipe name, the cookbook its from and its page so you can find it easily come dinner time.</p>

                    <p>Voila! Meal planning completed! If you don't own the cookbooks, you may purchase them from the <Link to="/cooking-shop">Cooking Shop</Link>. This site does not include the recipes,
                        it only includes the ingredients contained in our curated recipes to automate the shopping list and meal planning aspect.</p>

                    <p>I hope this makes your life easier!</p>


                </div>
                <div className='about-image'>
                    <img src='https://res.cloudinary.com/dw0mjyoeg/image/upload/v1687375127/aboutphoto_ifyvve.jpg' id="image-about" />
                </div>
            </div>

            <div className='how-it-works'>

            </div>




        </div>
    )
};

export default About