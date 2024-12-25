import { Outlet, useNavigate } from 'react-router-dom';
import './dashboardlayout.css';

const Dashboardlayout = () => {

    const { userId, isLoaded } = useAuth();

    const navigate = useNavigate();

    return (
        <div className='dashboard'>
            <div className='menu'>MENU</div>
            <div className='content'><Outlet /></div>
        </div>
    )
}

export default Dashboardlayout;