// app/api/auth/user/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Get the token from cookies
    const token = request.cookies.get('token')?.value;

    console.log("Token from cookies in user route:", token);

    if (!token) {
      console.error("No token found in cookies");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch user data from the external API
    const response = await fetch('https://xbx-server.vercel.app/user/userData', {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (response.ok && data.user) {
      console.log("User data fetched from external API:", data);
      return NextResponse.json({ user: data.user });
    } else {
      console.error("Failed to fetch user data:", data);
      return NextResponse.json({ error: data.error || "Failed to fetch user data" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error in user API route:", error);
    return NextResponse.json({ error: "Server error", details: error.message }, { status: 500 });
  }
}
