import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose"; // ✅ Use jose instead of jsonwebtoken

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Convert secret to Uint8Array for jose
const secretKey = new TextEncoder().encode(JWT_SECRET);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Read token from cookies
  const userRole = req.cookies.get("role")?.value; // Read token from cookies
  console.log("Token:", token);

  // Allow public routes without authentication
  const publicRoutes = ["/login", "/admin-login"];
  if (publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/admin-login", req.url));
  }
  const loginRoutes = ["/admin-login","/"]
  if(token&&loginRoutes.includes(req.nextUrl.pathname)){
    return NextResponse.redirect(new URL(`/${userRole}-home`, req.url));
  }
  try {
    // Verify JWT token using jose
    const { payload } = await jwtVerify(token, secretKey);
    console.log(payload)
    // const userRole = payload.role;

    console.log(`Route: ${req.nextUrl.pathname} | Role: ${userRole}`);

    // Redirect user if they are not authorized for the route
    if (userRole === "user" && req.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/user-home", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("JWT Verification Failed:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin-home/:path*", "/user-home","/transaction"], // Protect these routes
};
