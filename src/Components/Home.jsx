import react from 'react'
import NavBar from './NavBar'
import BannerBackground from "../Assets/home-banner-background.png"
import bannerImage from '../Assets/home-banner-image.png'
// import {fiArrowRight} from 'react-icons/fi'

const Home = () =>{
    return <div className='home-container'>
        <NavBar/>
        
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt="" />
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>
                Your Favourite Food Delivered Hot & Fresh
                </h1>
                <p className='primary-text'>
                Healthy switcher chefs do all the prep work, like 
peeding, chopping & marinating, so you can cook
a fresh food.
                </p>
            </div>
        </div>
    </div>
    
};

export default Home;

