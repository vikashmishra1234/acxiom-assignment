import connectToDatabase from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"; // Use a secure environment variable

export async function POST(req: Request) {
  try {
    console.log("logging In...")
    await connectToDatabase();
    const { userId, password,role } = await req.json();

    if (!userId || !password) {
      return NextResponse.json({ error: "User ID and password are required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ userId });
    if (!existingUser) {

      return NextResponse.json({ error: "User does not exist" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Generate JWT Token with role
    const token = jwt.sign(
      { userId: existingUser.userId, role: existingUser.role }, // Include role in token
      JWT_SECRET,
      { expiresIn: "7d" } 
    );

    // Set token & role in HTTP-only cookies
    const response = NextResponse.json({ message: "Login successful" });
   
    response.cookies.set("token", token, { httpOnly: true, secure: true, path: "/" });
    response.cookies.set("role", role, { httpOnly: true, secure: true, path: "/" });
    console.log("✅ Cookie Set: ", response.cookies.get("token")); 

    return response;
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
