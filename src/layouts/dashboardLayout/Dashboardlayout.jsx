import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../dashboardLayout/AuthContext';
import './dashboardlayout.css';
import ChatList from '../../components/chatList/ChatList';

const DashboardLayout = () => {
    const { user, isLoaded } = useAuth();
    const navigate = useNavigate();

    if (!user && isLoaded) {
        navigate('/login');
        return null;
    }

    return (
        <div className='dashboardLayout'>
            <div className='menu'>
                <ChatList />  {/* Sidebar */}
            </div>
            <div className='content'>
                <Outlet />  {/* Main dashboard content (DashboardPage) */}
            </div>
        </div>
    );
};

export default DashboardLayout;
