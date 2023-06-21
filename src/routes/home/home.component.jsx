import './home.component.scss'
import homeSplash from '../../assets/stefan-vladimirov-Q_Moi2xjieU-unsplash.jpg';



const Home =()=> {

    return (
        <div className='home-container'>
            {/* <div>
<h1 className='home-title'>Dinner simplified . . .</h1>
<h1 className='home-title'>Curated recipes & instant shopping lists . . .</h1>
<h1 className='home-title'>Shave hours off your week and love the meals you eat . . .</h1>
            </div> */}

            <h1 className='splash-text'>The mere asking of this question can cause chaos, mental-breakdown, murderous thoughts, depression and divorce . . .</h1>


            <h1 className='splash-text' id='splash-text-two'>Let's simplify dinner !</h1>
            
            <div className='splash-image'>
           <img src={homeSplash}  className='splash'/>
           </div>
        </div>
    )
};

export default Home