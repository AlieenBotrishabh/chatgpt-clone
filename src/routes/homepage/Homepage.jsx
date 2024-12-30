import { Link } from 'react-router-dom';
import './homepage.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const Homepage = () => {

    const [ typingStatus, setTypingStatus ] = useState("human");

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
                    <div className="chat">
                        <img src={ typingStatus === 'human1' ? '/human1.jpeg' : typingStatus === 'human2' ? '/human2.jpeg' : 'bot.png'} alt="" />
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Human : We produce food for Mice',
        2000, () => {
            setTypingStatus('bot')
        }, // wait 1s before replacing "Mice" with "Hamsters"
        'Bot : We produce food for Hamsters',
        2000, () => {
            setTypingStatus('human2')
        },
        'Human2 : We produce food for Guinea Pigs',
        2000,() => {
            setTypingStatus('bot')
        },
        'Bot : We produce food for Chinchillas',
        2000, () => {
            setTypingStatus('human1')
        },
      ]}
      wrapper="span"
      repeat={Infinity}
      cursor={true}
      omitDeletionAnimation={true}
    />
                    </div>
                </div>
                <div className="terms">
                    <img src="/logo.png" alt="" />
                    <div className="links">
                        <Link to='/'>Terms of Service</Link>
                        <Link to='/'>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;