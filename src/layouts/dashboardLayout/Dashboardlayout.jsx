import { Outlet } from 'react-router-dom';
import './dashboardlayout.css';

const Dashboardlayout = () => {
    return (
        <div className='dashboard'>
            <div className='menu'>MENU</div>
            <div className='content'><Outlet /></div>
        </div>
    )
}

export default Dashboardlayout;