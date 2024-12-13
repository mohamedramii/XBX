// app/api/auth/sign-in/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    console.log('Received sign-in request:', { email });

    // Sign in via the external API
    const signInResponse = await fetch('https://xbx-server.vercel.app/user/Signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await signInResponse.json();
    console.log('Sign-in response from external API:', data);

    if (signInResponse.ok && data.AccessToken && data.userID && data.userName) {
      console.log('Sign-in successful:', data);

      // Prepare the response and set the cookie
      const res = NextResponse.json({
        user: {
          userID: data.userID,
          userName: data.userName,
          email,
        },
        token: data.AccessToken,
      });

      res.cookies.set('token', data.AccessToken, {
        httpOnly: true,
        path: '/',
        sameSite: 'Lax',
        secure: process.env.NODE_ENV === 'production',
      });

      return res;
    } else {
      console.error('Sign-in failed:', data);
      return NextResponse.json({ error: data.error || 'Sign-in failed' }, { status: 401 });
    }
  } catch (error) {
    console.error('Error in sign-in API route:', error);
    return NextResponse.json({ error: 'Server error', details: error.message }, { status: 500 });
  }
}
