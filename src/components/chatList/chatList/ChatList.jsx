import { Link } from 'react-router-dom';
import './chatList.css';

const ChatList = () => {
    return (
        <div className='chatList'>
            <span>DASHBOARD</span>
            <Link to="/dashboard">Create a new chat</Link>
            <Link to="/">Explore Lama AI</Link>
            <Link to="/">Contact</Link>
            <hr />
            <span className='title'>RECENT CHATS</span>
            <div className='list'>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <hr />
            </div>
            <div className='upgrade'>
                <img src="/logo.png" alt="" />
                <div className='text'>
                    <span>Upgade to LAMA AI Pro</span>
                    <span>Get unlimited access to all the features</span>
                </div>
            </div>
        </div>
    )
}

export default ChatList;