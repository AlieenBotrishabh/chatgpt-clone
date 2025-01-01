import { Outlet } from 'react-router-dom';
import './dashboardpage.css';

const DashboardPage = () => {
    return (
        <div className='dashboardPage'>
            <div className='text'>MENU</div>
            <div className='logo'>
                <img src="/logo.png" alt="" />
                <h1>LAMA AI</h1>
            </div>
            <div className='option'>
                <img src="/chat.png" alt="" />
                <span>Create a new Chat</span>
            </div>
            <div className='option'>
                <img src="/image.png" alt="" />
                <span>Analyze Images</span>
            </div>
            <div className='option'>
                <img src="/code.png" alt="" />
                <span>Help me with the code</span>
            </div>
            <div className='formConatiner'>
                <form>
                    <input type="text" placeholder='Ask Me Anything' />
                    <button>
                        <img src="/arrow.png" alt="" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default DashboardPage;