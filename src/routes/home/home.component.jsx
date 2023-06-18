import './home.component.scss'
import homeSplash from '../../assets/stefan-vladimirov-Q_Moi2xjieU-unsplash.jpg';



const Home =()=> {

    return (
        <div className='home-container'>
            <div>
<h1 className='home-title'>Dinner simplified . . .</h1>
<h1 className='home-title'>Curated recipes & instant shopping lists . . .</h1>
<h1 className='home-title'>Shave hours off your week and love the meals you eat . . .</h1>
            </div>
           <img src={homeSplash}  />
        </div>
    )
};

export default Home