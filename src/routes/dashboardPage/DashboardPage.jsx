import { Outlet } from 'react-router-dom';
import './dashboardpage.css';

const DashboardPage = () => {
    return (
        <div className='dashboard'>
            <div className='menu'>MENU</div>
            <div className='content'><Outlet /></div>
        </div>
    )
}

export default DashboardPage;