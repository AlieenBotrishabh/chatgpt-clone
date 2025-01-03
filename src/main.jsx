import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './routes/homepage/Homepage.jsx';
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx';  // Update the correct import
import ChatPage from './routes/chatPage/ChatPage.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/Dashboardlayout.jsx';  // Fix casing here
import SignInPage from './routes/signInPage/SignInPage.jsx';
import SignUpPage from './routes/signUpPage/SignUpPage.jsx';
import { AuthProvider } from './layouts/dashboardLayout/AuthContext.jsx';

// Adjust routing to show DashboardPage as the default child route of DashboardLayout
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
        path: "/dashboard",
        element: <DashboardLayout />,  // Show the sidebar layout at /dashboard
        children: [
          {
            index: true,  // Load DashboardPage by default when at /dashboard
            element: <DashboardPage />
          },
          {
            path: "chats/:id",
            element: <ChatPage />
          }
        ]
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

export default App;
