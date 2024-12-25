import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
    return (
        <div className='homepage'>
            <img src="/orbital.png" alt="orbital" className='orbital'/>
            <div className='left'>
                <h1>LAMA AI</h1>
                <h2>Superchrge your creativity</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className='right'>
                <div className='imgContainer'>
                    <div className='bgContainer'>
                        <div className='bg'></div>
                    </div>
                    <img src="/bot.png" alt="" className='bot'/>
                </div>
            </div>
        </div>
    )
}

export default Homepage;