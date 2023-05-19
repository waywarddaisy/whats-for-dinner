
import './about.styles.scss';
import aboutIMG from '../../assets/aboutimg.jpg';

const About = () => {

    return (
        <div className='about-page'>
            <div className="about-container">
                <div className='about-text'>
                    {/* <h1>Hey there!</h1> */}
                    <p><span>Hi there! </span>I created this site to help solve the much asked and less often answered question
                        "What's for Dinner?"</p>
                    <p>The mere asking of this question can cause chaos, mental-breakdown, murderous thoughts, depression and divorce.
                        The making of the dinner itself is its own kind of ordeal but from my perspective it doesn't come close to the
                        stress of planning and shopping which often require one to use brain cells that are not available for use at the end of a busy day.
                    </p>

                    <p>The question,"What's for dinner?" is the bane of a working women's career and the last straw for a stay-at-home mom who's already made 9,999 meals that day, cleaned up after each one, having
                        survived herself only on leftover PB&J crusts. Believe me, I know.
                    </p>

                    <p>When I became a software developer I decided to make a program that was going to solve this problem once and for all.</p>

                    <p>This program is built around my personal preference which is to cook from my favorite cookbooks, moderately healthy, curated meals from authors that I love.
                        I prefer not to use online recipes because unlocking my phone with dirty hands and waiting for ads is just too annoying. I prefer to cook from cookbooks because I LOVE books and its a great excuse for me to continue to hoard them without guilt. Over the years I have curated a small library of favorites.  </p>



                </div>
                <div className='about-image'>
                    <img src={aboutIMG} id="image-about" />
                </div>
            </div>

            <div className='how-it-works'>
                <h1>How it Works</h1>
                <p>With this site I've taken the names of my favorite recipes and entered them as meal options for you.
                    I have entered the ingredients as well as their amounts for each recipe.
                </p>
                <p>How it works is, you will select a meal or several meals from a curated list of recipes
                    I have tried myself, love and recommend. When you have selected them, at the click of a button my program will produce a grocery list organized by grocery aisle.
                    You can then remove the items you already have as well as add any additional items. At the top of the list will also be the names of the recipes you have selected.
                    This list can be emailed or printed for your use thus saving you hours of making lists, sifting through books and repeat grocery store trips.</p>

                <p>The recipes themselves are however not available on my site as that would be plaguerism. But in my cookbook shop, all of my recommended books are available for sale as well as some
                    of my most used cooking tools and favorite cooking items! This way you can create and add to your own cookbook library which will give you a break from and overly digital world
                    and will let you escape into the world of the author with beautiful images and food from their unique life. It is my dream that my children/grandchildren inherit a glorious library of well used cookbooks
                    that they will always remember me by.
                </p>
                <p>P.S. Over the years I have borrowed many cookbooks from my local library where they can usually order any book for you if they don't have it in stock. </p>
            </div>




        </div>
    )
};

export default About