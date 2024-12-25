import { Link, Outlet } from 'react-router-dom';
import './rootLayout.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
    return (
        
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <div className='rootlayout'>
            <header>
                <div className='logo'>
                <img src="/logo.png" alt="" />
                <span>LAMA AI</span>
                </div>
            </header>
            {/* <div className='user'>
            <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

            </div> */}
            <main>
                <Outlet />
            </main>
        </div>
        </ClerkProvider>
    )
}

export default RootLayout;