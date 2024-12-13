// app/api/auth/sign-up/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { userName, email, password } = await request.json();

    console.log('Received sign-up request:', { userName, email });

    // Register the user via the external API
    const signUpResponse = await fetch('https://xbx-server.vercel.app/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, email, password }),
    });

    const signUpData = await signUpResponse.json();
    console.log('Sign-up response from external API:', signUpData);

    if (signUpResponse.ok) {
      console.log('Sign-up successful.');

      // Return a success message with userName for email verification
      return NextResponse.json({
        message: 'Sign-up successful. Please verify your email.',
        userName,
      });
    } else {
      console.error('Sign-up failed:', signUpData);
      return NextResponse.json(
        { error: signUpData.error || 'Sign-up failed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error in sign-up API route:', error);
    return NextResponse.json(
      { error: 'Server error', details: error.message },
      { status: 500 }
    );
  }
}
