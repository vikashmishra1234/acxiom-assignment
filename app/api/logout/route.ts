import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ message: "Logout successful" });

  // Remove the JWT cookie by setting it with an expired date
  response.cookies.set("token", "", { 
    httpOnly: true, 
    secure: true,
    path: "/", 
    expires: new Date(0) // Expire immediately
  });

  return response;
}
