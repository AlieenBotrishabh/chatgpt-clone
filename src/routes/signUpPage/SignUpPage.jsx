import { SignUp } from '@clerk/clerk-react';
import './signUpPage.css';

export default function SignUpPage() {
  return (
    <div className='signUpPage'>
      <SignUp path='/sign-in' signUpUrl="/sign-in"/>
    </div>
  )
}