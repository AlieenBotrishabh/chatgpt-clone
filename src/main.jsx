import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './routes/homepage/Homepage.jsx';
import DashboardPage from './layouts/dashboardLayout/Dashboardlayout.jsx';
import ChatPage from './routes/chatPage/ChatPage.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import Dashboardlayout from './layouts/dashboardLayout/Dashboardlayout.jsx';
import SignInPage from './routes/signInPage/SignInPage.jsx';
import SignUpPage from './routes/signUpPage/SignUpPage.jsx';
import { AuthProvider } from './layouts/dashboardLayout/AuthContext.jsx';  // Import AuthProvider

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <Dashboardlayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />
          }
        ]
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>  {/* Wrap the entire app with AuthProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

export default App;
