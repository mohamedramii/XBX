// app/sign-in/page.js

'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from '../../services/api';
import { setToken } from '../../utils/token';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      console.log('Attempting to sign in with email:', email);
      const response = await signIn({ email, password });
      const data = response.data;

      console.log('Sign-in response data:', data);

      if (data.AccessToken && data.userID && data.userName) {
        dispatch(
          setUser({
            token: data.AccessToken,
            userDetails: {
              userID: data.userID,
              userName: data.userName,
              email,
            },
          })
        );
        // Set token in cookies
        setToken(data.AccessToken);

        router.push('/');
      } else {
        alert(data.error || 'Sign-in failed. Please check the entered data.');
      }
    } catch (error) {
      console.error('Sign-in error:', error);
      alert(error.response?.data?.error || 'Sign-in failed. Please try again.');
    }
  };

  const handleSkip = () => {
    router.push('/'); // Redirect to home page
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen overflow-hidden mx-auto relative">
      {/* Left side - Logo Section (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-[45%] w-full h-full relative items-center justify-center overflow-hidden bg-white">
        {/* Background Patterns */}
        <div className="absolute -top-[10%] left-[55%] w-full h-auto z-0 opacity-50">
          <Image
            src="/pattern/pattern-dots.svg"
            width={354}
            height={490}
            alt="Pattern Dots"
            className="scale-125"
          />
        </div>
        <div className="absolute -bottom-[15%] left-[20%] w-auto h-auto z-0 ">
          <Image
            src="/pattern/pattern-dots.svg"
            width={354}
            height={490}
            alt="Pattern Dots"
            className="scale-125"
          />
        </div>

        <div className="text-center z-10">
          <Image
            src='/images/xbxlogo.svg'
            width={436.67}
            height={150}
            alt="XBX Logo"
          />
          <p className="mt-4 text-primary font-medium text-lg lg:text-xl">
            Transforming Ideas into Innovative Solutions
          </p>
        </div>
      </div>

      {/* Right side - Sign In Form */}
      <div className="lg:w-[55%] w-full h-screen flex items-center justify-center bg-white p-4 lg:p-12 z-50 shadow-lg">
        <div className="w-full max-w-[90%] lg:max-w-[500px] flex flex-col justify-center items-center">
          {/* Logo for Mobile */}
          <div className="flex lg:hidden text-center mb-4 items-center justify-center">
            <Image
            src="/images/xbxlogo.svg"
            width={200}
              height={80}
              alt="XBX Logo"
            />
          </div>

          <button className="flex items-center justify-center absolute right-0 top-12  text-white font-poppins font-semibold text-lg leading-8 w-40 h-8" onClick={handleSkip}>
            <p className='text-[#11a900] mr-2'>
              Skip for now
              </p> 
              <Image src="/icons/arrow-skip-sign.svg" alt="Skip Icon" width={20} height={20} className="mr-2" />

          </button>

          <h2 className="text-[35px] lg:text-[50px] text-primary font-semibold text-center mb-4">Sign In</h2>
          <p className="text-gray-600 text-[16px] lg:text-[20px] text-center mb-6">
            Join a Community of Innovators <br /> Your Future Awaits!
          </p>
          <form onSubmit={handleSignIn} className="space-y-4 w-full">
            <div className="mb-4">
              <label className="block mb-2 font-medium text-secondary text-[18px]">
                Email
              </label>
              <input
                type="email"
                className="w-full h-[45px] lg:h-[60px] px-4 border border-gray-300 rounded-[10px] lg:rounded-[20px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-secondary text-[18px]">
                Password
              </label>
              <input
                type="password"
                className="w-full h-[45px] lg:h-[60px] px-4 border border-gray-300 rounded-[10px] lg:rounded-[20px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold rounded-[10px] lg:rounded-[20px] h-[45px] lg:h-[60px]"
            >
              SIGN IN
            </button>
          </form>

          {/* Divider with OR */}
          <div className="flex items-center my-6 w-full">
            <hr className="flex-grow border-2 border-primary" />
            <span className="mx-4 text-primary font-bold">OR</span>
            <hr className="flex-grow border-2 border-primary" />
          </div>

          <Link href="/sign-up" className="w-full">
            <button
              type="button"
              className="w-full font-bold border border-primary text-primary rounded-[10px] lg:rounded-[20px] flex justify-center items-center h-[45px] lg:h-[60px]"
            >
              DON'T HAVE AN ACCOUNT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
