import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../dashboardLayout/AuthContext';
import './dashboardlayout.css';
import ChatList from '../../components/chatList/chatList/ChatList';

const DashboardLayout = () => {
    const { user, isLoaded } = useAuth();
    const navigate = useNavigate();

    // Redirect to login if user is not authenticated
    if (!user && isLoaded) {
        navigate('/login');
        return null;
    }

    return (
        <div className='dashboardLayout'>
            <div className='menu'><ChatList /></div>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
