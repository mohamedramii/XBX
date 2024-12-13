import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userName, code } = await request.json();

    console.log("Received userName:", userName);
    console.log("Received verification code:", code);

    // Configure request body with required fields
    const requestBody = JSON.stringify({ userName, code });

    console.log("Request body to external API:", requestBody);

    // Send code and userName to the external API
    const response = await fetch('https://xbx-server.vercel.app/user/emailVerification', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Verification successful:", data);
      // You can update user status here if needed
      return NextResponse.json({ message: "Email verification successful" });
    } else {
      console.error("Verification failed:", data);
      return NextResponse.json({ error: data.error || "Verification failed" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error in verify-email API route:", error);
    return NextResponse.json({ error: "Server error", details: error.message }, { status: 500 });
  }
}
