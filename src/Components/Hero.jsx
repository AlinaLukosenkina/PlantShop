import './ComponentsStyle/Hero.scss'
import heroRight from '../assets/hero-plant-r.png'
import heroLeft from '../assets/hero-plant-l.png'
import Button from './Button'

export default function Hero() {

    return(
        <>
        <div className="light-bg">
            <div className="leaf">
            <div className="wrapper hero">
                <div className="hero-mid">
                    <h1 className="main-title">Plants are our Passion</h1>
                    <p className="slogan">Even if you don’t have a green thumb, you can still have a green home.</p>
                    <Button className={'white-btn'} children={'GET PLANTING'}/>

                </div>
                </div>
            </div>
        </div>

        <div className="dark-line"></div>
        </>
    );
}