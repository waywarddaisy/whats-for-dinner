import './home.component.scss'
import homeSplash from '../../assets/stefan-vladimirov-Q_Moi2xjieU-unsplash.jpg';



const Home =()=> {

    return (
        <div className='home-container'>
           <img src={homeSplash}  />
        </div>
    )
};

export default Home